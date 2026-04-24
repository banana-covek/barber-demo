/* ═══════════════════════════════════════════════════════
   MATKO BARBER SHOP — script.js
   Vanilla JS · No frameworks
═══════════════════════════════════════════════════════ */

/* ─────────────────────────────────────────────────────
   1. LANGUAGE STRINGS
   Add/edit keys here. lang.lat = Latin, lang.cyr = Cyrillic.
───────────────────────────────────────────────────────*/
const lang = {
  lat: {
    // Navigation
    nav_about:    'O nama',
    nav_services: 'Usluge',
    nav_gallery:  'Galerija',
    nav_reviews:  'Utisci',
    nav_contact:  'Kontakt',

    // Hero
    hero_tagline:  'Premium Barber Shop · Jagodina',
    hero_headline: 'Svaki rez priča svoju priču.',
    hero_sub:      'Pravi zanat, pravi stil. Posetite nas i iskusite razliku između sečenja kose i prave transformacije.',
    hero_cta:      'Zakaži termin',
    scroll_hint:   'Skroluj',

    // About
    label_about:   'O nama',
    about_title:   'Više od frizernice.',
    about_body:    'Matko Barber Shop je mesto gde se susreću tradicija i moderan stil. Osnovani 2002. godine u Jagodini, sa godinama iskustva u poslu, posvećeni smo svakom detalju — od preciznog šišanja do savršenog brijanja. Svaki klijent zaslužuje tretman koji odgovara njemu i samo njemu.',
    about_badge:   'God.\niskustva',
    about_li1:     'Precizno šišanje i stilizovanje',
    about_li2:     'Brijanje britvom i oblikovanje brade',
    about_li3:     'Opuštajuća atmosfera, profesionalni pristup',

    // Services
    label_services: 'Usluge',
    services_title: 'Šta nudimo.',

    // Gallery
    label_gallery: 'Galerija',
    gallery_title: 'Naši radovi.',
    gallery_sub:   'Kliknite na sliku za uvećani prikaz.',

    // Reviews
    label_reviews:  'Utisci',
    reviews_title:  'Šta kažu klijenti.',
    reviews_count:  'recenzija na Google-u',

    // Contact
    label_contact:  'Kontakt',
    contact_title:  'Dođite po svoj red.',
    contact_sub:    'Zakaži termin telefonom ili nam pošalji poruku. Odgovaramo brzo!',
    hours_title:    'Radno vreme',
    hours_weekdays: 'Ponedeljak – Petak: 09:00 – 20:00',
    hours_saturday: 'Subota: 09:00 – 18:00',
    hours_sunday:   'Nedelja: Zatvoreno',

    // Form
    form_name:    'Ime i prezime',
    form_phone:   'Broj telefona',
    form_message: 'Poruka',
    form_send:    'Pošalji poruku',
    form_note:    'Ovo je demo obrazac. Poruke se ne šalju.',

    // Footer
    footer_copy: '© 2025 Matko Barber Shop. Sva prava zadržana.',

    // Maps
    contact_maps: 'Pronađi nas na Google Maps',

    // CTA buttons
    cta_instagram: 'Zaprati nas na Instagramu',
    cta_phone:     'Pozovi: 064 470 40 34',
    cta_copied:    'Broj kopiran! 📋',

    // Lang toggle label (shows what you SWITCH TO)
    lang_toggle: 'ЋИР',
  },

  cyr: {
    // Navigation
    nav_about:    'О нама',
    nav_services: 'Услуге',
    nav_gallery:  'Галерија',
    nav_reviews:  'Утисци',
    nav_contact:  'Контакт',

    // Hero
    hero_tagline:  'Премиум Бербер Шоп · Јагодина',
    hero_headline: 'Сваки рез прича своју причу.',
    hero_sub:      'Прави занат, прави стил. Посетите нас и искусите разлику између шишања косе и праве трансформације.',
    hero_cta:      'Закажи термин',
    scroll_hint:   'Скролуј',

    // About
    label_about:   'О нама',
    about_title:   'Више од фризерница.',
    about_body:    'Матко Бербер Шоп је место где се сусрећу традиција и модеран стил. Основани 2002. године у Јагодини, са годинама искуства у послу, посвећени смо сваком детаљу — од прецизног шишања до савршеног бријања. Сваки клијент заслужује третман који одговара њему и само њему.',
    about_badge:   'Год.\nискуства',
    about_li1:     'Прецизно шишање и стилизовање',
    about_li2:     'Бријање бритвом и обликовање браде',
    about_li3:     'Опуштајућа атмосфера, професионалан приступ',

    // Services
    label_services: 'Услуге',
    services_title: 'Шта нудимо.',

    // Gallery
    label_gallery: 'Галерија',
    gallery_title: 'Наши радови.',
    gallery_sub:   'Кликните на слику за увећани приказ.',

    // Reviews
    label_reviews:  'Утисци',
    reviews_title:  'Шта кажу клијенти.',
    reviews_count:  'рецензија на Google-у',

    // Contact
    label_contact:  'Контакт',
    contact_title:  'Дођите по свој ред.',
    contact_sub:    'Закажи термин телефоном или нам пошаљи поруку. Одговарамо брзо!',
    hours_title:    'Радно време',
    hours_weekdays: 'Понедељак – Петак: 09:00 – 20:00',
    hours_saturday: 'Субота: 09:00 – 18:00',
    hours_sunday:   'Недеља: Затворено',

    // Form
    form_name:    'Ime i prezime',
    form_phone:   'Број телефона',
    form_message: 'Порука',
    form_send:    'Пошаљи поруку',
    form_note:    'Ово је демо образац. Поруке се не шаљу.',

    // Footer
    footer_copy: '© 2025 Матко Бербер Шоп. Сва права задржана.',

    // Maps
    contact_maps: 'Пронађи нас на Google Maps',

    // CTA buttons
    cta_instagram: 'Прати нас на Инстаграму',
    cta_phone:     'Позови: 064 470 40 34',
    cta_copied:    'Број копиран! 📋',

    // Lang toggle label (shows what you SWITCH TO)
    lang_toggle: 'LAT',
  },
};

/* ─────────────────────────────────────────────────────
   2. SERVICES DATA
   Edit this array to add/remove/update services.
───────────────────────────────────────────────────────*/
const SERVICES = [
  {
    icon: '✂',
    name_lat: 'Šišanje',
    name_cyr: 'Шишање',
    desc_lat: 'Klasično ili moderno šišanje prilagođeno vama.',
    desc_cyr: 'Класично или модерно шишање прилагођено вама.',
    price: '1.200',
  },
  {
    icon: '▲',
    name_lat: 'Šišanje + brada',
    name_cyr: 'Шишање + брада',
    desc_lat: 'Kompletna usluga — kosa i brada u savršenom skladu.',
    desc_cyr: 'Комплетна услуга — коса и брада у савршеном складу.',
    price: '1.700',
  },
  {
    icon: '◈',
    name_lat: 'Brijanje britvom',
    name_cyr: 'Бријање бритвом',
    desc_lat: 'Tradicija brijanja sa toplim peškirom i klasičnom britvom.',
    desc_cyr: 'Традиција бријања са топлим пешкиром и класичном бритвом.',
    price: '1.000',
  },
  {
    icon: '◎',
    name_lat: 'Oblikovanje brade',
    name_cyr: 'Обликовање браде',
    desc_lat: 'Precizno trimovanje i stilizovanje brade.',
    desc_cyr: 'Прецизно тримовање и стилизовање браде.',
    price: '700',
  },
  {
    icon: '◇',
    name_lat: 'Dečije šišanje',
    name_cyr: 'Дечије шишање',
    desc_lat: 'Šišanje za najmlađe klijente, strpljivo i precizno.',
    desc_cyr: 'Шишање за најмлађе клијенте, стрпљиво и прецизно.',
    price: '800',
  },
  {
    icon: '✦',
    name_lat: 'Tretman glave',
    name_cyr: 'Третман главе',
    desc_lat: 'Dubinsko pranje i masaža skalpa za osveženje.',
    desc_cyr: 'Дубинско прање и масажа скалпа за освежење.',
    price: '600',
  },
];

/* ─────────────────────────────────────────────────────
   3. GALLERY IMAGES
   Add filenames from your /images folder to this array.
   Example: 'cut1.jpg', 'fade2.webp', etc.
   If an image fails to load, a placeholder is shown.
───────────────────────────────────────────────────────*/
const GALLERY_IMAGES = [
  '/images/gallery-1.jpg',
  '/images/gallery-2.jpg',
  '/images/gallery-3.jpg',
  '/images/gallery-4.jpg',
  '/images/gallery-5.jpg',
  '/images/gallery-6.jpg',
  '/images/gallery-7.jpg',
  '/images/gallery-8.jpg',
];

/* ─────────────────────────────────────────────────────
   4. REVIEWS DATA
───────────────────────────────────────────────────────*/
const REVIEWS = [
  {
    name: 'Miroslav Kuntić',
    initials: 'MK',
    color: '#2d6a4f',
    stars: 5,
    date_lat: 'Google recenzija',
    date_cyr: 'Google рецензија',
    text_lat: 'Odličan salon, decki su vrhunski frizeri, za svaku preporuku!',
    text_cyr: 'Одличан салон, децки су врхунски фризери, за сваку препоруку!',
  },
  {
    name: 'Zoran Staknović',
    initials: 'ZS',
    color: '#1d3557',
    stars: 5,
    date_lat: 'Google recenzija',
    date_cyr: 'Google рецензија',
    text_lat: 'Profesionalci !\nPreporuka 👏👏👏\nDomaćinsko okruženje !\nPrijatan ambijent !\n👍',
    text_cyr: 'Profesionalci !\nPreporuka 👏👏👏\nDomaćinsko okruženje !\nPrijatan ambijent !\n👍',
  },
  {
    name: 'Željko Lukić',
    initials: 'ŽL',
    color: '#7b2d8b',
    stars: 5,
    date_lat: 'Google recenzija',
    date_cyr: 'Google рецензија',
    text_lat: 'Matko, Matko, šiša na kratko. Odlična usluga, povoljne cene, zakazuje na 7 dana 😁',
    text_cyr: 'Матко, Матко, шиша на кратко. Одлична услуга, повољне цене, заказује на 7 дана 😁',
  },
  {
    name: 'Vladan Ilić',
    initials: 'VI',
    color: '#b5451b',
    stars: 5,
    date_lat: 'Google recenzija',
    date_cyr: 'Google рецензија',
    text_lat: 'Uslužni, brzi i profesionalni. Za svaku pohvalu i preporuku.',
    text_cyr: 'Услужни, брзи и професионални. За сваку похвалу и препоруку.',
  },
  {
    name: 'Goran Divnić',
    initials: 'GD',
    color: '#4a5568',
    stars: 5,
    date_lat: 'Google recenzija',
    date_cyr: 'Google рецензија',
    text_lat: 'Muški frizeri, najbolji u gradu. Potrebno je zakazivanje. Preporuka.',
    text_cyr: 'Мушки фризери, најближи у граду. Потребно је заказивање. Препорука.',
  },
];

/* ═══════════════════════════════════════════════════════
   APP STATE
═══════════════════════════════════════════════════════ */
let currentLang = 'lat'; // default = Latin

/* ═══════════════════════════════════════════════════════
   LANGUAGE SWITCHING
═══════════════════════════════════════════════════════ */
function applyLanguage(l) {
  const strings = lang[l];

  // Update all elements with data-key attribute
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.dataset.key;
    if (strings[key] !== undefined) {
      el.textContent = strings[key];
    }
  });

  // Update toggle button label
  document.getElementById('lang-label').textContent = strings.lang_toggle;

  // Update html lang attribute
  document.documentElement.lang = l === 'lat' ? 'sr-Latn' : 'sr-Cyrl';

  // Re-render dynamic content
  renderServices(l);
  renderReviews(l);
}

function toggleLanguage() {
  currentLang = currentLang === 'lat' ? 'cyr' : 'lat';
  applyLanguage(currentLang);
}

/* ═══════════════════════════════════════════════════════
   RENDER SERVICES
═══════════════════════════════════════════════════════ */
function renderServices(l) {
  const grid = document.querySelector('.services-grid');
  if (!grid) return;
  grid.innerHTML = '';

  SERVICES.forEach(s => {
    const card = document.createElement('div');
    card.className = 'service-card reveal';
    card.innerHTML = `
      <div class="service-icon">${s.icon}</div>
      <div class="service-name">${l === 'lat' ? s.name_lat : s.name_cyr}</div>
      <div class="service-desc">${l === 'lat' ? s.desc_lat : s.desc_cyr}</div>
      <div class="service-price">${s.price}<span>RSD</span></div>
    `;
    grid.appendChild(card);
  });

  // Re-observe newly created elements
  observeReveal();
}

/* ═══════════════════════════════════════════════════════
   RENDER GALLERY
═══════════════════════════════════════════════════════ */
function renderGallery() {
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;
  grid.innerHTML = '';

  GALLERY_IMAGES.forEach((src, idx) => {
    const item = document.createElement('div');
    item.className = 'gallery-item reveal';
    item.dataset.index = idx;

    const img = document.createElement('img');
    img.alt = `Barber work ${idx + 1}`;
    img.loading = 'lazy';

    // Placeholder SVG while loading / on error
    const placeholder = `
      <div class="gallery-placeholder">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <circle cx="8.5" cy="8.5" r="1.5"/>
          <path d="M21 15l-5-5L5 21"/>
        </svg>
        <span>IMAGE ${idx + 1}</span>
      </div>`;

    img.onerror = () => {
      img.style.display = 'none';
      item.insertAdjacentHTML('beforeend', placeholder);
    };
    img.src = src;

    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    overlay.innerHTML = '⤢';

    item.appendChild(img);
    item.appendChild(overlay);
    item.addEventListener('click', () => openLightbox(idx));
    grid.appendChild(item);
  });

  observeReveal();
}

/* ═══════════════════════════════════════════════════════
   LIGHTBOX
═══════════════════════════════════════════════════════ */
let lbIndex = 0;

function openLightbox(idx) {
  lbIndex = idx;
  updateLightboxImage();
  const lb = document.getElementById('lightbox');
  lb.classList.add('active');
  lb.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  lb.classList.remove('active');
  lb.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function updateLightboxImage() {
  const img = document.getElementById('lb-img');
  img.src = GALLERY_IMAGES[lbIndex];
  img.alt = `Gallery image ${lbIndex + 1}`;
}

function lightboxPrev() {
  lbIndex = (lbIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length;
  updateLightboxImage();
}

function lightboxNext() {
  lbIndex = (lbIndex + 1) % GALLERY_IMAGES.length;
  updateLightboxImage();
}

/* ═══════════════════════════════════════════════════════
   RENDER REVIEWS
═══════════════════════════════════════════════════════ */
function renderReviews(l) {
  const track = document.getElementById('reviews-track');
  if (!track) return;
  track.innerHTML = '';

  REVIEWS.forEach(r => {
    const stars = '★'.repeat(r.stars) + '☆'.repeat(5 - r.stars);
    const card = document.createElement('div');
    card.className = 'review-card reveal';
    card.innerHTML = `
      <div class="review-header">
        <div class="review-avatar" style="background:${r.color}22; color:${r.color}">${r.initials}</div>
        <div class="review-meta">
          <div class="review-name">${r.name}</div>
          <div class="review-date">${l === 'lat' ? r.date_lat : r.date_cyr}</div>
        </div>
        <div class="google-g">G</div>
      </div>
      <div class="review-stars">${stars}</div>
      <p class="review-text">${(l === 'lat' ? r.text_lat : r.text_cyr).replace(/\n/g, '<br>')}</p>
    `;
    track.appendChild(card);
  });

  observeReveal();
}

/* ═══════════════════════════════════════════════════════
   SCROLL ANIMATIONS (IntersectionObserver)
═══════════════════════════════════════════════════════ */
let revealObserver;

function observeReveal() {
  const elements = document.querySelectorAll('.reveal:not(.visible)');

  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // Stagger siblings
          const siblings = entry.target.parentElement
            ? [...entry.target.parentElement.children].filter(c => c.classList.contains('reveal'))
            : [];
          const idx = siblings.indexOf(entry.target);
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, idx * 80);
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
  }

  elements.forEach(el => revealObserver.observe(el));
}

/* ═══════════════════════════════════════════════════════
   NAV — scroll effect & hamburger
═══════════════════════════════════════════════════════ */
function initNav() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  // Scroll → add .scrolled class
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  // Hamburger toggle
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });

  // Close mobile menu on link click
  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });
}

/* ═══════════════════════════════════════════════════════
   PHONE BUTTON
   — Mobile: follows href="tel:..." → opens dialer
   — Desktop: intercepts click, copies number to clipboard,
     shows toast, then still allows the tel: link to fire
     (some desktops have Skype / FaceTime etc.)
═══════════════════════════════════════════════════════ */
function initPhoneButton() {
  const btn   = document.getElementById('btn-phone');
  const toast = document.getElementById('copy-toast');
  if (!btn || !toast) return;

  const PHONE = '0644704034';

  btn.addEventListener('click', (e) => {
    // Always copy to clipboard
    if (navigator.clipboard) {
      navigator.clipboard.writeText(PHONE).then(() => showToast()).catch(() => {});
    } else {
      // Fallback for older browsers
      const ta = document.createElement('textarea');
      ta.value = PHONE;
      ta.style.position = 'fixed';
      ta.style.opacity  = '0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); showToast(); } catch (_) {}
      document.body.removeChild(ta);
    }
    // On desktop, prevent the tel: navigation (no dialer app expected)
    // On mobile, allow it so the dialer opens
    const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
    if (!isMobile) e.preventDefault();
  });

  let toastTimer;
  function showToast() {
    toast.classList.add('visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('visible'), 2500);
  }
}

/* ═══════════════════════════════════════════════════════
   KEYBOARD & LIGHTBOX EVENTS
═══════════════════════════════════════════════════════ */
function initLightboxEvents() {
  document.getElementById('lb-close').addEventListener('click', closeLightbox);
  document.getElementById('lb-prev').addEventListener('click', lightboxPrev);
  document.getElementById('lb-next').addEventListener('click', lightboxNext);

  // Close on backdrop click
  document.getElementById('lightbox').addEventListener('click', (e) => {
    if (e.target === document.getElementById('lightbox')) closeLightbox();
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    const lb = document.getElementById('lightbox');
    if (!lb.classList.contains('active')) return;
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowLeft')  lightboxPrev();
    if (e.key === 'ArrowRight') lightboxNext();
  });
}

/* ═══════════════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  // Render dynamic sections
  renderGallery();
  renderServices(currentLang);
  renderReviews(currentLang);

  // Apply default language strings (static elements)
  applyLanguage(currentLang);

  // Init UI components
  initNav();
  initPhoneButton();
  initLightboxEvents();

  // Observe static .reveal elements
  observeReveal();

  // Language toggle button
  document.getElementById('lang-toggle').addEventListener('click', toggleLanguage);
});
