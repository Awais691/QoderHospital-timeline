(function () {
  "use strict";

  const CareWell = (window.CareWell = window.CareWell || {});
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const PHONE_PATTERN = /^[+()\d][\d\s().-]{5,19}$/;

  function refreshIcons() {
    if (window.lucide && typeof window.lucide.createIcons === "function") {
      window.lucide.createIcons();
    }
  }

  /* --------------------------------------------------------------- reveals */
  let revealObserver = null;

  function initReveals() {
    const elements = Array.prototype.slice.call(document.querySelectorAll(".reveal:not(.is-visible)"));
    if (!elements.length) return;

    if (reducedMotion.matches || !("IntersectionObserver" in window)) {
      elements.forEach(function (element) {
        element.classList.add("is-visible");
      });
      return;
    }

    if (!revealObserver) {
      revealObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.06 }
      );
    }

    elements.forEach(function (element) {
      const delay = Number(element.getAttribute("data-reveal-delay") || 0);
      if (delay > 0) element.style.transitionDelay = delay + "ms";
      revealObserver.observe(element);
    });
  }

  /* --------------------------------------------------------------- counters */
  function initCounters() {
    const counters = Array.prototype.slice.call(document.querySelectorAll("[data-count]:not([data-counted])"));
    if (!counters.length) return;

    function animate(element) {
      if (element.hasAttribute("data-counted")) return;
      element.setAttribute("data-counted", "true");

      const target = Number(element.getAttribute("data-count"));
      if (!Number.isFinite(target)) return;

      if (reducedMotion.matches) {
        element.textContent = String(target);
        return;
      }

      const duration = 1300;
      const start = window.performance.now();

      function frame(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        element.textContent = String(Math.round(target * eased));
        if (progress < 1) window.requestAnimationFrame(frame);
        else element.textContent = String(target);
      }

      window.requestAnimationFrame(frame);
    }

    if (!("IntersectionObserver" in window)) {
      counters.forEach(animate);
      return;
    }

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          animate(entry.target);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach(function (counter) {
      observer.observe(counter);
    });
  }

  /* ------------------------------------------------------------ back to top */
  function initBackToTop() {
    let button = document.querySelector(".back-to-top");
    if (!button) {
      button = document.createElement("button");
      button.type = "button";
      button.className = "back-to-top";
      button.setAttribute("aria-label", "Back to top");
      button.innerHTML = '<i data-lucide="arrow-up" aria-hidden="true"></i>';
      document.body.appendChild(button);
    }

    button.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: reducedMotion.matches ? "auto" : "smooth" });
    });

    function toggle() {
      button.classList.toggle("is-visible", window.scrollY > 640);
    }

    toggle();
    window.addEventListener("scroll", toggle, { passive: true });
  }

  /* ------------------------------------------------------------- accordions */
  function initAccordions() {
    document.querySelectorAll("[data-accordion]").forEach(function (group) {
      const single = group.getAttribute("data-accordion") === "single";
      const triggers = Array.prototype.slice.call(group.querySelectorAll("[data-accordion-trigger]"));

      triggers.forEach(function (trigger) {
        const panel = document.getElementById(trigger.getAttribute("aria-controls"));
        if (!panel) return;
        const inner = panel.firstElementChild;

        if (!panel.id) panel.id = "accordion-panel-" + Math.random().toString(36).slice(2, 8);
        if (!trigger.id) trigger.id = "accordion-trigger-" + Math.random().toString(36).slice(2, 8);
        trigger.setAttribute("aria-controls", panel.id);
        panel.setAttribute("role", "region");
        panel.setAttribute("aria-labelledby", trigger.id);

        function setOpen(isOpen) {
          trigger.setAttribute("aria-expanded", String(isOpen));
          panel.setAttribute("data-open", String(isOpen));
          if (inner) inner.toggleAttribute("inert", !isOpen);
        }

        setOpen(trigger.getAttribute("aria-expanded") === "true" || panel.getAttribute("data-open") === "true");

        trigger.addEventListener("click", function () {
          const willOpen = trigger.getAttribute("aria-expanded") !== "true";

          if (willOpen && single) {
            triggers.forEach(function (other) {
              if (other === trigger) return;
              const otherPanel = document.getElementById(other.getAttribute("aria-controls"));
              other.setAttribute("aria-expanded", "false");
              if (otherPanel) {
                otherPanel.setAttribute("data-open", "false");
                const otherInner = otherPanel.firstElementChild;
                if (otherInner) otherInner.setAttribute("inert", "");
              }
            });
          }

          setOpen(willOpen);
        });
      });
    });
  }

  /* -------------------------------------------------------------- FAQ search */
  function initFaqSearch() {
    const input = document.getElementById("faq-search");
    if (!input) return;

    const items = Array.prototype.slice.call(document.querySelectorAll("[data-faq-item]"));
    const groups = Array.prototype.slice.call(document.querySelectorAll("[data-faq-group]"));
    const count = document.getElementById("faq-count");
    const empty = document.getElementById("faq-empty");
    const reset = document.querySelector("[data-faq-reset]");

    function applyFilter() {
      const query = input.value.trim().toLowerCase();
      let visible = 0;

      items.forEach(function (item) {
        const haystack = (item.textContent || "").toLowerCase();
        const matches = !query || haystack.indexOf(query) !== -1;
        item.hidden = !matches;
        if (matches) visible += 1;
      });

      groups.forEach(function (group) {
        const hasVisible = group.querySelector("[data-faq-item]:not([hidden])");
        group.hidden = !hasVisible;
      });

      if (count) {
        count.textContent =
          visible === 0
            ? "No matching questions"
            : visible + (visible === 1 ? " question" : " questions") + " shown";
      }

      if (empty) empty.hidden = visible !== 0;
    }

    input.addEventListener("input", applyFilter);
    input.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && input.value) {
        input.value = "";
        applyFilter();
      }
    });

    if (reset) {
      reset.addEventListener("click", function () {
        input.value = "";
        applyFilter();
        input.focus();
      });
    }

    applyFilter();
  }

  /* --------------------------------------------------------- service filters */
  function initServiceDirectory() {
    const directory = document.querySelector("[data-service-directory]");
    if (!directory) return;

    const cards = Array.prototype.slice.call(directory.querySelectorAll("[data-service-card]"));
    const input = document.getElementById("service-search");
    const chips = Array.prototype.slice.call(document.querySelectorAll("[data-service-filter]"));
    const count = document.getElementById("service-count");
    const empty = document.getElementById("service-empty");
    const reset = document.querySelector("[data-service-reset]");
    let activeCategory = "all";

    function applyFilter() {
      const query = (input && input.value.trim().toLowerCase()) || "";
      let visible = 0;

      cards.forEach(function (card) {
        const text = (card.textContent || "").toLowerCase();
        const category = card.getAttribute("data-category") || "";
        const matchesCategory = activeCategory === "all" || category === activeCategory;
        const matchesQuery = !query || text.indexOf(query) !== -1;
        const show = matchesCategory && matchesQuery;
        card.hidden = !show;
        if (show) visible += 1;
      });

      if (count) {
        count.textContent = visible + (visible === 1 ? " service" : " services");
      }
      if (empty) empty.hidden = visible !== 0;
    }

    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        activeCategory = chip.getAttribute("data-service-filter");
        chips.forEach(function (other) {
          const selected = other === chip;
          other.classList.toggle("is-active", selected);
          other.setAttribute("aria-pressed", String(selected));
        });
        applyFilter();
      });
    });

    if (input) input.addEventListener("input", applyFilter);

    if (reset) {
      reset.addEventListener("click", function () {
        activeCategory = "all";
        if (input) input.value = "";
        chips.forEach(function (chip) {
          const selected = chip.getAttribute("data-service-filter") === "all";
          chip.classList.toggle("is-active", selected);
          chip.setAttribute("aria-pressed", String(selected));
        });
        applyFilter();
        if (input) input.focus();
      });
    }

    applyFilter();
  }

  /* ------------------------------------------------------- quick care widget */
  function initQuickCare() {
    const form = document.getElementById("quick-care-form");
    if (!form) return;

    const select = form.querySelector("select[name='specialty']");
    if (!select) return;

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!select.value) {
        select.classList.add("is-invalid");
        select.setAttribute("aria-invalid", "true");
        const error = form.querySelector("[data-error-for='quick-specialty']");
        if (error) error.textContent = "Choose a specialty to continue.";
        select.focus();
        return;
      }

      window.location.href = "appointment.html?specialty=" + encodeURIComponent(select.value);
    });

    select.addEventListener("change", function () {
      const error = form.querySelector("[data-error-for='quick-specialty']");
      if (!select.value) return;
      select.classList.remove("is-invalid");
      select.removeAttribute("aria-invalid");
      if (error) error.textContent = "";
    });
  }

  /* ---------------------------------------------------------- form utilities */
  function getErrorElement(form, field) {
    let error = form.querySelector('[data-error-for="' + field.name + '"]');
    if (error && !error.id) {
      error.id = (form.id || "form") + "-" + field.name + "-error";
    }
    return error;
  }

  function setFieldError(form, field, message) {
    const wrapper = field.closest(".field");
    if (wrapper) wrapper.classList.add("is-invalid");
    field.setAttribute("aria-invalid", "true");
    const error = getErrorElement(form, field);
    if (error) {
      error.textContent = message;
      field.setAttribute("aria-describedby", error.id);
    }
  }

  function clearFieldError(form, field) {
    const wrapper = field.closest(".field");
    if (wrapper) wrapper.classList.remove("is-invalid");
    field.removeAttribute("aria-invalid");
    const error = getErrorElement(form, field);
    if (error) error.textContent = "";
  }

  function isValidEmail(value) {
    return EMAIL_PATTERN.test(value.trim());
  }

  function isValidPhone(value) {
    return PHONE_PATTERN.test(value.trim());
  }

  function validateContactForm(form) {
    let firstInvalid = null;
    const fields = {
      name: form.elements.name,
      email: form.elements.email,
      phone: form.elements.phone,
      topic: form.elements.topic,
      message: form.elements.message,
      consent: form.elements.consent
    };

    Object.keys(fields).forEach(function (key) {
      const field = fields[key];
      if (field && field.type !== "checkbox") clearFieldError(form, field);
    });

    if (fields.name) {
      if (!fields.name.value.trim()) {
        setFieldError(form, fields.name, "Please enter your full name.");
        firstInvalid = firstInvalid || fields.name;
      } else if (fields.name.value.trim().length < 2) {
        setFieldError(form, fields.name, "Please enter at least two characters.");
        firstInvalid = firstInvalid || fields.name;
      }
    }

    if (fields.email) {
      if (!fields.email.value.trim()) {
        setFieldError(form, fields.email, "Please enter your email address.");
        firstInvalid = firstInvalid || fields.email;
      } else if (!isValidEmail(fields.email.value)) {
        setFieldError(form, fields.email, "Enter a valid email address, for example name@example.com.");
        firstInvalid = firstInvalid || fields.email;
      }
    }

    if (fields.phone && fields.phone.value.trim() && !isValidPhone(fields.phone.value)) {
      setFieldError(form, fields.phone, "Enter a valid phone number, or leave this field empty.");
      firstInvalid = firstInvalid || fields.phone;
    }

    if (fields.topic && !fields.topic.value) {
      setFieldError(form, fields.topic, "Please choose a topic.");
      firstInvalid = firstInvalid || fields.topic;
    }

    if (fields.message) {
      if (!fields.message.value.trim()) {
        setFieldError(form, fields.message, "Please tell us how we can help.");
        firstInvalid = firstInvalid || fields.message;
      } else if (fields.message.value.trim().length < 15) {
        setFieldError(form, fields.message, "Please add a little more detail (at least 15 characters).");
        firstInvalid = firstInvalid || fields.message;
      }
    }

    const consentError = form.querySelector("[data-error-for='consent']");
    if (fields.consent && !fields.consent.checked) {
      if (consentError) consentError.textContent = "Please confirm that you understand this is a demo form.";
      fields.consent.setAttribute("aria-invalid", "true");
      firstInvalid = firstInvalid || fields.consent;
    } else if (fields.consent) {
      if (consentError) consentError.textContent = "";
      fields.consent.removeAttribute("aria-invalid");
    }

    return { valid: !firstInvalid, firstInvalid: firstInvalid };
  }

  function initContactForm() {
    const form = document.querySelector("[data-contact-form]");
    if (!form) return;

    const success = document.querySelector("[data-contact-success]");
    const alertBox = form.querySelector("[data-form-alert]");
    const nameField = form.elements.name;
    const emailField = form.elements.email;
    const messageField = form.elements.message;
    const topicField = form.elements.topic;
    const consentField = form.elements.consent;

    [nameField, emailField, messageField, topicField].forEach(function (field) {
      if (!field) return;
      field.addEventListener("input", function () {
        clearFieldError(form, field);
        if (alertBox) alertBox.textContent = "";
      });
      field.addEventListener("change", function () {
        clearFieldError(form, field);
      });
    });

    if (consentField) {
      consentField.addEventListener("change", function () {
        const error = form.querySelector("[data-error-for='consent']");
        if (consentField.checked) {
          consentField.removeAttribute("aria-invalid");
          if (error) error.textContent = "";
        }
      });
    }

    if (emailField) {
      emailField.addEventListener("blur", function () {
        if (emailField.value.trim() && !isValidEmail(emailField.value)) {
          setFieldError(form, emailField, "Enter a valid email address.");
        }
      });
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const result = validateContactForm(form);

      if (!result.valid) {
        if (alertBox) alertBox.textContent = "Please check the highlighted fields and try again.";
        if (result.firstInvalid) result.firstInvalid.focus({ preventScroll: false });
        return;
      }

      if (alertBox) alertBox.textContent = "";

      const name = form.elements.name.value.trim();
      const topicSelect = form.elements.topic;
      const topic = topicSelect.options[topicSelect.selectedIndex]
        ? topicSelect.options[topicSelect.selectedIndex].text
        : "General enquiry";

      if (success) {
        const nameTarget = success.querySelector("[data-success-name]");
        const topicTarget = success.querySelector("[data-success-topic]");
        if (nameTarget) nameTarget.textContent = name;
        if (topicTarget) topicTarget.textContent = topic;
        form.hidden = true;
        success.hidden = false;
        const heading = success.querySelector("h2, h3");
        if (heading) {
          heading.setAttribute("tabindex", "-1");
          heading.focus({ preventScroll: true });
        }
        success.scrollIntoView({ behavior: reducedMotion.matches ? "auto" : "smooth", block: "center" });
      }

      form.reset();
    });

    const resetButton = document.querySelector("[data-reset-contact]");
    if (resetButton && success) {
      resetButton.addEventListener("click", function () {
        success.hidden = true;
        form.hidden = false;
        const firstInput = form.querySelector("input, select, textarea");
        if (firstInput) firstInput.focus();
      });
    }
  }

  /* -------------------------------------------------------------- carousels */
  function initCarousels() {
    document.querySelectorAll("[data-carousel]").forEach(function (root) {
      const track = root.querySelector("[data-carousel-track]");
      if (!track) return;

      const slides = Array.prototype.slice.call(track.querySelectorAll(".carousel-slide"));
      const prev = root.querySelector("[data-carousel-prev]");
      const next = root.querySelector("[data-carousel-next]");
      const dotsHost = root.querySelector("[data-carousel-dots]");
      let dots = [];

      function pageWidth() {
        return Math.max(track.clientWidth, 1);
      }

      function pageCount() {
        return Math.max(1, Math.ceil(track.scrollWidth / pageWidth()));
      }

      function currentPage() {
        return Math.min(pageCount() - 1, Math.round(track.scrollLeft / pageWidth()));
      }

      function scrollToPage(page, behavior) {
        track.scrollTo({
          left: page * pageWidth(),
          behavior: behavior || (reducedMotion.matches ? "auto" : "smooth")
        });
      }

      function buildDots() {
        if (!dotsHost) return;
        dotsHost.innerHTML = "";
        dots = [];

        for (let i = 0; i < pageCount(); i += 1) {
          const dot = document.createElement("button");
          dot.type = "button";
          dot.className = "carousel-dot";
          dot.setAttribute("aria-label", "Go to slide group " + (i + 1));
          dot.addEventListener("click", function () {
            scrollToPage(i);
          });
          dotsHost.appendChild(dot);
          dots.push(dot);
        }
      }

      function updateControls() {
        const maxScroll = track.scrollWidth - track.clientWidth;
        const hasOverflow = maxScroll > 4;
        if (prev) prev.disabled = !hasOverflow || track.scrollLeft <= 4;
        if (next) next.disabled = !hasOverflow || track.scrollLeft >= maxScroll - 4;

        const page = currentPage();
        dots.forEach(function (dot, index) {
          dot.classList.toggle("is-active", index === page);
          if (index === page) dot.setAttribute("aria-current", "true");
          else dot.removeAttribute("aria-current");
        });

        if (dotsHost) dotsHost.hidden = !hasOverflow;
        if (prev) prev.hidden = !hasOverflow;
        if (next) next.hidden = !hasOverflow;
      }

      if (prev) {
        prev.addEventListener("click", function () {
          scrollToPage(Math.max(0, currentPage() - 1));
        });
      }

      if (next) {
        next.addEventListener("click", function () {
          scrollToPage(Math.min(pageCount() - 1, currentPage() + 1));
        });
      }

      track.addEventListener(
        "scroll",
        function () {
          window.requestAnimationFrame(updateControls);
        },
        { passive: true }
      );

      track.addEventListener("keydown", function (event) {
        if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollToPage(Math.min(pageCount() - 1, currentPage() + 1));
        } else if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollToPage(Math.max(0, currentPage() - 1));
        }
      });

      let resizeTimer = null;
      window.addEventListener("resize", function () {
        window.clearTimeout(resizeTimer);
        resizeTimer = window.setTimeout(function () {
          buildDots();
          updateControls();
        }, 150);
      });

      buildDots();
      updateControls();
      if (slides.length && !track.hasAttribute("tabindex")) track.setAttribute("tabindex", "0");
    });
  }

  /* --------------------------------------------------------- print and copy */
  function initArticleTools() {
    document.querySelectorAll("[data-print-article]").forEach(function (button) {
      button.addEventListener("click", function () {
        window.print();
      });
    });

    document.querySelectorAll("[data-copy-link]").forEach(function (button) {
      button.addEventListener("click", function () {
        const label = button.querySelector("[data-copy-label]");
        const original = label ? label.textContent : "";

        function done(message) {
          if (label) label.textContent = message;
          window.setTimeout(function () {
            if (label) label.textContent = original;
          }, 2200);
        }

        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(window.location.href).then(
            function () {
              done("Link copied");
            },
            function () {
              done("Press Ctrl+C");
            }
          );
        } else {
          done("Copy the address bar URL");
        }
      });
    });
  }

  /* ------------------------------------------------------------ components */
  function initYear() {
    document.querySelectorAll("[data-year]").forEach(function (element) {
      element.textContent = String(new Date().getFullYear());
    });
  }

  CareWell.refreshIcons = refreshIcons;
  CareWell.observeReveals = initReveals;
  CareWell.initArticleTools = initArticleTools;
  CareWell.isValidEmail = isValidEmail;
  CareWell.isValidPhone = isValidPhone;
  CareWell.setFieldError = setFieldError;
  CareWell.clearFieldError = clearFieldError;
  CareWell.contentUpdated = function () {
    refreshIcons();
    initReveals();
  };

  function init() {
    initReveals();
    initCounters();
    initBackToTop();
    initAccordions();
    initFaqSearch();
    initServiceDirectory();
    initQuickCare();
    initContactForm();
    initCarousels();
    initArticleTools();
    refreshIcons();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  document.addEventListener("components:ready", function () {
    initYear();
    refreshIcons();
  });

  document.addEventListener("content:updated", function () {
    CareWell.contentUpdated();
  });

  reducedMotion.addEventListener("change", function (event) {
    if (!event.matches) return;
    document.querySelectorAll(".reveal").forEach(function (element) {
      element.classList.add("is-visible");
    });
  });
})();
