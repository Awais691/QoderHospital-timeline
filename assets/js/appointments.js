(function () {
  "use strict";

  const CareWell = window.CareWell || {};
  const doctors = (window.CareWellDoctors && window.CareWellDoctors.doctors) || [];
  const specialties = (window.CareWellDoctors && window.CareWellDoctors.specialties) || [];

  const MONTHS = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  function todayStart() {
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    return date;
  }

  function toInputValue(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return year + "-" + month + "-" + day;
  }

  function parseDate(value) {
    if (!value) return null;
    const parts = value.split("-").map(Number);
    if (parts.length !== 3) return null;
    const date = new Date(parts[0], parts[1] - 1, parts[2]);
    date.setHours(0, 0, 0, 0);
    return Number.isNaN(date.getTime()) ? null : date;
  }

  function formatDate(value) {
    const date = parseDate(value);
    if (!date) return value;
    return (
      date.getDate() + " " + MONTHS[date.getMonth()] + " " + date.getFullYear()
    );
  }

  function formatDateLong(value) {
    const date = parseDate(value);
    if (!date) return value;
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[date.getDay()] + ", " + formatDate(value);
  }

  function getQueryParam(name) {
    return new URLSearchParams(window.location.search).get(name);
  }

  function setLimits(dateInput) {
    if (!dateInput) return;
    const min = todayStart();
    const max = new Date(min);
    max.setDate(max.getDate() + 180);
    dateInput.min = toInputValue(min);
    dateInput.max = toInputValue(max);
  }

  function getFieldError(form, name) {
    return form.querySelector('[data-error-for="' + name + '"]');
  }

  function setError(form, name, message) {
    const field = form.elements[name];
    if (field && CareWell.setFieldError) {
      CareWell.setFieldError(form, field, message);
    } else {
      const error = getFieldError(form, name);
      if (error) error.textContent = message;
    }
  }

  function clearError(form, name) {
    const field = form.elements[name];
    if (field && CareWell.clearFieldError) {
      CareWell.clearFieldError(form, field);
    } else {
      const error = getFieldError(form, name);
      if (error) error.textContent = "";
    }
  }

  function requireText(form, name, message, minLength) {
    const field = form.elements[name];
    if (!field) return true;
    const value = field.value.trim();
    if (!value) {
      setError(form, name, message);
      return false;
    }
    if (minLength && value.length < minLength) {
      setError(form, name, "Please enter at least " + minLength + " characters.");
      return false;
    }
    return true;
  }

  function validateEmail(form) {
    const field = form.elements.email;
    if (!field) return true;
    if (!field.value.trim()) {
      setError(form, "email", "Please enter your email address.");
      return false;
    }
    if (!CareWell.isValidEmail || !CareWell.isValidEmail(field.value)) {
      setError(form, "email", "Enter a valid email address, for example name@example.com.");
      return false;
    }
    return true;
  }

  function validatePhone(form) {
    const field = form.elements.phone;
    if (!field) return true;
    if (!field.value.trim()) {
      setError(form, "phone", "Please enter a phone number.");
      return false;
    }
    if (!CareWell.isValidPhone || !CareWell.isValidPhone(field.value)) {
      setError(form, "phone", "Enter a valid phone number, including area code.");
      return false;
    }
    return true;
  }

  function validateDate(form) {
    const field = form.elements.date;
    if (!field) return true;
    if (!field.value) {
      setError(form, "date", "Please choose a preferred date.");
      return false;
    }
    const date = parseDate(field.value);
    if (!date) {
      setError(form, "date", "Enter a valid date.");
      return false;
    }
    const today = todayStart();
    const max = new Date(today);
    max.setDate(max.getDate() + 180);

    if (date < today) {
      setError(form, "date", "Please choose a date in the future.");
      return false;
    }
    if (date > max) {
      setError(form, "date", "Please choose a date within the next six months.");
      return false;
    }
    if (date.getDay() === 0) {
      setError(form, "date", "Sunday clinics are limited. Please choose Monday to Saturday.");
      return false;
    }
    return true;
  }

  function validateConsent(form) {
    const field = form.elements.consent;
    if (!field) return true;
    const error = getFieldError(form, "consent");
    if (!field.checked) {
      if (error) error.textContent = "Please confirm that you understand this is a demo form.";
      field.setAttribute("aria-invalid", "true");
      return false;
    }
    if (error) error.textContent = "";
    field.removeAttribute("aria-invalid");
    return true;
  }

  function clearOnInput(form, names) {
    names.forEach(function (name) {
      const field = form.elements[name];
      if (!field) return;
      const handler = function () {
        clearError(form, name);
        const alertBox = form.querySelector("[data-form-alert]");
        if (alertBox) alertBox.textContent = "";
        if (field.type === "checkbox" && field.checked) validateConsent(form);
      };
      field.addEventListener("input", handler);
      field.addEventListener("change", handler);
    });
  }

  function firstInvalid(form) {
    return form.querySelector('[aria-invalid="true"]');
  }

  function renderSummary(container, rows) {
    container.innerHTML =
      '<div class="flex items-start gap-4">' +
      '<span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal-600 text-white">' +
      '<i data-lucide="check" class="h-5 w-5" aria-hidden="true"></i></span>' +
      '<div><p class="eyebrow-plain">Demo request complete</p>' +
      '<h2 class="display-3 mt-2" tabindex="-1">Thank you — here is your sample summary</h2>' +
      '<p class="mt-2 text-sm leading-relaxed text-ink-soft">Nothing was sent to a hospital and no data was stored. Use this summary to see how a real appointment request would look.</p></div></div>' +
      '<dl class="mt-7 grid gap-x-8 gap-y-4 border-t border-teal-600/20 pt-6 sm:grid-cols-2">' +
      rows
        .map(function (row) {
          return (
            '<div><dt class="text-[11px] font-bold uppercase tracking-[0.12em] text-ink-faint">' + row.label + "</dt>" +
            '<dd class="mt-1 text-sm font-semibold text-navy-900">' + row.value + "</dd></div>"
          );
        })
        .join("") +
      "</dl>" +
      '<div class="mt-6 flex items-start gap-3 rounded-xl border border-alert/25 bg-white p-4 text-[13px] leading-relaxed text-ink-soft">' +
      '<i data-lucide="info" class="mt-0.5 h-4 w-4 shrink-0 text-alert" aria-hidden="true"></i>' +
      "<p><strong class=\"font-bold text-navy-900\">This is a frontend demonstration.</strong> No real appointment has been booked. For actual care, call <a class=\"font-bold underline underline-offset-2\" href=\"tel:+15550142200\">(555) 014-2200</a> or, in an emergency, call 911.</p>" +
      "</div>" +
      '<div class="mt-6 flex flex-col gap-3 print:hidden sm:flex-row">' +
      '<button type="button" class="btn btn-secondary" data-summary-edit>Edit request</button>' +
      '<button type="button" class="btn btn-primary" data-summary-print><i data-lucide="printer" aria-hidden="true"></i>Print summary</button>' +
      "</div>";

    if (window.CareWell && window.CareWell.refreshIcons) window.CareWell.refreshIcons();
  }

  function initAppointmentForm() {
    const form = document.querySelector("[data-appointment-form]");
    if (!form) return;

    const success = document.querySelector("[data-appointment-success]");
    const formCard = document.querySelector("[data-appointment-form-card]");
    const sidebar = document.querySelector("[data-appointment-sidebar]");
    const alertBox = form.querySelector("[data-form-alert]");
    const specialtySelect = form.elements.specialty;
    const doctorSelect = form.elements.doctor;
    const dateInput = form.elements.date;
    const messageInput = form.elements.message;
    const counter = form.querySelector("[data-message-count]");
    const messageLimit = messageInput ? Number(messageInput.getAttribute("maxlength") || 500) : 500;

    setLimits(dateInput);

    if (specialtySelect) {
      specialties.forEach(function (specialty) {
        const option = document.createElement("option");
        option.value = specialty.slug;
        option.textContent = specialty.label;
        specialtySelect.appendChild(option);
      });
    }

    function populateDoctors(specialtySlug, selectedSlug) {
      if (!doctorSelect) return;
      doctorSelect.innerHTML = "";

      const placeholder = document.createElement("option");
      placeholder.value = "";
      placeholder.textContent = "Choose a doctor";
      doctorSelect.appendChild(placeholder);

      const firstAvailable = document.createElement("option");
      firstAvailable.value = "first-available";
      firstAvailable.textContent = "First available clinician";
      doctorSelect.appendChild(firstAvailable);

      const matching = specialtySlug
        ? doctors.filter(function (doctor) { return doctor.specialtySlug === specialtySlug; })
        : doctors;

      if (specialtySlug) {
        matching.forEach(function (doctor) {
          const option = document.createElement("option");
          option.value = doctor.slug;
          option.textContent = doctor.name + " — " + doctor.specialty;
          doctorSelect.appendChild(option);
        });
      } else {
        specialties.forEach(function (specialty) {
          const groupDoctors = matching.filter(function (doctor) {
            return doctor.specialtySlug === specialty.slug;
          });
          if (!groupDoctors.length) return;
          const group = document.createElement("optgroup");
          group.label = specialty.label;
          groupDoctors.forEach(function (doctor) {
            const option = document.createElement("option");
            option.value = doctor.slug;
            option.textContent = doctor.name;
            group.appendChild(option);
          });
          doctorSelect.appendChild(group);
        });
      }

      if (selectedSlug) {
        const exists = Array.prototype.some.call(doctorSelect.options, function (option) {
          return option.value === selectedSlug;
        });
        if (exists) doctorSelect.value = selectedSlug;
      }
    }

    function applyQueryPrefill() {
      const specialtyParam = getQueryParam("specialty");
      const doctorParam = getQueryParam("doctor");

      if (doctorParam) {
        const doctor = doctors.find(function (item) { return item.slug === doctorParam; });
        if (doctor) {
          if (specialtySelect) specialtySelect.value = doctor.specialtySlug;
          populateDoctors(doctor.specialtySlug, doctor.slug);
          return;
        }
      }

      if (specialtyParam && specialties.some(function (item) { return item.slug === specialtyParam; })) {
        if (specialtySelect) specialtySelect.value = specialtyParam;
        populateDoctors(specialtyParam, null);
        return;
      }

      populateDoctors("", null);
    }

    if (specialtySelect) {
      specialtySelect.addEventListener("change", function () {
        clearError(form, "specialty");
        clearError(form, "doctor");
        populateDoctors(specialtySelect.value, null);
      });
    }

    if (messageInput && counter) {
      const updateCounter = function () {
        counter.textContent = messageInput.value.length + " / " + messageLimit;
      };
      messageInput.addEventListener("input", updateCounter);
      updateCounter();
    }

    clearOnInput(form, ["name", "email", "phone", "specialty", "doctor", "date", "time", "message", "consent"]);

    if (dateInput) {
      dateInput.addEventListener("change", function () {
        validateDate(form);
      });
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (alertBox) alertBox.textContent = "";

      const checks = [
        requireText(form, "name", "Please enter the patient's full name.", 2),
        validateEmail(form),
        validatePhone(form),
        specialtySelect && specialtySelect.value
          ? true
          : (setError(form, "specialty", "Please choose a specialty."), false),
        doctorSelect && doctorSelect.value
          ? true
          : (setError(form, "doctor", "Please choose a doctor or first available."), false),
        validateDate(form),
        form.elements.time && form.elements.time.value
          ? true
          : (setError(form, "time", "Please choose a preferred time."), false),
        validateConsent(form)
      ];

      const valid = checks.every(Boolean);

      if (!valid) {
        if (alertBox) {
          alertBox.textContent = "Please check the highlighted fields before sending your request.";
        }
        const invalid = firstInvalid(form);
        if (invalid) invalid.focus({ preventScroll: false });
        return;
      }

      const name = form.elements.name.value.trim();
      const email = form.elements.email.value.trim();
      const phone = form.elements.phone.value.trim();
      const specialtyLabel = specialtySelect.options[specialtySelect.selectedIndex].text;
      const doctorLabel =
        doctorSelect.value === "first-available"
          ? "First available clinician"
          : doctorSelect.options[doctorSelect.selectedIndex].text.split(" — ")[0];
      const date = form.elements.date.value;
      const time = form.elements.time.options[form.elements.time.selectedIndex].text;
      const message = messageInput ? messageInput.value.trim() : "";
      const reference = "CW-" + new Date().getFullYear() + "-" + String(Math.floor(1000 + Math.random() * 9000));

      if (success) {
        renderSummary(success, [
          { label: "Patient", value: name },
          { label: "Email", value: email },
          { label: "Phone", value: phone },
          { label: "Specialty", value: specialtyLabel },
          { label: "Doctor", value: doctorLabel },
          { label: "Preferred date", value: formatDateLong(date) },
          { label: "Preferred time", value: time },
          { label: "Demo reference", value: reference }
        ]);

        if (message) {
          const details = document.createElement("div");
          details.className = "mt-4 rounded-xl border border-line bg-white p-4 text-[13px] leading-relaxed text-ink-soft";
          details.innerHTML =
            '<p class="text-[11px] font-bold uppercase tracking-[0.12em] text-ink-faint">Your note (not sent)</p>' +
            '<p class="mt-1 whitespace-pre-line">' + message.replace(/</g, "&lt;") + "</p>";
          success.querySelector("dl").after(details);
        }

        formCard.hidden = true;
        if (sidebar) sidebar.hidden = true;
        success.hidden = false;
        success.setAttribute("aria-live", "polite");
        const heading = success.querySelector("h2");
        if (heading) heading.focus({ preventScroll: true });
        success.scrollIntoView({ behavior: "smooth", block: "start" });

        const edit = success.querySelector("[data-summary-edit]");
        if (edit) {
          edit.addEventListener("click", function () {
            success.hidden = true;
            formCard.hidden = false;
            if (sidebar) sidebar.hidden = false;
            form.scrollIntoView({ behavior: "smooth", block: "start" });
            const first = form.querySelector("input, select, textarea");
            if (first) first.focus();
          });
        }

        const print = success.querySelector("[data-summary-print]");
        if (print) {
          print.addEventListener("click", function () {
            window.print();
          });
        }
      }
    });

    applyQueryPrefill();
  }

  function initDoctorBooking() {
    const form = document.querySelector("[data-doctor-booking]");
    if (!form) return;

    const success = document.getElementById("doctor-booking-success");
    const dateInput = form.elements.date;
    const alertBox = form.querySelector("[data-form-alert]");

    setLimits(dateInput);
    clearOnInput(form, ["name", "email", "phone", "date", "time", "reason", "consent"]);

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const checks = [
        requireText(form, "name", "Please enter your full name.", 2),
        validateEmail(form),
        validatePhone(form),
        validateDate(form),
        form.elements.time && form.elements.time.value
          ? true
          : (setError(form, "time", "Please choose a preferred time."), false),
        validateConsent(form)
      ];

      if (!checks.every(Boolean)) {
        if (alertBox) alertBox.textContent = "Please check the highlighted fields and try again.";
        const invalid = firstInvalid(form);
        if (invalid) invalid.focus();
        return;
      }

      if (success) {
        renderSummary(success, [
          { label: "Patient", value: form.elements.name.value.trim() },
          { label: "Doctor", value: form.dataset.doctor },
          { label: "Specialty", value: form.dataset.specialty },
          { label: "Preferred date", value: formatDateLong(form.elements.date.value) },
          { label: "Preferred time", value: form.elements.time.options[form.elements.time.selectedIndex].text },
          { label: "Contact", value: form.elements.email.value.trim() + " · " + form.elements.phone.value.trim() }
        ]);

        form.hidden = true;
        success.hidden = false;
        success.scrollIntoView({ behavior: "smooth", block: "center" });
        const heading = success.querySelector("h2");
        if (heading) heading.focus({ preventScroll: true });

        const print = success.querySelector("[data-summary-print]");
        if (print) print.addEventListener("click", function () { window.print(); });

        const edit = success.querySelector("[data-summary-edit]");
        if (edit) {
          edit.textContent = "Edit details";
          edit.addEventListener("click", function () {
            success.hidden = true;
            form.hidden = false;
            const first = form.querySelector(".field-input, .field-select");
            if (first) first.focus();
          });
        }
      }
    });
  }

  function init() {
    initAppointmentForm();
    initDoctorBooking();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
