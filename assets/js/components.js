(function () {
  "use strict";

  const partials = [
    { selector: "#emergency-bar", url: "components/emergency-bar.html" },
    { selector: "#site-header", url: "components/header.html" },
    { selector: "#site-footer", url: "components/footer.html" }
  ];

  async function loadPartial({ selector, url }) {
    const holder = document.querySelector(selector);
    if (!holder) return;

    holder.setAttribute("aria-busy", "true");

    try {
      const response = await fetch(url, { cache: "no-cache" });
      if (!response.ok) throw new Error("HTTP " + response.status);

      const html = await response.text();
      const template = document.createElement("template");
      template.innerHTML = html.trim();
      holder.replaceWith(template.content);
    } catch (error) {
      console.error("[CareWell] Unable to load shared component:", url, error);
      holder.removeAttribute("aria-busy");
      holder.innerHTML =
        '<div class="bg-sand-100 px-5 py-3 text-center text-xs font-semibold text-ink-soft">' +
        "Shared navigation could not load. Please run this site through a local web server " +
        "(see README.md) rather than opening the HTML file directly." +
        "</div>";
    }
  }

  function refreshIcons() {
    if (window.lucide && typeof window.lucide.createIcons === "function") {
      window.lucide.createIcons();
    }
  }

  async function init() {
    await Promise.all(partials.map(loadPartial));
    refreshIcons();

    if (window.CareWellNav && typeof window.CareWellNav.init === "function") {
      window.CareWellNav.init();
    }

    document.dispatchEvent(new CustomEvent("components:ready"));
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
