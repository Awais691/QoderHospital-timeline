(function () {
  "use strict";

  const doctors = [
    {
      slug: "amara-okafor",
      name: "Dr. Amara Okafor",
      specialty: "Cardiology",
      specialtySlug: "cardiology",
      role: "Consultant Interventional Cardiologist",
      credentials: "MD, Fellowship in Interventional Cardiology",
      experience: "18 years",
      languages: "English, Igbo",
      location: "Heart & Vascular Centre, Level 3",
      portrait: "assets/images/doctors/amara-okafor.jpg",
      accepting: true,
      expertise: ["Coronary artery disease", "Heart failure", "Preventive cardiology", "Valvular heart disease", "Cardiac imaging"],
      bio: [
        "Dr. Amara Okafor is a consultant cardiologist with a particular interest in helping people understand the “why” behind their heart health. She works with patients on prevention, long-term management of coronary artery disease, and recovery after cardiac events.",
        "Her consultations are deliberately unhurried. She explains test results in plain language, sets goals together with each patient, and works closely with rehabilitation, nutrition and primary care colleagues so that care continues well beyond the clinic door."
      ],
      education: [
        "MD, University of Lagos — fictional sample",
        "Residency in Internal Medicine, Harborview Teaching Hospital — fictional sample",
        "Fellowship in Interventional Cardiology, Northbridge Heart Institute — fictional sample"
      ],
      schedule: [
        { day: "Monday", hours: "09:00 – 13:00" },
        { day: "Tuesday", hours: "14:00 – 18:00" },
        { day: "Thursday", hours: "09:00 – 13:00" },
        { day: "Friday", hours: "10:00 – 14:00" }
      ]
    },
    {
      slug: "daniel-kim",
      name: "Dr. Daniel Kim",
      specialty: "Neurology",
      specialtySlug: "neurology",
      role: "Consultant Neurologist",
      credentials: "MD, PhD",
      experience: "15 years",
      languages: "English, Korean",
      location: "Neuroscience Centre, Level 2",
      portrait: "assets/images/doctors/daniel-kim.jpg",
      accepting: true,
      expertise: ["Headache and migraine", "Epilepsy", "Stroke recovery", "Movement disorders", "Memory assessment"],
      bio: [
        "Dr. Daniel Kim is a consultant neurologist who cares for adults with a wide range of neurological symptoms, from persistent headaches to complex movement and memory concerns. He has a research background in brain imaging and neurodegenerative disease.",
        "Patients often describe his approach as methodical and calm. He takes time to map symptoms, review previous investigations, and agree on a plan that balances treatment, lifestyle and further testing only where it is genuinely useful."
      ],
      education: [
        "MD, Yonsei University College of Medicine — fictional sample",
        "PhD in Neuroscience, University of Northbridge — fictional sample",
        "Clinical Fellowship in Neurology, Riverside Medical Center — fictional sample"
      ],
      schedule: [
        { day: "Tuesday", hours: "09:00 – 13:00" },
        { day: "Wednesday", hours: "13:00 – 17:00" },
        { day: "Friday", hours: "09:00 – 12:00" }
      ]
    },
    {
      slug: "sofia-alvarez",
      name: "Dr. Sofia Alvarez",
      specialty: "Pediatrics",
      specialtySlug: "pediatrics",
      role: "Consultant Pediatrician",
      credentials: "MD, FAAP",
      experience: "12 years",
      languages: "English, Spanish",
      location: "Children's Centre, Level 1",
      portrait: "assets/images/doctors/sofia-alvarez.jpg",
      accepting: true,
      expertise: ["Newborn and infant care", "Childhood asthma", "Growth and development", "Vaccination guidance", "Common childhood infections"],
      bio: [
        "Dr. Sofia Alvarez is a pediatrician who looks after children from their first days through adolescence. She is known for a gentle, play-aware approach that helps children feel safe while giving parents clear, practical guidance.",
        "Her clinical interests include early childhood development, asthma care and vaccine conversations. She believes that good pediatric care is a partnership: parents know their child best, and the clinical team brings evidence, experience and a plan."
      ],
      education: [
        "MD, Universidad de Chile — fictional sample",
        "Pediatric Residency, St. Alder Children's Hospital — fictional sample",
        "Fellowship in Community Pediatrics, Northbridge Children's Centre — fictional sample"
      ],
      schedule: [
        { day: "Monday", hours: "08:30 – 12:30" },
        { day: "Wednesday", hours: "13:00 – 17:00" },
        { day: "Thursday", hours: "08:30 – 12:30" },
        { day: "Saturday", hours: "09:00 – 12:00" }
      ]
    },
    {
      slug: "marcus-bennett",
      name: "Dr. Marcus Bennett",
      specialty: "Orthopedics",
      specialtySlug: "orthopedics",
      role: "Consultant Orthopedic Surgeon",
      credentials: "MD, FRCS",
      experience: "20 years",
      languages: "English",
      location: "Orthopedic Centre, Level 4",
      portrait: "assets/images/doctors/marcus-bennett.jpg",
      accepting: true,
      expertise: ["Hip and knee replacement", "Sports injuries", "Shoulder surgery", "Fracture care", "Joint preservation"],
      bio: [
        "Dr. Marcus Bennett is an orthopedic surgeon with two decades of experience in joint replacement and sports-related injury. He is also a strong advocate for non-surgical options where they can restore function safely.",
        "He works with physiotherapy and rehabilitation teams from the first appointment, so that recovery is planned before surgery is ever considered. His goal is a return to the activities that matter to each patient, not simply a good X-ray."
      ],
      education: [
        "MD, University of Cape Town — fictional sample",
        "Orthopedic Residency, Harborview Teaching Hospital — fictional sample",
        "Fellowship in Adult Reconstruction, Northbridge Orthopedic Institute — fictional sample"
      ],
      schedule: [
        { day: "Monday", hours: "13:00 – 17:00" },
        { day: "Thursday", hours: "08:00 – 12:00" },
        { day: "Friday", hours: "13:00 – 16:00" }
      ]
    },
    {
      slug: "priya-raman",
      name: "Dr. Priya Raman",
      specialty: "Dermatology",
      specialtySlug: "dermatology",
      role: "Consultant Dermatologist",
      credentials: "MD",
      experience: "11 years",
      languages: "English, Tamil, Hindi",
      location: "Outpatient Clinic, Level 2",
      portrait: "assets/images/doctors/priya-raman.jpg",
      accepting: true,
      expertise: ["Eczema and psoriasis", "Acne care", "Skin cancer screening", "Hair and scalp disorders", "Pediatric dermatology"],
      bio: [
        "Dr. Priya Raman is a consultant dermatologist with a practical, evidence-led approach to skin, hair and nail conditions. She sees adults and children and has a special interest in chronic inflammatory skin disease.",
        "She avoids overcomplicated routines. Instead, she helps patients identify triggers, build a manageable treatment plan, and understand when a change in the skin needs prompt review."
      ],
      education: [
        "MD, Kasturba Medical College — fictional sample",
        "Dermatology Residency, Northbridge General Hospital — fictional sample",
        "Advanced Training in Inflammatory Skin Disease, Riverside Medical Center — fictional sample"
      ],
      schedule: [
        { day: "Tuesday", hours: "08:30 – 12:30" },
        { day: "Wednesday", hours: "13:00 – 17:00" },
        { day: "Friday", hours: "09:00 – 13:00" }
      ]
    },
    {
      slug: "elena-petrova",
      name: "Dr. Elena Petrova",
      specialty: "Gynecology",
      specialtySlug: "gynecology",
      role: "Consultant Obstetrician & Gynecologist",
      credentials: "MD, MRCOG",
      experience: "16 years",
      languages: "English, Russian",
      location: "Women's Health Centre, Level 3",
      portrait: "assets/images/doctors/elena-petrova.jpg",
      accepting: true,
      expertise: ["Prenatal care", "High-risk pregnancy", "Menstrual disorders", "Menopause care", "Minimally invasive gynecology"],
      bio: [
        "Dr. Elena Petrova provides care across pregnancy, reproductive health and menopause. She has a particular interest in supporting people through high-risk pregnancies with a calm, well-coordinated plan.",
        "She works closely with midwifery, ultrasound and neonatal teams, and makes space for questions at every stage. Patients value her direct explanations and the care she takes to include partners and families in decisions."
      ],
      education: [
        "MD, Sechenov First Moscow State Medical University — fictional sample",
        "Obstetrics and Gynecology Residency, Northbridge Women's Hospital — fictional sample",
        "Fellowship in Maternal-Fetal Medicine, Riverside Medical Center — fictional sample"
      ],
      schedule: [
        { day: "Monday", hours: "09:00 – 13:00" },
        { day: "Wednesday", hours: "09:00 – 12:00" },
        { day: "Friday", hours: "13:00 – 17:00" }
      ]
    },
    {
      slug: "samuel-ofori",
      name: "Dr. Samuel Ofori",
      specialty: "General Medicine",
      specialtySlug: "general-medicine",
      role: "Consultant Physician, General Medicine",
      credentials: "MD, MRCP",
      experience: "14 years",
      languages: "English, Twi",
      location: "General Medicine Clinic, Level 1",
      portrait: "assets/images/doctors/samuel-ofori.jpg",
      accepting: true,
      expertise: ["Complex medical assessment", "Diabetes and hypertension", "Respiratory infections", "Preventive health", "Care coordination"],
      bio: [
        "Dr. Samuel Ofori is a general physician who helps patients make sense of multiple symptoms, conditions and medications. He is often the first clinician to bring different strands of care together.",
        "He has a strong interest in long-term conditions such as diabetes and high blood pressure, and in helping people navigate the health system without feeling lost. Referrals are made with a clear reason and a named next step."
      ],
      education: [
        "MD, University of Ghana Medical School — fictional sample",
        "Internal Medicine Residency, Northbridge General Hospital — fictional sample",
        "Postgraduate Training in General Internal Medicine, Harborview Teaching Hospital — fictional sample"
      ],
      schedule: [
        { day: "Monday", hours: "08:30 – 12:00" },
        { day: "Tuesday", hours: "08:30 – 12:00" },
        { day: "Wednesday", hours: "13:00 – 16:30" },
        { day: "Thursday", hours: "08:30 – 12:00" },
        { day: "Friday", hours: "08:30 – 12:00" }
      ]
    },
    {
      slug: "hannah-lee",
      name: "Dr. Hannah Lee",
      specialty: "Ophthalmology",
      specialtySlug: "ophthalmology",
      role: "Consultant Ophthalmologist",
      credentials: "MD",
      experience: "13 years",
      languages: "English, Korean",
      location: "Eye Centre, Level 2",
      portrait: "assets/images/doctors/hannah-lee.jpg",
      accepting: true,
      expertise: ["Cataract surgery", "Glaucoma", "Diabetic eye disease", "Dry eye", "Pediatric eye care"],
      bio: [
        "Dr. Hannah Lee is an ophthalmologist caring for adults and children with eye and vision concerns. She performs cataract surgery and has a special interest in the long-term monitoring of glaucoma and diabetic eye disease.",
        "Her clinics include time for clear explanation of what tests show and what they do not. She is a firm believer that understanding your eye health is part of managing it well."
      ],
      education: [
        "MD, Seoul National University College of Medicine — fictional sample",
        "Ophthalmology Residency, Northbridge Eye Institute — fictional sample",
        "Fellowship in Glaucoma, Riverside Medical Center — fictional sample"
      ],
      schedule: [
        { day: "Tuesday", hours: "13:00 – 17:00" },
        { day: "Thursday", hours: "09:00 – 13:00" },
        { day: "Friday", hours: "09:00 – 12:00" }
      ]
    },
    {
      slug: "yusuf-haddad",
      name: "Dr. Yusuf Haddad",
      specialty: "ENT",
      specialtySlug: "ent",
      role: "Consultant ENT Surgeon",
      credentials: "MD, FRCS",
      experience: "17 years",
      languages: "English, Arabic",
      location: "ENT Clinic, Level 2",
      portrait: "assets/images/doctors/yusuf-haddad.jpg",
      accepting: true,
      expertise: ["Sinus surgery", "Hearing loss", "Tonsil and adenoid care", "Voice disorders", "Pediatric ENT"],
      bio: [
        "Dr. Yusuf Haddad treats conditions of the ear, nose, throat and voice in adults and children. He has extensive experience in sinus and airway surgery and works closely with audiology and speech therapy colleagues.",
        "He takes a stepwise approach, starting with the least invasive option that is likely to help. Surgery is reserved for when it offers a clear, meaningful benefit."
      ],
      education: [
        "MD, American University of Beirut — fictional sample",
        "Otolaryngology Residency, Northbridge General Hospital — fictional sample",
        "Fellowship in Rhinology and Sinus Surgery, Harborview Teaching Hospital — fictional sample"
      ],
      schedule: [
        { day: "Monday", hours: "13:00 – 17:00" },
        { day: "Wednesday", hours: "09:00 – 13:00" },
        { day: "Friday", hours: "13:00 – 16:00" }
      ]
    },
    {
      slug: "claire-moreau",
      name: "Dr. Claire Moreau",
      specialty: "Radiology & Diagnostics",
      specialtySlug: "radiology",
      role: "Consultant Radiologist",
      credentials: "MD",
      experience: "12 years",
      languages: "English, French",
      location: "Imaging Centre, Level 0",
      portrait: "assets/images/doctors/claire-moreau.jpg",
      accepting: false,
      expertise: ["Diagnostic ultrasound", "CT and MRI reporting", "Breast imaging", "Interventional radiology", "Imaging safety"],
      bio: [
        "Dr. Claire Moreau is a consultant radiologist who interprets imaging studies and supports referring clinicians with clear, timely reports. Her work spans ultrasound, CT, MRI and image-guided procedures.",
        "She is involved in imaging safety and quality improvement, and works with the wider team to make sure every scan has a clear clinical question behind it. Patients are usually referred to her by another clinician rather than booking directly."
      ],
      education: [
        "MD, Université de Montréal — fictional sample",
        "Radiology Residency, Northbridge General Hospital — fictional sample",
        "Fellowship in Abdominal Imaging, Riverside Medical Center — fictional sample"
      ],
      schedule: [
        { day: "Monday – Friday", hours: "08:00 – 16:00" },
        { day: "Weekends", hours: "Emergency imaging only" }
      ]
    }
  ];

  const specialtyOrder = [
    { slug: "cardiology", label: "Cardiology" },
    { slug: "neurology", label: "Neurology" },
    { slug: "orthopedics", label: "Orthopedics" },
    { slug: "pediatrics", label: "Pediatrics" },
    { slug: "dermatology", label: "Dermatology" },
    { slug: "gynecology", label: "Gynecology" },
    { slug: "general-medicine", label: "General Medicine" },
    { slug: "ophthalmology", label: "Ophthalmology" },
    { slug: "ent", label: "ENT" },
    { slug: "radiology", label: "Radiology" }
  ];

  function getQueryParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
  }

  function cardMarkup(doctor) {
    const status = doctor.accepting
      ? '<span class="badge badge-teal">Accepting new patients</span>'
      : '<span class="badge badge-sand">Referral only</span>';

    return (
      '<article class="doctor-card card card-hover group flex h-full flex-col overflow-hidden">' +
      '<a href="doctor-details.html?doctor=' + doctor.slug + '" class="doctor-photo img-zoom" aria-label="View profile for ' + doctor.name + '">' +
      '<img src="' + doctor.portrait + '" alt="Portrait of ' + doctor.name + ', ' + doctor.role + '" loading="lazy" width="900" height="1125">' +
      "</a>" +
      '<div class="flex flex-1 flex-col p-5">' +
      '<p class="doctor-meta">' + doctor.specialty + "</p>" +
      '<h3 class="mt-1.5 font-display text-[1.35rem] font-semibold leading-tight text-navy-900">' +
      '<a href="doctor-details.html?doctor=' + doctor.slug + '" class="transition-colors hover:text-teal-700">' + doctor.name + "</a></h3>" +
      '<p class="mt-1 text-[13px] font-semibold text-ink-soft">' + doctor.role + "</p>" +
      '<div class="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-ink-faint">' +
      '<span class="inline-flex items-center gap-1.5"><i data-lucide="briefcase-medical" class="h-3.5 w-3.5 text-teal-600" aria-hidden="true"></i>' + doctor.experience + " experience</span>" +
      '<span class="inline-flex items-center gap-1.5"><i data-lucide="languages" class="h-3.5 w-3.5 text-teal-600" aria-hidden="true"></i>' + doctor.languages + "</span>" +
      "</div>" +
      '<div class="mt-4 flex items-center justify-between gap-3 border-t border-line pt-4">' +
      status +
      '<a class="text-link" href="doctor-details.html?doctor=' + doctor.slug + '">Profile <i data-lucide="arrow-right" class="h-4 w-4" aria-hidden="true"></i></a>' +
      "</div></div></article>"
    );
  }

  function initDirectory() {
    const grid = document.getElementById("doctor-grid");
    if (!grid) return;

    const searchInput = document.getElementById("doctor-search");
    const filterHost = document.getElementById("doctor-filters");
    const count = document.getElementById("doctor-count");
    const empty = document.getElementById("doctor-empty");
    const emptyQuery = document.getElementById("doctor-empty-query");
    const clearButtons = document.querySelectorAll("[data-doctor-clear]");

    let activeSpecialty = getQueryParam("specialty") || "all";
    if (!specialtyOrder.some(function (item) { return item.slug === activeSpecialty; })) {
      activeSpecialty = "all";
    }

    function filterDoctors() {
      const query = (searchInput && searchInput.value.trim().toLowerCase()) || "";

      return doctors.filter(function (doctor) {
        const matchesSpecialty = activeSpecialty === "all" || doctor.specialtySlug === activeSpecialty;
        const haystack = [doctor.name, doctor.specialty, doctor.role, doctor.expertise.join(" "), doctor.languages]
          .join(" ")
          .toLowerCase();
        return matchesSpecialty && (!query || haystack.indexOf(query) !== -1);
      });
    }

    function render() {
      const results = filterDoctors();
      grid.innerHTML = results.map(cardMarkup).join("");

      if (count) {
        count.textContent = results.length + (results.length === 1 ? " doctor" : " doctors");
      }

      const hasFilter = activeSpecialty !== "all" || (searchInput && searchInput.value.trim());
      if (empty) empty.hidden = results.length !== 0;
      if (emptyQuery) {
        const terms = [];
        if (searchInput && searchInput.value.trim()) terms.push('"' + searchInput.value.trim() + '"');
        if (activeSpecialty !== "all") {
          const specialty = specialtyOrder.find(function (item) { return item.slug === activeSpecialty; });
          if (specialty) terms.push(specialty.label);
        }
        emptyQuery.textContent = terms.length ? terms.join(" in ") : "";
      }
      if (hasFilter && results.length === 0) {
        grid.setAttribute("aria-busy", "false");
      }

      if (window.CareWell && window.CareWell.contentUpdated) window.CareWell.contentUpdated();
    }

    function buildFilters() {
      if (!filterHost) return;

      const options = [{ slug: "all", label: "All specialties" }].concat(specialtyOrder);
      filterHost.innerHTML = options
        .map(function (option) {
          const active = option.slug === activeSpecialty;
          return (
            '<button class="chip shrink-0' + (active ? " is-active" : "") + '" type="button" data-specialty="' + option.slug + '" aria-pressed="' + active + '">' +
            option.label +
            "</button>"
          );
        })
        .join("");

      filterHost.querySelectorAll("[data-specialty]").forEach(function (button) {
        button.addEventListener("click", function () {
          activeSpecialty = button.getAttribute("data-specialty");
          filterHost.querySelectorAll("[data-specialty]").forEach(function (other) {
            const selected = other === button;
            other.classList.toggle("is-active", selected);
            other.setAttribute("aria-pressed", String(selected));
          });
          render();
        });
      });
    }

    if (searchInput) {
      searchInput.addEventListener("input", render);
    }

    clearButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        activeSpecialty = "all";
        if (searchInput) searchInput.value = "";
        buildFilters();
        render();
        if (searchInput) searchInput.focus();
      });
    });

    buildFilters();
    render();
  }

  function relatedDoctors(current) {
    const same = doctors.filter(function (doctor) {
      return doctor.slug !== current.slug && doctor.specialtySlug === current.specialtySlug;
    });

    const others = doctors.filter(function (doctor) {
      return doctor.slug !== current.slug && doctor.specialtySlug !== current.specialtySlug;
    });

    return same.concat(others).slice(0, 3);
  }

  function scheduleMarkup(doctor) {
    return doctor.schedule
      .map(function (slot) {
        return (
          '<div class="flex items-center justify-between gap-4 border-b border-line py-3 last:border-0">' +
          '<span class="text-sm font-semibold text-navy-900">' + slot.day + "</span>" +
          '<span class="text-sm text-ink-soft">' + slot.hours + "</span>" +
          "</div>"
        );
      })
      .join("");
  }

  function initProfile() {
    const heroHost = document.getElementById("doctor-hero");
    if (!heroHost) return;

    const slug = getQueryParam("doctor");
    const doctor = doctors.find(function (item) { return item.slug === slug; }) || doctors[0];
    const bodyHost = document.getElementById("doctor-body");
    const bookHost = document.getElementById("doctor-booking");
    const relatedHost = document.getElementById("related-doctors");
    const crumb = document.getElementById("doctor-crumb");

    document.title = doctor.name + " — " + doctor.specialty + " | CareWell Hospital";
    const description =
      "Fictional sample profile for " + doctor.name + ", " + doctor.role + " at CareWell Hospital. All credentials and availability are illustrative.";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute("content", description);
    document.querySelectorAll('meta[property="og:title"]').forEach(function (meta) {
      meta.setAttribute("content", doctor.name + " | CareWell Hospital");
    });
    document.querySelectorAll('meta[property="og:description"]').forEach(function (meta) {
      meta.setAttribute("content", description);
    });
    document.querySelectorAll('meta[property="og:image"]').forEach(function (meta) {
      meta.setAttribute("content", doctor.portrait);
    });

    if (crumb) crumb.textContent = doctor.name;

    const acceptingBadge = doctor.accepting
      ? '<span class="badge badge-teal">Accepting new patients</span>'
      : '<span class="badge badge-sand">Referral only</span>';

    heroHost.innerHTML =
      '<div class="page-hero-inner container-site">' +
      '<nav aria-label="Breadcrumb"><ol class="breadcrumb">' +
      '<li><a href="index.html">Home</a></li>' +
      '<li><a href="doctors.html">Doctors</a></li>' +
      '<li><span aria-current="page">' + doctor.name + "</span></li>" +
      "</ol></nav>" +
      '<div class="mt-8 grid items-end gap-8 sm:mt-10 lg:grid-cols-12 lg:gap-12">' +
      '<div class="lg:col-span-4">' +
      '<div class="img-frame relative aspect-[4/5] max-w-[360px] shadow-soft">' +
      '<img src="' + doctor.portrait + '" alt="Portrait of ' + doctor.name + ', ' + doctor.role + '" width="900" height="1125" fetchpriority="high">' +
      "</div></div>" +
      '<div class="lg:col-span-8 lg:pb-4">' +
      '<div class="flex flex-wrap items-center gap-2">' +
      '<span class="eyebrow"></span><span class="eyebrow-plain">' + doctor.specialty + "</span>" +
      acceptingBadge +
      "</div>" +
      '<h1 class="display-2 mt-4">' + doctor.name + "</h1>" +
      '<p class="mt-2 text-lg font-semibold text-teal-700">' + doctor.role + "</p>" +
      '<p class="mt-3 text-sm text-ink-soft">' + doctor.credentials + " · " + doctor.experience + " of clinical experience</p>" +
      '<div class="mt-6 flex flex-col gap-3 sm:flex-row">' +
      '<a class="btn btn-primary" href="#book"><i data-lucide="calendar-check" aria-hidden="true"></i>Request an appointment</a>' +
      '<a class="btn btn-secondary" href="tel:+15550142200"><i data-lucide="phone" aria-hidden="true"></i>Call the hospital</a>' +
      "</div>" +
      '<p class="mt-4 note">Fictional sample profile. Qualifications, experience and schedule are illustrative and not real clinical credentials.</p>' +
      "</div></div></div>";

    if (bodyHost) {
      bodyHost.innerHTML =
        '<div class="grid gap-10 lg:grid-cols-12 lg:gap-14">' +
        '<div class="lg:col-span-7">' +
        '<section aria-labelledby="about-doctor"><h2 id="about-doctor" class="display-3">About ' + doctor.name + "</h2>" +
        doctor.bio.map(function (paragraph) { return '<p class="mt-4 text-[15px] leading-relaxed text-ink-soft">' + paragraph + "</p>"; }).join("") +
        "</section>" +
        '<section class="mt-10 border-t border-line pt-8" aria-labelledby="expertise"><h2 id="expertise" class="display-3">Areas of expertise</h2>' +
        '<ul class="mt-4 flex flex-wrap gap-2">' +
        doctor.expertise.map(function (item) { return '<li class="badge badge-sand normal-case tracking-normal">' + item + "</li>"; }).join("") +
        "</ul></section>" +
        '<section class="mt-10 border-t border-line pt-8" aria-labelledby="training"><h2 id="training" class="display-3">Education &amp; training</h2>' +
        '<ul class="check-list mt-4">' +
        doctor.education.map(function (item) { return '<li><i data-lucide="graduation-cap" aria-hidden="true"></i><span>' + item + "</span></li>"; }).join("") +
        "</ul>" +
        '<p class="mt-4 note">All education details are fictional sample content for this demo.</p>' +
        "</section></div>" +
        '<aside class="lg:col-span-5">' +
        '<div class="rounded-card border border-line bg-sand-50 p-6">' +
        '<h2 class="display-4">At a glance</h2>' +
        '<dl class="mt-5 space-y-4 text-sm">' +
        '<div class="flex items-start gap-3"><i data-lucide="stethoscope" class="mt-0.5 h-4 w-4 shrink-0 text-teal-600" aria-hidden="true"></i><div><dt class="text-[11px] font-bold uppercase tracking-[0.12em] text-ink-faint">Specialty</dt><dd class="mt-0.5 font-semibold text-navy-900">' + doctor.specialty + "</dd></div></div>" +
        '<div class="flex items-start gap-3"><i data-lucide="map-pin" class="mt-0.5 h-4 w-4 shrink-0 text-teal-600" aria-hidden="true"></i><div><dt class="text-[11px] font-bold uppercase tracking-[0.12em] text-ink-faint">Where</dt><dd class="mt-0.5 font-semibold text-navy-900">' + doctor.location + "</dd></div></div>" +
        '<div class="flex items-start gap-3"><i data-lucide="languages" class="mt-0.5 h-4 w-4 shrink-0 text-teal-600" aria-hidden="true"></i><div><dt class="text-[11px] font-bold uppercase tracking-[0.12em] text-ink-faint">Languages</dt><dd class="mt-0.5 font-semibold text-navy-900">' + doctor.languages + "</dd></div></div>" +
        '<div class="flex items-start gap-3"><i data-lucide="briefcase-medical" class="mt-0.5 h-4 w-4 shrink-0 text-teal-600" aria-hidden="true"></i><div><dt class="text-[11px] font-bold uppercase tracking-[0.12em] text-ink-faint">Experience</dt><dd class="mt-0.5 font-semibold text-navy-900">' + doctor.experience + "</dd></div></div>" +
        "</dl></div>" +
        '<div class="mt-5 rounded-card border border-line p-6">' +
        '<div class="flex items-center justify-between gap-3"><h2 class="display-4">Sample schedule</h2><i data-lucide="calendar-days" class="h-5 w-5 text-teal-600" aria-hidden="true"></i></div>' +
        '<div class="mt-3">' + scheduleMarkup(doctor) + "</div>" +
        '<p class="mt-4 note">Illustrative schedule only. Confirm current availability when requesting an appointment.</p>' +
        "</div>" +
        '<div class="mt-5 rounded-card border border-sky-200 bg-sky-100/70 p-5 text-[13px] leading-relaxed text-ink-soft">' +
        '<p class="font-bold text-navy-900">Need help choosing?</p>' +
        '<p class="mt-1">Call <a class="font-semibold underline underline-offset-2" href="tel:+15550142200">(555) 014-2200</a> and our sample reception team will guide you to the right clinic.</p>' +
        "</div></aside></div>";
    }

    if (bookHost) {
      bookHost.innerHTML =
        '<div class="grid gap-8 rounded-[24px] border border-line bg-white p-6 sm:p-8 lg:grid-cols-12 lg:gap-12 lg:p-10">' +
        '<div class="lg:col-span-5">' +
        '<span class="eyebrow"></span><span class="eyebrow-plain">Appointment request</span>' +
        '<h2 class="display-2 mt-4">Request a visit with ' + doctor.name + "</h2>" +
        '<p class="mt-4 text-sm leading-relaxed text-ink-soft">Share a few details and preferred times. This is a frontend demonstration: the form does not send data and no real appointment is booked.</p>' +
        '<ul class="check-list mt-6">' +
        '<li><i data-lucide="clock" aria-hidden="true"></i><span>Most requests are reviewed within one business day in a real service.</span></li>' +
        '<li><i data-lucide="shield-check" aria-hidden="true"></i><span>Do not include urgent symptoms or sensitive medical details here.</span></li>' +
        '<li><i data-lucide="phone" aria-hidden="true"></i><span>For urgent help, call <a class="font-bold text-navy-900 underline underline-offset-2" href="tel:+15550149111">(555) 014-9111</a>.</span></li>' +
        "</ul></div>" +
        '<div class="lg:col-span-7">' +
        '<form id="doctor-booking-form" class="grid gap-5 sm:grid-cols-2" novalidate data-doctor-booking data-doctor="' + doctor.name + '" data-specialty="' + doctor.specialty + '">' +
        '<input type="hidden" name="doctor" value="' + doctor.name + '">' +
        '<input type="hidden" name="specialty" value="' + doctor.specialty + '">' +
        '<div class="field"><label class="field-label" for="db-name">Full name</label><input class="field-input" id="db-name" name="name" type="text" autocomplete="name" required><span class="field-error" data-error-for="name"></span></div>' +
        '<div class="field"><label class="field-label" for="db-email">Email</label><input class="field-input" id="db-email" name="email" type="email" autocomplete="email" required><span class="field-error" data-error-for="email"></span></div>' +
        '<div class="field"><label class="field-label" for="db-phone">Phone</label><input class="field-input" id="db-phone" name="phone" type="tel" autocomplete="tel" required><span class="field-error" data-error-for="phone"></span></div>' +
        '<div class="field"><label class="field-label" for="db-date">Preferred date</label><input class="field-input" id="db-date" name="date" type="date" required><span class="field-error" data-error-for="date"></span></div>' +
        '<div class="field"><label class="field-label" for="db-time">Preferred time</label><select class="field-select" id="db-time" name="time" required><option value="">Choose a time</option><option>Morning (8:00–12:00)</option><option>Afternoon (12:00–16:00)</option><option>Late afternoon (16:00–18:00)</option><option>No preference</option></select><span class="field-error" data-error-for="time"></span></div>' +
        '<div class="field"><label class="field-label" for="db-reason">Reason for visit <span class="font-normal text-ink-faint">(optional)</span></label><input class="field-input" id="db-reason" name="reason" type="text" maxlength="90"><span class="field-error" data-error-for="reason"></span></div>' +
        '<div class="field field-full"><label class="checkbox-field"><input type="checkbox" name="consent" required><span>I understand this is a demo form and no real appointment will be booked.</span></label><span class="field-error" data-error-for="consent"></span></div>' +
        '<div class="field-full"><div class="form-alert" data-form-alert role="alert"></div><button class="btn btn-primary btn-block" type="submit">Send demo request <i data-lucide="arrow-right" aria-hidden="true"></i></button></div>' +
        "</form>" +
        '<div id="doctor-booking-success" class="form-success" hidden></div>' +
        "</div></div>";
    }

    if (relatedHost) {
      relatedHost.innerHTML = relatedDoctors(doctor).map(cardMarkup).join("");
    }

    if (window.CareWell && window.CareWell.contentUpdated) window.CareWell.contentUpdated();
  }

  window.CareWellDoctors = {
    doctors: doctors,
    specialties: specialtyOrder,
    cardMarkup: cardMarkup
  };

  function init() {
    initDirectory();
    initProfile();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
