
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".main-nav");
const servicesDropdown = document.querySelector(".nav-services");
const servicesToggle = document.querySelector(".services-toggle");
const form = document.querySelector("form");
const header = document.querySelector(".site-header");
const progress = document.querySelector(".progress");
const sections = document.querySelectorAll(".section-animate");

const closeServicesMenu = (restoreFocus = false) => {
  servicesDropdown?.classList.remove("is-open");
  servicesToggle?.setAttribute("aria-expanded", "false");
  if (restoreFocus) servicesToggle?.focus();
};

/* ---------- mobile navigation ---------- */
toggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(isOpen));
  toggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    closeServicesMenu();
    nav.classList.remove("is-open");
    toggle?.setAttribute("aria-expanded", "false");
    toggle?.setAttribute("aria-label", "Open navigation");
  }
});

servicesToggle?.addEventListener("click", (event) => {
  event.stopPropagation();
  const isOpen = servicesDropdown.classList.toggle("is-open");
  servicesToggle.setAttribute("aria-expanded", String(isOpen));
});

/* ---------- services mega menu on hover (desktop/mouse only) ---------- */
let closeServicesTimer = null;
const canHoverServices = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
if (canHoverServices && servicesDropdown) {
  servicesDropdown.addEventListener("mouseenter", () => {
    clearTimeout(closeServicesTimer);
    servicesDropdown.classList.add("is-open");
    servicesToggle?.setAttribute("aria-expanded", "true");
  });
  servicesDropdown.addEventListener("mouseleave", () => {
    closeServicesTimer = setTimeout(() => closeServicesMenu(), 150);
  });
}

document.addEventListener("click", (event) => {
  if (servicesDropdown && !servicesDropdown.contains(event.target)) closeServicesMenu();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (servicesDropdown?.classList.contains("is-open")) closeServicesMenu(true);
    if (nav?.classList.contains("is-open")) {
      nav.classList.remove("is-open");
      toggle?.setAttribute("aria-expanded", "false");
      toggle?.focus();
    }
  }
});

/* ---------- form ---------- */
form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const label = form.querySelector("button span");
  const button = form.querySelector("button");
  if (label) label.textContent = "Enquiry noted";
  button?.setAttribute("disabled", "true");
});

/* ---------- headline word split ---------- */
if (!reduce) {
  document.querySelectorAll("[data-split]").forEach((el) => {
    const words = el.textContent.trim().split(/\s+/);
    el.textContent = "";
    words.forEach((word, i) => {
      const outer = document.createElement("span");
      outer.className = "w";
      outer.style.setProperty("--wi", i);
      const inner = document.createElement("i");
      inner.textContent = word;
      outer.appendChild(inner);
      el.appendChild(outer);
      el.appendChild(document.createTextNode(" "));
    });
  });
}

/* ---------- staggered reveals ---------- */
const REVEAL = [
  ".section-heading > *",
  ".hero-copy", ".hero-actions", ".ecosystem-orbit",
  ".pain-stack span", ".jobman-way",
  ".service-grid article", ".market-entry-card", ".market-entry-checks li", ".market-entry-actions", ".staffing-stats", ".staffing-card", ".eor-diagram", ".eor-step", ".staffing-table-shell", ".staffing-fit-panel", ".finance-card", ".finance-value-grid article", ".workplace-card", ".workplace-value-grid article", ".accordion-grid details",
  ".activity-matrix", ".ecosystem-map",
  ".engagement-grid article", ".company-grid article",
  ".why-grid span", ".timeline li",
  ".gcc-visual", ".promise-stack", ".gcc p",
  ".question-grid span", ".faq details",
  ".contact-lines", ".contact form"
].join(",");

if (!reduce) {
  sections.forEach((section) => {
    section.querySelectorAll(REVEAL).forEach((el, i) => {
      el.classList.add("r");
      el.style.setProperty("--i", i % 8);
    });
  });
}

const activate = (section) => {
  section.classList.add("in-view");
  section.querySelectorAll(".r").forEach((el) => el.classList.add("is-in"));
};

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activate(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -6% 0px" });

  sections.forEach((section) => observer.observe(section));
} else {
  sections.forEach(activate);
}

/* ---------- metric counters ---------- */
const metricStrip = document.querySelector(".metric-strip");

if (metricStrip) {
  metricStrip.querySelectorAll("span").forEach((span, i) => span.style.setProperty("--i", i));

  const runCounters = () => {
    metricStrip.classList.add("is-lit");
    if (reduce) return;
    metricStrip.querySelectorAll("strong").forEach((el, i) => {
      const raw = el.textContent.trim();
      const target = parseInt(raw, 10);
      const suffix = raw.replace(/^\d+/, "");
      if (Number.isNaN(target)) return;
      if (target === 0) return;
      const start = performance.now();
      const dur = 1100 + i * 120;
      const tick = (now) => {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      el.textContent = "0" + suffix;
      requestAnimationFrame(tick);
    });
  };

  if ("IntersectionObserver" in window) {
    const mo = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { runCounters(); mo.disconnect(); }
      });
    }, { threshold: 0.4 });
    mo.observe(metricStrip);
  } else {
    runCounters();
  }
}

/* ---------- cursor spotlight ---------- */
if (!reduce && window.matchMedia("(hover: hover)").matches) {
  document.querySelectorAll(".spot").forEach((el) => {
    el.addEventListener("pointermove", (event) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
      el.style.setProperty("--my", `${event.clientY - rect.top}px`);
    });
  });

  /* magnetic buttons */
  document.querySelectorAll(".button").forEach((el) => {
    el.addEventListener("pointermove", (event) => {
      const rect = el.getBoundingClientRect();
      const x = (event.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (event.clientY - rect.top - rect.height / 2) / rect.height;
      el.style.transform = `translate(${x * 9}px, ${y * 6}px)`;
    });
    el.addEventListener("pointerleave", () => { el.style.transform = ""; });
  });
}

/* ---------- header, progress, hero parallax ---------- */
const orbit = document.querySelector(".ecosystem-orbit");
let ticking = false;

const onScroll = () => {
  const y = window.scrollY;
  header?.classList.toggle("is-stuck", y > 24);

  if (progress) {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.transform = `scaleX(${max > 0 ? Math.min(y / max, 1) : 0})`;
  }

  if (orbit && !reduce && y < window.innerHeight * 1.4) {
    orbit.style.setProperty("--py", `${y * -0.07}px`);
  }

  ticking = false;
};

window.addEventListener("scroll", () => {
  if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
}, { passive: true });
onScroll();

/* ---------- current section in nav ---------- */
const navLinks = [...document.querySelectorAll(".main-nav a")];
const targets = navLinks
  .map((link) => link.getAttribute("href"))
  .filter((href) => href?.startsWith("#"))
  .map((href) => document.querySelector(href))
  .filter(Boolean);

if ("IntersectionObserver" in window && targets.length) {
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        const isCurrent = link.getAttribute("href") === `#${entry.target.id}`;
        link.classList.toggle("is-current", isCurrent);
        if (isCurrent) link.setAttribute("aria-current", "true");
        else link.removeAttribute("aria-current");
      });
    });
  }, { rootMargin: "-45% 0px -50% 0px" });

  targets.forEach((target) => spy.observe(target));
}

/* ---------- accordions: one open per group ---------- */
document.querySelectorAll(".accordion-grid, .faq-list").forEach((group) => {
  const items = [...group.querySelectorAll("details")];
  items.forEach((item) => {
    item.addEventListener("toggle", () => {
      if (!item.open) return;
      items.forEach((other) => { if (other !== item) other.open = false; });
    });
  });
});
