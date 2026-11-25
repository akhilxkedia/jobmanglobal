
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
  ".service-grid article", ".market-entry-card", ".market-entry-checks li", ".market-entry-actions", ".staffing-stats", ".staffing-card", ".eor-diagram", ".eor-step", ".staffing-table-shell", ".staffing-fit-panel", ".finance-card", ".finance-value-grid article", ".workplace-card", ".workplace-value-grid article", ".gcc-narrative", ".gcc-card", ".gcc-comparison", ".gcc-phase", ".gcc-hub", ".gcc-partnership-layout ul", ".gcc-engagement", ".accordion-grid details",
  ".activity-matrix", ".ecosystem-map", ".eu-route-box", ".eu-hero-stats span", ".eu-facts article", ".eu-note", ".eu-qa article", ".eu-savings",
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

/* ---------- Live India Time ---------- */
(() => {
  const root = document.getElementById("eu-live-clock");
  if (!root) return;

  const INDIA_WORK_START = 8;   // 08:00 IST
  const INDIA_WORK_END = 23;    // 23:00 IST (15 hours window!)
  const CLIENT_WORK_START = 9;  // Client 09:00
  const CLIENT_WORK_END = 18;   // Client 18:00
  const IST_OFFSET = 330;       // UTC+5:30
  const SVG_NS = "http://www.w3.org/2000/svg";
  const dial = root.querySelector("#eu-live-dial");
  const CX = 200, CY = 200;
  const R_YOU = 156, R_IND = 128, R_OVL = 128;

  // Global Hub Configurations
  const HUBS = {
    auto: { label: "Local Time", offset: -new Date().getTimezoneOffset(), name: Intl.DateTimeFormat().resolvedOptions().timeZone || "Your Location" },
    cet:  { label: "CET / Basel", offset: 60, name: "Central Europe (Basel)" },
    gmt:  { label: "GMT / London", offset: 0, name: "United Kingdom (London)" },
    est:  { label: "EST / New York", offset: -300, name: "US East Coast (New York / Boston)" },
    pst:  { label: "PST / San Francisco", offset: -480, name: "US West Coast (Silicon Valley)" },
    sgt:  { label: "SGT / Singapore", offset: 480, name: "Singapore / APAC Hub" },
    aest: { label: "AEST / Sydney", offset: 600, name: "Australia (Sydney / Melbourne)" },
    gst:  { label: "GST / Dubai", offset: 240, name: "United Arab Emirates (Dubai)" }
  };

  let activeHubKey = "auto";

  const polar = (r, hours) => {
    const angle = (hours / 24) * 2 * Math.PI - Math.PI / 2;
    return [CX + r * Math.cos(angle), CY + r * Math.sin(angle)];
  };

  const arcPath = (r, h1, h2) => {
    const [x1, y1] = polar(r, h1);
    const [x2, y2] = polar(r, h2);
    const large = (h2 - h1) > 12 ? 1 : 0;
    return `M${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2}`;
  };

  const svgElement = (tag, attrs) => {
    const node = document.createElementNS(SVG_NS, tag);
    Object.entries(attrs).forEach(([key, value]) => node.setAttribute(key, value));
    return node;
  };

  const formatHours = (hours) => {
    const h = ((Math.floor(hours) % 24) + 24) % 24;
    const minutes = Math.round((hours - Math.floor(hours)) * 60);
    return `${String(h).padStart(2,"0")}:${String(minutes).padStart(2,"0")}`;
  };

  let yourHand, indiaHand;

  const renderDialStatic = () => {
    dial.innerHTML = "";
    dial.appendChild(svgElement("circle", { class: "dial-track", cx: CX, cy: CY, r: R_YOU, "stroke-width": 14 }));
    dial.appendChild(svgElement("circle", { class: "dial-track", cx: CX, cy: CY, r: R_IND, "stroke-width": 14 }));

    for (let hour = 0; hour < 24; hour += 1) {
      const [x1, y1] = polar(R_YOU + 10, hour);
      const [x2, y2] = polar(R_YOU + (hour % 6 === 0 ? 20 : 15), hour);
      dial.appendChild(svgElement("line", { class: "dial-tick", x1, y1, x2, y2 }));
      if (hour % 6 === 0) {
        const [tx, ty] = polar(R_YOU + 34, hour);
        const label = svgElement("text", { class: "dial-hr", x: tx, y: ty + 4, "text-anchor": "middle" });
        label.textContent = String(hour).padStart(2, "0");
        dial.appendChild(label);
      }
    }
    dial.appendChild(svgElement("circle", { class: "dial-core", cx: CX, cy: CY, r: 96 }));
  };

  const updateCorridorState = () => {
    const hub = HUBS[activeHubKey];
    const hubOffset = hub.offset;
    const shift = (IST_OFFSET - hubOffset) / 60; // India ahead of hub

    // India 08:00 - 23:00 IST converted to Hub local time
    const indiaStartLocal = INDIA_WORK_START - shift;
    const indiaEndLocal = INDIA_WORK_END - shift;

    // Overlap within client 09:00 - 18:00
    const overlapStart = Math.max(CLIENT_WORK_START, indiaStartLocal);
    const overlapEnd = Math.min(CLIENT_WORK_END, indiaEndLocal);
    const overlapHours = Math.max(0, overlapEnd - overlapStart);
    const coveragePct = Math.min(100, Math.round((overlapHours / 9) * 100));

    // Re-draw arcs on dial
    dial.querySelectorAll(".dial-band").forEach(el => el.remove());

    // Hub working band (9 to 18)
    dial.appendChild(svgElement("path", { class: "dial-band you", d: arcPath(R_YOU, CLIENT_WORK_START, CLIENT_WORK_END), "stroke-width": 14 }));

    // India 15h working band
    const indArcStart = ((indiaStartLocal % 24) + 24) % 24;
    const indArcEnd = ((indiaEndLocal % 24) + 24) % 24;
    if (indArcEnd > indArcStart) {
      dial.appendChild(svgElement("path", { class: "dial-band ind", d: arcPath(R_IND, indArcStart, indArcEnd), "stroke-width": 14 }));
    } else {
      dial.appendChild(svgElement("path", { class: "dial-band ind", d: arcPath(R_IND, indArcStart, 24), "stroke-width": 14 }));
      dial.appendChild(svgElement("path", { class: "dial-band ind", d: arcPath(R_IND, 0, indArcEnd), "stroke-width": 14 }));
    }

    // Overlap band
    if (overlapHours > 0) {
      dial.appendChild(svgElement("path", { class: "dial-band ovl", d: arcPath(R_OVL, overlapStart, overlapEnd), "stroke-width": 14 }));
    }

    // Re-attach hands on top
    if (yourHand) yourHand.remove();
    if (indiaHand) indiaHand.remove();
    yourHand = svgElement("line", { class: "hand you", x1: CX, y1: CY, x2: CX, y2: CY - 150 });
    indiaHand = svgElement("line", { class: "hand ind", x1: CX, y1: CY, x2: CX, y2: CY - 122 });
    dial.append(yourHand, indiaHand);

    // Update numbers
    const hoursDisplay = Number.isInteger(overlapHours) ? overlapHours : overlapHours.toFixed(1);
    root.querySelector("#eu-live-overlap-hours").textContent = hoursDisplay;
    root.querySelector("#eu-live-coverage-badge").textContent = `${coveragePct}% Day Coverage`;
    root.querySelector("#eu-live-tz").textContent = `· ${hub.label}`;
    root.querySelector("#eu-live-window").textContent = overlapHours > 0 ? `${formatHours(overlapStart)}–${formatHours(overlapEnd)} ${hub.label.split('/')[0].trim()}` : "Staggered Handoff";

    // Dynamic Strategic Summary
    const summary = root.querySelector("#eu-live-summary");
    if (coveragePct >= 90) {
      summary.innerHTML = `<strong>100% Full-Day Synchronous Overlap with ${hub.name}:</strong> Thanks to our 15-hour India operating window (08:00–23:00 IST), your entire domestic business day coincides live with your India execution team. Zero communication lag, instant real-time reviews.`;
    } else if (activeHubKey === "est") {
      summary.innerHTML = `<strong>Dual Synchronous &amp; Overnight Velocity with ${hub.name}:</strong> 3.5+ hours of real-time morning sync (${formatHours(overlapStart)}–${formatHours(overlapEnd)} EST) for daily standups and sprint planning, plus overnight India execution delivering work by your next morning.`;
    } else if (activeHubKey === "pst") {
      summary.innerHTML = `<strong>Follow-the-Sun 24/7 Delivery with Silicon Valley:</strong> Live morning standup and handoff window, combined with continuous overnight engineering while your US team sleeps. Tasks assigned at 5 PM PST are completed and ready for review at 8:30 AM PST.`;
    } else if (activeHubKey === "sgt" || activeHubKey === "aest") {
      summary.innerHTML = `<strong>Comprehensive APAC Alignment (${hoursDisplay} Hours Overlap):</strong> Seamless synchronous delivery spanning your entire Asian &amp; Australian business afternoon, enabling real-time dual-shore operations.`;
    } else {
      summary.innerHTML = `<strong>${hoursDisplay} Hours of Synchronous Overlap (${coveragePct}% of your working day)</strong> with your India operations team. Operating across a 15-hour daily execution window (08:00–23:00 IST) tailored to global hubs.`;
    }
  };

  renderDialStatic();
  updateCorridorState();

  // Hub Switcher Tabs
  root.querySelectorAll(".hub-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      root.querySelectorAll(".hub-pill").forEach(p => { p.classList.remove("is-active"); p.setAttribute("aria-selected", "false"); });
      pill.classList.add("is-active");
      pill.setAttribute("aria-selected", "true");
      activeHubKey = pill.getAttribute("data-hub") || "auto";
      updateCorridorState();
    });
  });

  const tickLiveClock = () => {
    const hub = HUBS[activeHubKey];
    const now = new Date();
    const utcMs = now.getTime() + now.getTimezoneOffset() * 60000;
    const hubNow = new Date(utcMs + hub.offset * 60000);
    const indiaNow = new Date(utcMs + IST_OFFSET * 60000);

    const yourHours = hubNow.getHours() + hubNow.getMinutes() / 60;
    const indiaHours = indiaNow.getHours() + indiaNow.getMinutes() / 60;

    root.querySelector("#eu-live-your-clock").textContent = `${String(hubNow.getHours()).padStart(2,"0")}:${String(hubNow.getMinutes()).padStart(2,"0")}`;
    root.querySelector("#eu-live-india-clock").textContent = `${String(indiaNow.getHours()).padStart(2,"0")}:${String(indiaNow.getMinutes()).padStart(2,"0")}`;

    if (yourHand && indiaHand) {
      const [yourX, yourY] = polar(R_YOU - 8, yourHours);
      yourHand.setAttribute("x2", yourX); yourHand.setAttribute("y2", yourY);
      const [indiaX, indiaY] = polar(R_IND - 8, indiaHours);
      indiaHand.setAttribute("x2", indiaX); indiaHand.setAttribute("y2", indiaY);
    }
  };

  tickLiveClock();
  window.setInterval(tickLiveClock, 1000);
})();
