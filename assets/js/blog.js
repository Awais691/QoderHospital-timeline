(function () {
  "use strict";

  const categories = [
    { slug: "all", label: "All topics" },
    { slug: "healthy-living", label: "Healthy living" },
    { slug: "patient-guides", label: "Patient guides" },
    { slug: "family-child", label: "Family & child" },
    { slug: "prevention", label: "Prevention" }
  ];

  const articles = [
    {
      slug: "heart-habits",
      title: "Five everyday habits that support a healthier heart",
      category: "healthy-living",
      categoryLabel: "Healthy living",
      date: "2026-09-18",
      readTime: "6 min read",
      author: "Dr. Amara Okafor",
      authorSlug: "amara-okafor",
      authorRole: "Consultant Interventional Cardiologist",
      image: "assets/images/blog/heart-nutrition.jpg",
      imageAlt: "Fresh vegetables, berries, whole grains and olive oil arranged on a pale wooden kitchen counter",
      excerpt:
        "Heart health is built from small, repeatable habits. A cardiologist explains what tends to matter most — and what to do when something feels wrong.",
      keyPoints: [
        "Consistency matters more than intensity when you are starting out.",
        "Everyday movement, meals, sleep and stress all contribute to heart health.",
        "Know your blood pressure and cholesterol numbers, and review them with a clinician.",
        "Chest pain, severe breathlessness or fainting needs urgent medical attention."
      ],
      sections: [
        {
          id: "start-small",
          heading: "Start with what you can repeat",
          paragraphs: [
            "Heart health advice can sound like a list of things you are failing to do. In practice, the most useful changes are usually the ones that fit into an ordinary week and can be repeated without a huge amount of effort.",
            "For many adults, physical activity guidelines suggest aiming for around 150 minutes of moderate activity across a week. That is a useful reference point, not a test. Breaking it into short walks, cycling to the shops or a few minutes of movement at home all count. If you have an existing heart condition, have not exercised in a long time, or feel unwell during activity, speak to a clinician before pushing harder."
          ]
        },
        {
          id: "movement",
          heading: "Build movement into the day",
          paragraphs: [
            "A planned workout is helpful, but it is not the only route to activity. Taking the stairs when they are an option, walking during a phone call, or getting off the bus a stop earlier can add up over a week.",
            "The goal is a pattern your body and schedule can adapt to. Starting with ten minutes and increasing gradually is usually more sustainable than beginning with an intense routine that leaves you sore and discouraged."
          ]
        },
        {
          id: "meals",
          heading: "Look at the pattern of your meals, not one meal",
          paragraphs: [
            "No single meal decides your heart health. The broader pattern matters more: how often vegetables, beans, whole grains, fruit, nuts and fish appear; how much ultra-processed food and sugary drinks fit in; and whether meals leave you satisfied.",
            "Rather than removing everything you enjoy, try adding one useful thing. A handful of nuts instead of a biscuit, a portion of vegetables alongside dinner, or water with a meal are small shifts that can become normal over time."
          ]
        },
        {
          id: "numbers",
          heading: "Know your numbers",
          paragraphs: [
            "Blood pressure, cholesterol and blood glucose are useful because they can be high without obvious symptoms. A routine check gives you and your clinician something concrete to discuss.",
            "A single reading is rarely the whole story. Numbers are a conversation starter, not a verdict. Bring your readings, medications and questions to your appointment so that decisions are based on context rather than anxiety."
          ]
        },
        {
          id: "when-to-seek-help",
          heading: "Know when to seek help",
          paragraphs: [
            "Some symptoms should never wait for a routine appointment. Chest pain or pressure, severe shortness of breath, fainting, or sudden weakness on one side of the body need urgent assessment. Call emergency services.",
            "For less urgent concerns — a new palpitation, unusual fatigue, or a family history you are unsure about — book a conversation with a clinician. Being proactive is not the same as being alarmist."
          ]
        }
      ]
    },
    {
      slug: "first-neurology-appointment",
      title: "What actually happens at a first neurology appointment",
      category: "patient-guides",
      categoryLabel: "Patient guides",
      date: "2026-09-04",
      readTime: "5 min read",
      author: "Dr. Daniel Kim",
      authorSlug: "daniel-kim",
      authorRole: "Consultant Neurologist",
      image: "assets/images/facilities/consultation.jpg",
      imageAlt: "A doctor listening attentively to a patient across a desk in a bright consultation room",
      excerpt:
        "A first neurology appointment is mostly a conversation. Here is what to expect, how to prepare, and why not every symptom needs a scan.",
      keyPoints: [
        "A detailed history is often the most important part of a neurology assessment.",
        "Bring a timeline of symptoms, a medication list and any previous test results.",
        "Imaging is requested when it will change the plan — not automatically.",
        "Ask what the next step is and which symptoms would need urgent review."
      ],
      sections: [
        {
          id: "before",
          heading: "Before the appointment",
          paragraphs: [
            "Neurology appointments tend to focus on patterns. When did a symptom start? Is it constant or episodic? What makes it better or worse? Has anything changed recently? Writing a short timeline can be more useful than trying to remember everything in the room.",
            "Bring a list of current medicines, including anything bought over the counter, and copies of relevant scans or blood tests if you have them. It can also help to bring someone you trust, especially if concentration or memory has been affected."
          ]
        },
        {
          id: "in-the-room",
          heading: "In the consulting room",
          paragraphs: [
            "The clinician will usually ask about your symptoms, general health, sleep and family history, then perform a focused physical examination. That may include checking your reflexes, strength, sensation, coordination, eye movements and balance.",
            "You do not need to have your symptoms neatly summarised or a diagnosis in mind. Describing what you notice in your own words is exactly what the appointment is for."
          ]
        },
        {
          id: "tests",
          heading: "Not every symptom needs a scan",
          paragraphs: [
            "Imaging can be valuable, but it is not automatically necessary. A scan may not answer the question being asked, and some findings need careful interpretation in context. The decision should follow the history and examination.",
            "If a test is recommended, ask what it is looking for, how long it will take to get results, and what happens next. Waiting for tests can be stressful; knowing the pathway can make the wait more manageable."
          ]
        },
        {
          id: "plan",
          heading: "Leaving with a plan",
          paragraphs: [
            "A good appointment ends with a clear next step: a treatment change, a test, a referral, or a review date. Ask for this in writing if it helps.",
            "Before you leave, check which symptoms would need urgent attention and who to contact if something changes. If you are unsure about anything discussed, it is reasonable to ask for it to be explained again."
          ]
        }
      ]
    },
    {
      slug: "child-first-hospital-visit",
      title: "A calm first visit: helping children feel safe at the hospital",
      category: "family-child",
      categoryLabel: "Family & child",
      date: "2026-08-21",
      readTime: "4 min read",
      author: "Dr. Sofia Alvarez",
      authorSlug: "sofia-alvarez",
      authorRole: "Consultant Pediatrician",
      image: "assets/images/departments/pediatrics.jpg",
      imageAlt: "A pediatrician kneeling to talk with a smiling young child in a bright play area",
      excerpt:
        "Children cope better with a little preparation and a lot of honesty. A pediatrician shares practical ways to make a hospital visit feel safer.",
      keyPoints: [
        "Use simple, honest language and explain what will happen next.",
        "Bring a familiar comfort item and allow small choices where possible.",
        "Tell the clinical team what helps your child settle.",
        "Praise cooperation afterwards and keep the conversation open."
      ],
      sections: [
        {
          id: "prepare",
          heading: "Prepare with honesty",
          paragraphs: [
            "Children notice more than adults sometimes expect. Preparing them a day or two in advance, using simple words, can reduce surprises. Explain where you are going, who they will meet and roughly what will happen.",
            "Avoid promises you cannot keep, such as saying a procedure definitely will not hurt. It is more helpful to say what might happen, what the team will do to help, and that you will stay with them where possible."
          ]
        },
        {
          id: "comfort",
          heading: "Use comfort, routine and choice",
          paragraphs: [
            "A favourite toy, blanket or book can make an unfamiliar room feel more manageable. So can small choices: which arm to use, whether to sit or stand, or which sticker to choose afterwards.",
            "Play is not a distraction from serious care. It is one of the ways children process what is happening. If your child becomes distressed, ask the team for a moment; a pause is often better than pressing on."
          ]
        },
        {
          id: "team",
          heading: "Tell the team what helps",
          paragraphs: [
            "You know your child's signals best. Let staff know what calms them, what words they use for body parts, and whether they have had difficult experiences with medical care before.",
            "It is also fine to ask questions during the visit. You do not need to be an expert in the treatment to be an expert in your child."
          ]
        },
        {
          id: "after",
          heading: "After the visit",
          paragraphs: [
            "Give your child time to decompress. Some children want to talk; others prefer to play or rest. A simple acknowledgement — \"that was a big morning, and you did it\" — can mean a lot.",
            "Follow any care instructions closely, and contact the clinical team if you are worried about symptoms afterwards. If your child needs urgent help, use emergency services rather than waiting for a routine callback."
          ]
        }
      ]
    },
    {
      slug: "joint-health-after-50",
      title: "Strength after 50: a sensible approach to joint health",
      category: "healthy-living",
      categoryLabel: "Healthy living",
      date: "2026-08-08",
      readTime: "7 min read",
      author: "Dr. Marcus Bennett",
      authorSlug: "marcus-bennett",
      authorRole: "Consultant Orthopedic Surgeon",
      image: "assets/images/departments/rehabilitation.jpg",
      imageAlt: "A physiotherapist supporting an older adult practising walking between parallel bars in a bright rehabilitation gym",
      excerpt:
        "Joint pain after 50 is common, but it is not simply something to accept. A measured approach to movement, strength and recovery can make a real difference.",
      keyPoints: [
        "Joints generally benefit from regular, appropriate movement.",
        "Strength work supports the muscles around a joint and can improve confidence.",
        "Sharp pain, swelling, locking or instability should be assessed.",
        "Surgery is one option among several, not the automatic next step."
      ],
      sections: [
        {
          id: "motion",
          heading: "Motion is maintenance",
          paragraphs: [
            "It is tempting to rest a painful joint completely, but long periods of inactivity can make stiffness and weakness worse. For many people, gentle movement within a comfortable range helps maintain function and circulation.",
            "Walking, swimming, cycling and simple mobility exercises are common options. The right starting point depends on the joint, your general health and how long symptoms have been present. A physiotherapist can help tailor a plan."
          ]
        },
        {
          id: "strength",
          heading: "Strength supports the joint",
          paragraphs: [
            "Muscles around the hip, knee, shoulder and spine help absorb load. Strength work does not have to mean heavy weights; controlled body-weight exercises, resistance bands or light weights can be enough to begin with.",
            "Progress gradually. A small increase in repetitions or resistance every week or two is usually more sustainable than a sudden jump. Some muscle soreness after a new activity can be normal, but sharp or persistent pain is a reason to pause and seek advice."
          ]
        },
        {
          id: "recovery",
          heading: "Recovery is part of the programme",
          paragraphs: [
            "Joints and muscles adapt during rest as well as activity. Sleep, adequate nutrition and lighter days between harder sessions all contribute to recovery.",
            "If pain is increasing week by week rather than settling, or if a joint feels hot and swollen, do not push through. Get it assessed."
          ]
        },
        {
          id: "pain-signals",
          heading: "Pain is information",
          paragraphs: [
            "A dull ache that settles with rest is different from sharp pain, giving way, locking or a joint that cannot bear weight. The latter symptoms deserve prompt assessment.",
            "Persistent joint pain is also worth discussing even if it seems mild, because earlier assessment can open up more options — including physiotherapy, activity changes and pain management."
          ]
        },
        {
          id: "surgery",
          heading: "Surgery is one option, not the first",
          paragraphs: [
            "Joint replacement can be transformative for some people, but it is not the right answer for every painful joint. Non-surgical measures are often tried first, and the decision should reflect your symptoms, function and goals.",
            "If surgery is discussed, ask what recovery will involve, what you can do beforehand to prepare, and what the realistic timeline looks like. A good decision is a shared one."
          ]
        }
      ]
    },
    {
      slug: "skin-barrier",
      title: "Understanding your skin barrier (without buying ten products)",
      category: "healthy-living",
      categoryLabel: "Healthy living",
      date: "2026-07-24",
      readTime: "5 min read",
      author: "Dr. Priya Raman",
      authorSlug: "priya-raman",
      authorRole: "Consultant Dermatologist",
      image: "assets/images/blog/skin-barrier.jpg",
      imageAlt: "An unlabelled white skincare jar, cotton towel and green leaf on a pale stone surface",
      excerpt:
        "Serums, scrubs and ten-step routines are optional. A dermatologist explains the basics of supporting your skin barrier — and when to seek help.",
      keyPoints: [
        "The skin barrier helps retain water and keep irritants out.",
        "Gentle cleansing and consistent moisturising do most of the work.",
        "Daily sun protection supports long-term skin health.",
        "A persistent, bleeding or rapidly changing skin problem needs assessment."
      ],
      sections: [
        {
          id: "what",
          heading: "What the skin barrier does",
          paragraphs: [
            "The outermost layer of skin works as a barrier. It helps hold water in and keeps irritants, allergens and microbes out. When it is disrupted, skin can feel tight, dry, itchy or sensitive.",
            "Many things can affect it: weather, hot water, harsh cleansers, over-exfoliation, some medications and certain skin conditions. The answer is rarely a more complicated routine; often it is a simpler, gentler one."
          ]
        },
        {
          id: "cleanse",
          heading: "Cleanse gently",
          paragraphs: [
            "Lukewarm water and a mild, fragrance-free cleanser are a sensible starting point for most people. Harsh scrubs, frequent exfoliation and very hot showers can strip the skin and make irritation more likely.",
            "You do not need to feel squeaky-clean. That feeling often means the skin has been stripped of some of its natural oils."
          ]
        },
        {
          id: "moisturise",
          heading: "Moisturise consistently",
          paragraphs: [
            "A simple moisturiser applied after bathing can help lock in water. Ingredients such as glycerin, ceramides and hyaluronic acid are common and well tolerated by many people.",
            "Consistency matters more than the number of products. If a product stings or causes redness, stop using it and seek advice if the reaction persists."
          ]
        },
        {
          id: "sun",
          heading: "Sun protection is barrier care",
          paragraphs: [
            "Ultraviolet light contributes to skin ageing and skin cancer risk. Daily sun protection, shade and clothing are practical steps, especially when the UV index is high.",
            "A broad-spectrum sunscreen with an SPF of at least 30 is a common recommendation. Reapply when outdoors for long periods, and ask a pharmacist or clinician if you need help choosing a formula for sensitive skin."
          ]
        },
        {
          id: "when",
          heading: "When to see a dermatologist",
          paragraphs: [
            "Book an assessment for a rash that is spreading, painful or not settling, a mole that is changing, a sore that is not healing, or skin problems that are affecting sleep and daily life.",
            "Severe swelling of the face or lips, difficulty breathing, or a rapidly spreading rash with fever needs urgent medical care."
          ]
        }
      ]
    },
    {
      slug: "prenatal-visit-questions",
      title: "Preparing for a prenatal visit: questions worth writing down",
      category: "patient-guides",
      categoryLabel: "Patient guides",
      date: "2026-07-10",
      readTime: "6 min read",
      author: "Dr. Elena Petrova",
      authorSlug: "elena-petrova",
      authorRole: "Consultant Obstetrician & Gynecologist",
      image: "assets/images/departments/maternity.jpg",
      imageAlt: "A calm private maternity suite with a newborn crib beside a large sunlit window",
      excerpt:
        "A prenatal visit goes by quickly. Writing a few questions down beforehand can help you leave with the answers that matter to you.",
      keyPoints: [
        "Bring a short list of questions and your current medication list.",
        "Ask what each screening test is for and what the results can tell you.",
        "Discuss warning signs that need urgent review.",
        "You are allowed to ask for clarification or a second conversation."
      ],
      sections: [
        {
          id: "before",
          heading: "Before the appointment",
          paragraphs: [
            "Prenatal visits cover a lot in a short time. A note on your phone or a small notebook can help you remember what you wanted to ask. Put the most important question first.",
            "Bring details of any medicines, supplements, allergies and previous pregnancies, plus any test results from other providers. If you have been tracking symptoms or blood pressure readings, bring those too."
          ]
        },
        {
          id: "questions",
          heading: "Questions worth asking",
          paragraphs: [
            "Useful questions often include: What is being checked today? What are the next scheduled tests? Which symptoms should make me call you straight away? What changes to diet, activity or work might be helpful?",
            "It is also reasonable to ask about mental health, sleep, pelvic floor exercises, travel, and how to contact the team between appointments. No question is too small if it is worrying you."
          ]
        },
        {
          id: "tests",
          heading: "Tests are a conversation",
          paragraphs: [
            "Screening tests can provide useful information, but they also have limits. Ask what a test is looking for, how accurate it is, and what a positive or negative result would mean for your care.",
            "Some tests are offered routinely, while others are optional. A good discussion respects your values and gives you room to ask about alternatives."
          ]
        },
        {
          id: "team",
          heading: "Build your support team",
          paragraphs: [
            "Pregnancy care is usually shared between midwives, obstetricians and other professionals. Ask who is responsible for what, and how information is shared between them.",
            "Bringing a partner, friend or family member to appointments can help you remember information and feel supported. You can also ask for a private conversation if there is something you would rather discuss alone."
          ]
        }
      ]
    },
    {
      slug: "health-information-online",
      title: "Reading health information online: a simple credibility checklist",
      category: "patient-guides",
      categoryLabel: "Patient guides",
      date: "2026-06-26",
      readTime: "4 min read",
      author: "Dr. Samuel Ofori",
      authorSlug: "samuel-ofori",
      authorRole: "Consultant Physician, General Medicine",
      image: "assets/images/blog/health-information.jpg",
      imageAlt: "Overhead view of a person using a laptop with a notebook, glasses and tea on a wooden table",
      excerpt:
        "Health information is everywhere. A general physician shares a simple checklist for deciding what is worth trusting — and what to bring to your doctor.",
      keyPoints: [
        "Check who wrote the information and when it was reviewed.",
        "Look for references to evidence, not just confident claims.",
        "Be cautious when a source is selling a product or service.",
        "Use online information to ask better questions, not to replace assessment."
      ],
      sections: [
        {
          id: "who",
          heading: "Ask who is behind it",
          paragraphs: [
            "Start with the source: is it a recognised healthcare organisation, a professional body, a government health service or a named clinician? Look for an author, a review date and a clear editorial policy.",
            "A polished website is not evidence of accuracy. Credentials and transparency are more useful signals than design."
          ]
        },
        {
          id: "evidence",
          heading: "Look for evidence, not certainty",
          paragraphs: [
            "Health evidence is often nuanced. Claims that a single remedy \"cures\" a condition, or that one study overturns everything, deserve scepticism. Good sources usually explain what is known, what is uncertain and where the evidence comes from.",
            "Check whether the information links to studies, clinical guidelines or expert consensus. A reference list is not a guarantee, but its absence is a warning sign."
          ]
        },
        {
          id: "selling",
          heading: "Check whether someone is selling something",
          paragraphs: [
            "If a page is designed to sell a supplement, device or program, treat its claims with extra care. Look for clear separation between educational content and advertising, and be wary of testimonials presented as proof.",
            "Personal stories can be meaningful, but they are not the same as controlled evidence. A treatment that helped one person may not help another, and may carry risks."
          ]
        },
        {
          id: "clinician",
          heading: "Bring it to a clinician",
          paragraphs: [
            "Online information can help you prepare for an appointment, understand a diagnosis or ask better questions. It is less reliable as a way to diagnose yourself or choose a treatment without assessment.",
            "If something you read worries you, write it down and raise it with a qualified professional. That conversation can put the information in the context of your own health."
          ]
        }
      ]
    },
    {
      slug: "screen-time-eyes",
      title: "Screen time and your eyes: what the evidence can — and cannot — tell us",
      category: "healthy-living",
      categoryLabel: "Healthy living",
      date: "2026-06-12",
      readTime: "5 min read",
      author: "Dr. Hannah Lee",
      authorSlug: "hannah-lee",
      authorRole: "Consultant Ophthalmologist",
      image: "assets/images/blog/screen-time.jpg",
      imageAlt: "A person wearing glasses working at a laptop beside a window in soft evening light",
      excerpt:
        "Screens can make eyes tired and dry, but the story is more nuanced than \"screens ruin your eyes\". Here is what the evidence supports and what it does not.",
      keyPoints: [
        "Digital eye strain is common and usually temporary.",
        "Regular breaks and deliberate blinking can reduce discomfort.",
        "The relationship between near work and myopia is complex and not fully settled.",
        "Sudden vision loss, flashes or a curtain across vision needs urgent care."
      ],
      sections: [
        {
          id: "what-screens-do",
          heading: "What screens do — and do not do",
          paragraphs: [
            "Long periods of close focusing can leave eyes feeling tired, dry or achy. This is often called digital eye strain. It is uncomfortable, but it is not usually a sign of permanent damage.",
            "The evidence around near work and short-sightedness is more complicated. Genetics, time outdoors and other factors appear to matter. Avoid confident claims that a particular screen habit causes or prevents myopia in every person."
          ]
        },
        {
          id: "breaks",
          heading: "Take regular breaks",
          paragraphs: [
            "The 20-20-20 habit is a practical prompt: every 20 minutes, look at something about 20 feet away for around 20 seconds. It is not a proven cure for every eye symptom, but it helps many people reset their focus.",
            "You can also stand, stretch and glance out of a window. Short, frequent breaks tend to be easier to sustain than long ones."
          ]
        },
        {
          id: "blink",
          heading: "Blink, hydrate and adjust your setup",
          paragraphs: [
            "People tend to blink less when concentrating on a screen, which can contribute to dryness. Being aware of blinking and using lubricating drops — after checking with a pharmacist or clinician — can help.",
            "Position the screen roughly an arm's length away, with the top near or just below eye level. Reduce glare, increase font size if needed and avoid working in a dark room with a bright screen."
          ]
        },
        {
          id: "when",
          heading: "When to get your eyes checked",
          paragraphs: [
            "Book an eye examination if discomfort persists, if your vision changes, or if you need new glasses. Regular checks are especially important with diabetes, a family history of glaucoma, or earlier eye problems.",
            "Sudden loss of vision, new flashes or floaters, a curtain across your vision, or eye pain with redness needs urgent assessment. Do not wait for a routine appointment."
          ]
        }
      ]
    },
    {
      slug: "sore-throat-when-to-seek-care",
      title: "When a sore throat needs more than a lozenge",
      category: "prevention",
      categoryLabel: "Prevention",
      date: "2026-05-29",
      readTime: "4 min read",
      author: "Dr. Yusuf Haddad",
      authorSlug: "yusuf-haddad",
      authorRole: "Consultant ENT Surgeon",
      image: "assets/images/blog/sore-throat.jpg",
      imageAlt: "A mug of lemon and honey tea, a wool scarf and a jar of honey in soft morning light",
      excerpt:
        "Most sore throats settle on their own. An ENT surgeon explains the comfort measures that help, the warning signs to watch, and when to seek care.",
      keyPoints: [
        "Most sore throats are caused by viral infections and improve without antibiotics.",
        "Fluids, rest and simple comfort measures can ease symptoms.",
        "Difficulty breathing or swallowing, drooling or severe one-sided pain needs urgent assessment.",
        "A sore throat lasting more than a week or two deserves a clinical review."
      ],
      sections: [
        {
          id: "causes",
          heading: "What usually causes a sore throat",
          paragraphs: [
            "Most sore throats are linked to viral infections such as a cold or flu. They often settle within several days to a week. Bacterial infections are less common and are not the cause of every sore throat.",
            "Other causes include allergies, dry air, reflux, smoke and voice strain. The pattern of symptoms — fever, cough, runny nose, rash, voice change — helps distinguish between them."
          ]
        },
        {
          id: "comfort",
          heading: "Simple comfort measures",
          paragraphs: [
            "Rest, plenty of fluids and soft foods can make swallowing more comfortable. Warm drinks, honey in warm water for adults and children over one year, and salt-water gargles are common traditional measures that many people find soothing.",
            "Over-the-counter pain relief may help, but check with a pharmacist for the right option and dose, especially for children, pregnancy or long-term conditions. Antibiotics do not treat viral infections."
          ]
        },
        {
          id: "flags",
          heading: "Warning signs to watch",
          paragraphs: [
            "Seek urgent care for difficulty breathing, difficulty swallowing saliva, drooling, a muffled voice, severe one-sided throat pain, neck swelling, or a high fever with a rash. These can be signs of a more serious problem.",
            "Also seek advice if symptoms are not improving after a week or two, if they keep returning, or if you have a weakened immune system. A persistent sore throat can have causes that need examination."
          ]
        },
        {
          id: "prevent",
          heading: "Reducing the chance of another one",
          paragraphs: [
            "Hand washing, avoiding sharing cups and utensils, and staying up to date with recommended vaccinations can reduce the spread of common infections.",
            "If you smoke, stopping is one of the most effective things you can do for your throat and overall health. Help is available, and a clinician can discuss options with you."
          ]
        }
      ]
    }
  ];

  const MONTHS = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const FEATURED_SLUG = "heart-habits";
  const PAGE_SIZE = 6;

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function formatDate(iso) {
    const parts = String(iso).split("-").map(Number);
    if (parts.length !== 3) return iso;
    return parts[2] + " " + MONTHS[parts[1] - 1] + " " + parts[0];
  }

  function getQueryParam(name) {
    return new URLSearchParams(window.location.search).get(name);
  }

  function findArticle(slug) {
    return articles.find(function (article) { return article.slug === slug; });
  }

  function articleCard(article, delay) {
    return (
      '<article class="article-card group card overflow-hidden reveal" data-reveal-delay="' + (delay || 0) + '">' +
      '<a href="blog-details.html?article=' + encodeURIComponent(article.slug) + '" class="img-frame img-zoom relative aspect-[16/10] rounded-none" aria-label="Read ' + escapeHtml(article.title) + '">' +
      '<img src="' + article.image + '" alt="' + escapeHtml(article.imageAlt) + '" loading="lazy" width="1200" height="800">' +
      "</a>" +
      '<div class="flex flex-1 flex-col p-5 sm:p-6">' +
      '<div class="article-meta"><span class="text-teal-700">' + escapeHtml(article.categoryLabel) + "</span><span aria-hidden=\"true\">·</span><time datetime=\"" + article.date + '">' + formatDate(article.date) + "</time></div>" +
      '<h3 class="article-title"><a href="blog-details.html?article=' + encodeURIComponent(article.slug) + '">' + escapeHtml(article.title) + "</a></h3>" +
      '<p class="mt-2 line-clamp-3 text-sm leading-relaxed text-ink-soft">' + escapeHtml(article.excerpt) + "</p>" +
      '<div class="mt-auto flex items-center justify-between gap-4 border-t border-line pt-4 text-xs font-semibold text-ink-faint">' +
      '<span>' + escapeHtml(article.author) + "</span>" +
      '<span>' + escapeHtml(article.readTime) + "</span>" +
      "</div></div></article>"
    );
  }

  function initListing() {
    const grid = document.getElementById("blog-grid");
    if (!grid) return;

    const searchInput = document.getElementById("blog-search");
    const filterHost = document.getElementById("blog-filters");
    const count = document.getElementById("blog-count");
    const empty = document.getElementById("blog-empty");
    const emptyQuery = document.getElementById("blog-empty-query");
    const loadMore = document.getElementById("blog-load-more");
    const featured = document.getElementById("blog-featured");
    const resetButtons = document.querySelectorAll("[data-blog-reset]");

    let activeCategory = getQueryParam("category") || "all";
    if (!categories.some(function (category) { return category.slug === activeCategory; })) {
      activeCategory = "all";
    }
    let visibleCount = PAGE_SIZE;

    function isFiltering() {
      return activeCategory !== "all" || (searchInput && searchInput.value.trim().length > 0);
    }

    function results() {
      const query = (searchInput && searchInput.value.trim().toLowerCase()) || "";
      return articles.filter(function (article) {
        const categoryMatch = activeCategory === "all" || article.category === activeCategory;
        const haystack = [article.title, article.excerpt, article.categoryLabel, article.author, article.keyPoints.join(" ")]
          .join(" ")
          .toLowerCase();
        return categoryMatch && (!query || haystack.indexOf(query) !== -1);
      });
    }

    function buildFilters() {
      if (!filterHost) return;
      filterHost.innerHTML = categories
        .map(function (category) {
          const active = category.slug === activeCategory;
          return (
            '<button class="chip' + (active ? " is-active" : "") + '" type="button" data-blog-category="' + category.slug + '" aria-pressed="' + active + '">' +
            category.label +
            "</button>"
          );
        })
        .join("");

      filterHost.querySelectorAll("[data-blog-category]").forEach(function (button) {
        button.addEventListener("click", function () {
          activeCategory = button.getAttribute("data-blog-category");
          visibleCount = PAGE_SIZE;
          filterHost.querySelectorAll("[data-blog-category]").forEach(function (other) {
            const selected = other === button;
            other.classList.toggle("is-active", selected);
            other.setAttribute("aria-pressed", String(selected));
          });
          render();
        });
      });
    }

    function render() {
      const filtering = isFiltering();
      if (featured) featured.hidden = filtering;

      const allResults = results();
      const pool = filtering
        ? allResults
        : allResults.filter(function (article) { return article.slug !== FEATURED_SLUG; });
      const shown = pool.slice(0, visibleCount);

      grid.innerHTML = shown
        .map(function (article, index) { return articleCard(article, Math.min(index, 2) * 70); })
        .join("");

      if (count) {
        count.textContent = filtering
          ? allResults.length + (allResults.length === 1 ? " article" : " articles")
          : "Showing " + shown.length + " of " + pool.length + " journal articles";
      }

      if (empty) empty.hidden = pool.length !== 0;
      if (emptyQuery) {
        const terms = [];
        if (searchInput && searchInput.value.trim()) terms.push('"' + searchInput.value.trim() + '"');
        if (activeCategory !== "all") {
          const category = categories.find(function (item) { return item.slug === activeCategory; });
          if (category && category.slug !== "all") terms.push(category.label);
        }
        emptyQuery.textContent = terms.length ? terms.join(" · ") : "";
      }

      if (loadMore) {
        const remaining = pool.length - shown.length;
        loadMore.hidden = remaining <= 0;
        if (remaining > 0) {
          loadMore.textContent = "Load " + Math.min(PAGE_SIZE, remaining) + " more " + (remaining === 1 ? "article" : "articles");
        }
      }

      if (window.CareWell && window.CareWell.contentUpdated) window.CareWell.contentUpdated();
    }

    if (searchInput) {
      searchInput.addEventListener("input", function () {
        visibleCount = PAGE_SIZE;
        render();
      });
      searchInput.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && searchInput.value) {
          searchInput.value = "";
          visibleCount = PAGE_SIZE;
          render();
        }
      });
    }

    if (loadMore) {
      loadMore.addEventListener("click", function () {
        visibleCount += PAGE_SIZE;
        render();
      });
    }

    resetButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        activeCategory = "all";
        visibleCount = PAGE_SIZE;
        if (searchInput) searchInput.value = "";
        buildFilters();
        render();
        if (searchInput) searchInput.focus();
      });
    });

    buildFilters();
    render();
  }

  function initDetails() {
    const hero = document.getElementById("article-hero");
    if (!hero) return;

    const article = findArticle(getQueryParam("article")) || findArticle(FEATURED_SLUG) || articles[0];
    const body = document.getElementById("article-body");
    const toc = document.getElementById("article-toc");
    const related = document.getElementById("article-related");
    const authorBox = document.getElementById("article-author");
    const crumb = document.getElementById("article-crumb");
    const author = (window.CareWellDoctors && window.CareWellDoctors.doctors || []).find(function (doctor) {
      return doctor.slug === article.authorSlug;
    });

    document.title = article.title + " | CareWell Health Journal";
    const description = article.excerpt;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute("content", description);
    document.querySelectorAll('meta[property="og:title"]').forEach(function (meta) {
      meta.setAttribute("content", article.title + " | CareWell Health Journal");
    });
    document.querySelectorAll('meta[property="og:description"]').forEach(function (meta) {
      meta.setAttribute("content", description);
    });
    document.querySelectorAll('meta[property="og:image"]').forEach(function (meta) {
      meta.setAttribute("content", article.image);
    });

    if (crumb) crumb.textContent = article.title;

    hero.innerHTML =
      '<div class="page-hero-inner container-site">' +
      '<nav aria-label="Breadcrumb"><ol class="breadcrumb">' +
      '<li><a href="index.html">Home</a></li>' +
      '<li><a href="blog.html">Health journal</a></li>' +
      '<li><a href="blog.html?category=' + article.category + '">' + escapeHtml(article.categoryLabel) + "</a></li>" +
      "</ol></nav>" +
      '<div class="mt-8 max-w-4xl">' +
      '<div class="flex flex-wrap items-center gap-3">' +
      '<a class="badge badge-teal" href="blog.html?category=' + article.category + '">' + escapeHtml(article.categoryLabel) + "</a>" +
      '<span class="text-xs font-semibold text-ink-faint">' + escapeHtml(article.readTime) + "</span>" +
      "</div>" +
      '<h1 class="display-1 mt-5 text-[clamp(2.1rem,4.4vw,3.6rem)]">' + escapeHtml(article.title) + "</h1>" +
      '<p class="lead mt-5">' + escapeHtml(article.excerpt) + "</p>" +
      '<div class="mt-7 flex flex-col gap-5 border-t border-line pt-5 sm:flex-row sm:items-center sm:justify-between">' +
      '<div class="flex items-center gap-3">' +
      (author ? '<img src="' + author.portrait + '" alt="" class="h-11 w-11 rounded-full object-cover" loading="lazy" width="44" height="44">' : "") +
      '<div><p class="text-sm font-bold text-navy-900">' + escapeHtml(article.author) + "</p>" +
      '<p class="text-xs text-ink-faint">' + escapeHtml(article.authorRole) + " · <time datetime=\"" + article.date + '">' + formatDate(article.date) + "</time></p></div></div>" +
      '<div class="flex items-center gap-2 print:hidden">' +
      '<button class="btn btn-secondary btn-sm" type="button" data-copy-link><i data-lucide="link" aria-hidden="true"></i><span data-copy-label>Copy link</span></button>' +
      '<button class="btn btn-secondary btn-sm" type="button" data-print-article><i data-lucide="printer" aria-hidden="true"></i>Print</button>' +
      "</div></div></div>" +
      '<div class="img-frame mt-10 aspect-[16/9] shadow-soft sm:mt-12 lg:aspect-[21/9]">' +
      '<img src="' + article.image + '" alt="' + escapeHtml(article.imageAlt) + '" width="1200" height="800" fetchpriority="high">' +
      "</div></div>";

    if (toc) {
      toc.innerHTML =
        '<p class="text-[11px] font-bold uppercase tracking-[0.16em] text-ink-faint">In this article</p>' +
        '<nav aria-label="Article contents" class="mt-3">' +
        article.sections
          .map(function (section) {
            return '<a href="#section-' + section.id + '">' + escapeHtml(section.heading) + "</a>";
          })
          .join("") +
        "</nav>";
    }

    if (body) {
      body.innerHTML =
        '<div class="callout reveal">' +
        '<p class="flex items-center gap-2 font-bold text-navy-900"><i data-lucide="list-checks" class="h-4 w-4 text-teal-700" aria-hidden="true"></i>Key points</p>' +
        '<ul class="check-list mt-3">' +
        article.keyPoints
          .map(function (point) { return '<li><i data-lucide="check" aria-hidden="true"></i><span>' + escapeHtml(point) + "</span></li>"; })
          .join("") +
        "</ul></div>" +
        '<div class="prose-carewell mt-8">' +
        article.sections
          .map(function (section) {
            return (
              '<h2 id="section-' + section.id + '">' + escapeHtml(section.heading) + "</h2>" +
              section.paragraphs.map(function (paragraph) { return "<p>" + escapeHtml(paragraph) + "</p>"; }).join("")
            );
          })
          .join("") +
        "</div>" +
        '<div class="mt-10 flex items-start gap-4 rounded-xl border border-line bg-sand-50 p-5">' +
        '<i data-lucide="shield-alert" class="mt-0.5 h-5 w-5 shrink-0 text-teal-700" aria-hidden="true"></i>' +
        '<div><p class="text-sm font-bold text-navy-900">Medical disclaimer</p>' +
        '<p class="mt-1 text-[13px] leading-relaxed text-ink-soft">This article is general educational content for a fictional hospital demonstration. It is not medical advice, does not replace an assessment by a qualified clinician, and should not be used to diagnose or treat a condition. If you are worried about your health, seek professional advice. In an emergency, call 911.</p>' +
        '<p class="mt-2 text-[11px] text-ink-faint">All article metadata, authors and clinical details on this site are illustrative sample content.</p></div></div>';
    }

    if (authorBox) {
      authorBox.innerHTML = author
        ? '<div class="flex flex-col gap-5 sm:flex-row sm:items-center">' +
          '<img src="' + author.portrait + '" alt="Portrait of ' + escapeHtml(author.name) + '" class="h-20 w-20 shrink-0 rounded-full object-cover" loading="lazy" width="80" height="80">' +
          '<div class="flex-1"><p class="eyebrow-plain">About the author</p>' +
          '<h2 class="mt-1 font-display text-xl font-semibold text-navy-900">' + escapeHtml(article.author) + "</h2>" +
          '<p class="mt-1 text-sm text-ink-soft">' + escapeHtml(article.authorRole) + ", CareWell Hospital</p>" +
          '<p class="mt-2 note">Fictional clinician profile used for this demonstration.</p></div>' +
          '<a class="btn btn-secondary btn-sm shrink-0" href="doctor-details.html?doctor=' + author.slug + '">View sample profile</a>' +
          "</div>"
        : "";
    }

    if (related) {
      const sameCategory = articles.filter(function (item) {
        return item.slug !== article.slug && item.category === article.category;
      });
      const others = articles.filter(function (item) {
        return item.slug !== article.slug && item.category !== article.category;
      });
      const picks = sameCategory.concat(others).slice(0, 3);

      related.innerHTML = picks
        .map(function (item) {
          return (
            '<article class="article-card group card overflow-hidden">' +
            '<a href="blog-details.html?article=' + encodeURIComponent(item.slug) + '" class="img-frame img-zoom aspect-[16/10] rounded-none">' +
            '<img src="' + item.image + '" alt="' + escapeHtml(item.imageAlt) + '" loading="lazy" width="1200" height="800">' +
            "</a>" +
            '<div class="p-5"><p class="article-meta"><span class="text-teal-700">' + escapeHtml(item.categoryLabel) + "</span></p>" +
            '<h3 class="article-title"><a href="blog-details.html?article=' + encodeURIComponent(item.slug) + '">' + escapeHtml(item.title) + "</a></h3>" +
            '<p class="mt-2 text-xs font-semibold text-ink-faint">' + formatDate(item.date) + " · " + escapeHtml(item.readTime) + "</p></div></article>"
          );
        })
        .join("");
    }

    if (window.CareWell && window.CareWell.contentUpdated) window.CareWell.contentUpdated();
    if (window.CareWell && window.CareWell.initArticleTools) window.CareWell.initArticleTools();
  }

  function init() {
    initListing();
    initDetails();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
