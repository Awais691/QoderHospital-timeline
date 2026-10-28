(function () {
  "use strict";

  const DESKTOP = window.matchMedia("(min-width: 1024px)");
  const CAN_HOVER = window.matchMedia("(hover: hover) and (pointer: fine)");

  let menu;
  let menuToggle;
  let mobilePanel;
  let lastFocusedElement = null;
  let dropdownItems = [];
  let initialized = false;

  const pageNavKeys = {
    "index.html": "home",
    "about.html": "about",
    "services.html": "services",
    "specialties.html": "specialties",
    "departments.html": "departments",
    "doctors.html": "doctors",
    "doctor-details.html": "doctors",
    "appointment.html": "appointment",
    "patient-information.html": "patient-information",
    "faq.html": "faq",
    "blog.html": "blog",
    "blog-details.html": "blog",
    "contact.html": "contact"
  };

  function currentFileName() {
    const last = window.location.pathname.split("/").pop();
    return (last || "index.html").toLowerCase();
  }

  function markActiveLink() {
    const key = pageNavKeys[currentFileName()];
    if (!key) return;

    document.querySelectorAll('[data-nav="' + key + '"]').forEach(function (link) {
      link.setAttribute("aria-current", "page");
      const item = link.closest(".nav-item");
      if (item) item.classList.add("is-active");
    });
  }

  function closeAllDropdowns(except) {
    dropdownItems.forEach(function (item) {
      if (item === except) return;
      item.classList.remove("is-open");
      const button = item.querySelector("[data-dropdown-toggle]");
      if (button) button.setAttribute("aria-expanded", "false");
    });
  }

  function initDropdowns() {
    dropdownItems = Array.prototype.slice.call(document.querySelectorAll("[data-dropdown]"));

    dropdownItems.forEach(function (item) {
      const button = item.querySelector("[data-dropdown-toggle]");
      if (!button) return;

      function open() {
        closeAllDropdowns(item);
        item.classList.add("is-open");
        button.setAttribute("aria-expanded", "true");
      }

      function close() {
        item.classList.remove("is-open");
        button.setAttribute("aria-expanded", "false");
      }

      button.addEventListener("click", function (event) {
        event.stopPropagation();
        if (item.classList.contains("is-open")) {
          close();
        } else {
          open();
        }
      });

      item.addEventListener("pointerenter", function () {
        if (CAN_HOVER.matches && DESKTOP.matches) open();
      });

      item.addEventListener("pointerleave", function () {
        if (CAN_HOVER.matches && DESKTOP.matches) close();
      });

      item.addEventListener("focusout", function (event) {
        if (!item.contains(event.relatedTarget)) close();
      });

      item.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
          close();
          button.focus();
        }
      });
    });

    document.addEventListener("click", function (event) {
      if (!event.target.closest("[data-dropdown]")) closeAllDropdowns();
    });
  }

  function getFocusable(container) {
    return Array.prototype.slice
      .call(
        container.querySelectorAll(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      )
      .filter(function (element) {
        return !element.closest("[inert]") && element.getClientRects().length > 0;
      });
  }

  function openMobileMenu() {
    if (!menu || !menuToggle) return;
    lastFocusedElement = document.activeElement;
    menu.classList.add("is-open");
    menu.setAttribute("aria-hidden", "false");
    menuToggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
    closeAllDropdowns();

    window.setTimeout(function () {
      const closeButton = mobilePanel && mobilePanel.querySelector(".mobile-panel-head [data-menu-close]");
      if (closeButton) closeButton.focus();
    }, 60);
  }

  function closeMobileMenu(restoreFocus) {
    if (!menu || !menu.classList.contains("is-open")) return;
    menu.classList.remove("is-open");
    menu.setAttribute("aria-hidden", "true");
    if (menuToggle) menuToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";

    if (restoreFocus !== false && lastFocusedElement && typeof lastFocusedElement.focus === "function") {
      lastFocusedElement.focus();
    }
  }

  function initMobileMenu() {
    menu = document.getElementById("mobile-menu");
    menuToggle = document.querySelector("[data-menu-toggle]");
    if (!menu || !menuToggle) return;
    mobilePanel = menu.querySelector(".mobile-panel");

    menuToggle.addEventListener("click", openMobileMenu);

    menu.querySelectorAll("[data-menu-close]").forEach(function (control) {
      control.addEventListener("click", function () {
        closeMobileMenu();
      });
    });

    menu.addEventListener("click", function (event) {
      if (event.target.closest("a[href]")) closeMobileMenu(false);
    });

    menu.querySelectorAll("[data-submenu-toggle]").forEach(function (button) {
      const submenu = document.getElementById(button.getAttribute("aria-controls"));
      if (!submenu) return;
      const inner = submenu.firstElementChild;

      function setOpen(isOpen) {
        button.setAttribute("aria-expanded", String(isOpen));
        submenu.classList.toggle("is-open", isOpen);
        if (inner) inner.toggleAttribute("inert", !isOpen);
      }

      setOpen(button.getAttribute("aria-expanded") === "true");
      button.addEventListener("click", function () {
        setOpen(button.getAttribute("aria-expanded") !== "true");
      });
    });

    document.addEventListener("keydown", function (event) {
      if (!menu.classList.contains("is-open")) return;

      if (event.key === "Escape") {
        event.preventDefault();
        closeMobileMenu();
        return;
      }

      if (event.key === "Tab" && mobilePanel) {
        const focusable = getFocusable(mobilePanel);
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    });

    DESKTOP.addEventListener("change", function (event) {
      if (event.matches) closeMobileMenu(false);
    });
  }

  function initHeaderScroll() {
    const header = document.getElementById("site-header");
    if (!header) return;
    let scheduled = false;

    function update() {
      header.classList.toggle("is-scrolled", window.scrollY > 6);
      scheduled = false;
    }

    update();
    window.addEventListener(
      "scroll",
      function () {
        if (scheduled) return;
        scheduled = true;
        window.requestAnimationFrame(update);
      },
      { passive: true }
    );
  }

  function init() {
    if (initialized) return;
    initialized = true;
    markActiveLink();
    initDropdowns();
    initMobileMenu();
    initHeaderScroll();
  }

  window.CareWellNav = {
    init: init,
    closeMobileMenu: closeMobileMenu
  };
})();
