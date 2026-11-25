import { spawnSync } from 'node:child_process';
import { cp, mkdir, mkdtemp, readFile, readdir, rename, rm, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

const root = fileURLToPath(new URL('../', import.meta.url));
const source = join(root, 'src');
const dist = join(root, 'dist');
const temporary = await mkdtemp(join(root, '.react-build-'));
const compiled = join(temporary, 'compiled');
const output = join(temporary, 'site');

try {
  const files = (await readdir(join(source, 'pages'))).filter(file => file.endsWith('.jsx'));
  const result = spawnSync(process.execPath, [
    join(root, 'node_modules/typescript/bin/tsc'),
    '--allowJs', '--jsx', 'react-jsx', '--target', 'es2022', '--module', 'node16',
    '--rootDir', source, '--outDir', compiled, '--noEmitOnError',
    ...files.map(file => join(source, 'pages', file)),
  ], { stdio: 'inherit' });

  if (result.error) throw result.error;
  if (result.status !== 0) throw new Error('JSX compilation failed.');

  await mkdir(output);
  await cp(join(root, 'public'), output, { recursive: true });
  await Promise.all(files.map(async file => {
    const page = file.slice(0, -4);
    const { default: Page } = await import(pathToFileURL(join(compiled, 'pages', page + '.js')).href);
    const [css, structuredData, interaction, cloudflare] = await Promise.all([
      readFile(join(source, 'styles', page + '.css'), 'utf8'),
      readFile(join(source, 'metadata', page + '.json'), 'utf8'),
      readFile(join(source, 'behavior', page + '.js'), 'utf8'),
      readFile(join(source, 'behavior', page + '.cloudflare.js'), 'utf8'),
    ]);
    const html = renderToStaticMarkup(createElement(Page, { css, structuredData, interaction, cloudflare }));
    await writeFile(join(output, page + '.html'), '<!DOCTYPE html>\n' + html + '\n');
  }));

  await rm(dist, { recursive: true, force: true });
  await rename(output, dist);
  console.log('Built ' + files.length + ' pages in dist/.');
} finally {
  await rm(temporary, { recursive: true, force: true });
}
