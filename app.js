/**
 * MUIRFA — Medical Marketplace
 * app.js — Main Application Logic
 */

'use strict';

// ════════════════════════════════════════════════
// DATA
// ════════════════════════════════════════════════

const CATS = [
  { n: 'Igna va Shpritslar', ic: '💉', bg: '#e0faf4', cnt: 340 },
  { n: 'Skapel va Asboblar', ic: '🔪', bg: '#dbeafe', cnt: 210 },
  { n: 'Tibbiy Kiyimlar', ic: '👨‍⚕️', bg: '#fff7ed', cnt: 520 },
  { n: 'Laboratoriya', ic: '🔬', bg: '#f5f3ff', cnt: 180 },
  { n: "O'quv Materiallari", ic: '📚', bg: '#f0fdf4', cnt: 430 },
  { n: 'Diagnostika', ic: '🩺', bg: '#eff6ff', cnt: 290 },
  { n: 'Shifoxona Jihozlari', ic: '🛏️', bg: '#fffbeb', cnt: 150 },
  { n: 'Rentgen', ic: '🩻', bg: '#fef2f2', cnt: 95 },
];

const PRODS = [
  {
    id: 1, name: 'Steril Igna 23G (100 dona)', brand: 'BD Medical',
    cat: 'Igna va Shpritslar',
    img: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=400&h=400&fit=crop&auto=format',
    icon: '💉', price: 45000, old: 56000,
    tag: '-20%', tagType: '', student: false, rating: 4.8, reviews: 312,
    desc: "Bir martalik steril ignalar. Kimyoviy usulda sterilizatsiya qilingan. ISO 13485 sertifikati mavjud. Tibbiyot standartlariga to'liq mos.",
    specs: { Turi: 'Bir martalik', Olcham: '23G x 25mm', Miqdor: '100 dona', Sertifikat: 'ISO 13485', Ishlab_chiqaruvchi: 'BD Medical (AQSh)' }
  },
  {
    id: 2, name: 'Skapel No22 Steril (10 ta)', brand: 'Aesculap',
    cat: 'Skapel va Asboblar',
    img: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=400&fit=crop&auto=format',
    icon: '🔪', price: 32000, old: null,
    tag: 'YANGI', tagType: 'blue', student: false, rating: 4.9, reviews: 87,
    desc: "Professional jarrohlik skalpellari. Germaniya ishlab chiqarishi. Yuqori sifatli po'lat. CE sertifikati mavjud.",
    specs: { Turi: 'Bir martalik', Raqam: '22', Miqdor: '10 dona', Sertifikat: 'CE, ISO 13485', Ishlab_chiqaruvchi: 'Aesculap (Germaniya)' }
  },
  {
    id: 3, name: 'Stetoskop Littmann Classic III', brand: '3M Littmann',
    cat: 'Diagnostika',
    img: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&h=400&fit=crop&auto=format',
    icon: '🩺', price: 620000, old: null,
    tag: 'ORIGINAL', tagType: 'gold', student: false, rating: 4.9, reviews: 521,
    desc: "Eng yaxshi yurak va o'pka eshitish uchun professional stetoskop. 5 yil kafolat. Asl 3M mahsuloti.",
    specs: { Turi: 'Acoustik dual', Uzunlik: '69 sm', Kafolat: '5 yil', Sertifikat: 'CE, FDA', Ishlab_chiqaruvchi: '3M (AQSh)' }
  },
  {
    id: 4, name: 'Tibbiy Xalat (M/L/XL)', brand: 'MedWear UZ',
    cat: 'Tibbiy Kiyimlar',
    img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop&auto=format',
    icon: '👨‍⚕️', price: 85000, old: 100000,
    tag: '-15%', tagType: '', student: false, rating: 4.5, reviews: 203,
    desc: "Mahalliy ishlab chiqarish. Yuqori sifatli trikotaj mato. Qulay va chidamli. GOST R sertifikati.",
    specs: { Material: 'Poliester 65/35', Olcham: 'M, L, XL, 2XL', Sertifikat: 'GOST R', Ishlab_chiqaruvchi: 'MedWear UZ' }
  },
  {
    id: 5, name: 'Anatomiya Atlasi — Netter', brand: 'TashTibb',
    cat: "O'quv Materiallari",
    img: 'https://images.unsplash.com/photo-1544396821-4bc66274e434?w=400&h=400&fit=crop&auto=format',
    icon: '📚', price: 180000, old: 220000,
    tag: 'CHEGIRMA', tagType: '', student: true, rating: 4.9, reviews: 648,
    desc: "Tibbiyot talabalari uchun eng yaxshi anatomiya atlasi. O'zbek tiliga tarjima qilingan. 7-nashr.",
    specs: { Nashr: '7-nashr', Sahifalar: '640', Format: 'A4', Yil: '2024', Til: "O'zbek" }
  },
  {
    id: 6, name: 'Yurak Anatomik Maketi', brand: 'Erler-Zimmer',
    cat: "O'quv Materiallari",
    img: 'https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?w=400&h=400&fit=crop&auto=format',
    icon: '🫀', price: 350000, old: null,
    tag: 'DIDAKTIK', tagType: 'blue', student: true, rating: 4.7, reviews: 145,
    desc: "Tibbiyot ta'limi uchun professional anatomik maket. 2 qismga bo'linadi. CE sertifikati.",
    specs: { Material: 'PVC plastik', Qismlar: '2 ta', Sertifikat: 'CE', Ishlab_chiqaruvchi: 'Erler-Zimmer (Germaniya)' }
  },
  {
    id: 7, name: 'Mikroskop — Olympus CX23', brand: 'Olympus',
    cat: 'Laboratoriya',
    img: 'https://images.unsplash.com/photo-1516728778615-2d590ea1855e?w=400&h=400&fit=crop&auto=format',
    icon: '🔬', price: 1200000, old: null,
    tag: 'LAB', tagType: 'blue', student: true, rating: 4.8, reviews: 92,
    desc: "Talabalar va kichik laboratoriyalar uchun ideal mikroskop. Yuqori aniqlik, 2 yil kafolat.",
    specs: { Kattalashtirish: '40x-1000x', Linza: 'Achromat', Kafolat: '2 yil', Ishlab_chiqaruvchi: 'Olympus (Yaponiya)' }
  },
  {
    id: 8, name: 'Klinik Amaliyot Kitobi', brand: 'TashTibb',
    cat: "O'quv Materiallari",
    img: 'https://images.unsplash.com/photo-1585842378054-ee2e52f94ba2?w=400&h=400&fit=crop&auto=format',
    icon: '📋', price: 45000, old: 60000,
    tag: '-25%', tagType: '', student: true, rating: 4.6, reviews: 374,
    desc: "6-kurs talabalar uchun klinik amaliyot qo'llanmasi. O'zbek tilidagi eng yangi nashr.",
    specs: { Sahifalar: '320', Til: "O'zbek", Nashr: '2024', Muallif: "TashTibb jamoasi" }
  },
  {
    id: 9, name: "Qo'lqop Lateks (100 dona)", brand: 'Ansell',
    cat: 'Igna va Shpritslar',
    img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&auto=format',
    icon: '🧤', price: 28000, old: null,
    tag: 'OMMABOP', tagType: '', student: false, rating: 4.6, reviews: 511,
    desc: "Tibbiy tekshiruv uchun steril lateks qo'lqoplar. Bir martalik. Har xil o'lchamlarda.",
    specs: { Turi: 'Bir martalik', Material: 'Lateks', Miqdor: '100 dona', Sertifikat: 'CE, EN 455' }
  },
  {
    id: 10, name: 'Tonometr Omron M3', brand: 'Omron',
    cat: 'Diagnostika',
    img: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&auto=format',
    icon: '💓', price: 380000, old: 420000,
    tag: '-10%', tagType: '', student: false, rating: 4.9, reviews: 892,
    desc: "Avtomatik qon bosimini o'lchash apparati. Uy va klinika uchun. Xotira: 60 o'lchov.",
    specs: { Turi: 'Bilak', Xotira: "60 o'lchov", Kafolat: '3 yil', Sertifikat: 'CE, ISO 13485' }
  },
  {
    id: 11, name: 'Xirurgik Niqob (50 dona)', brand: 'MedGuard',
    cat: 'Tibbiy Kiyimlar',
    img: 'https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=400&h=400&fit=crop&auto=format',
    icon: '😷', price: 15000, old: null,
    tag: '3 QAVAT', tagType: 'blue', student: false, rating: 4.4, reviews: 1204,
    desc: "3 qavatli tibbiy niqob. Sertifikatlangan, yuqori filtratsiya. Qulay qo'llash.",
    specs: { Qavat: '3 ta', Sertifikat: 'CE, EN 14683', Miqdor: '50 dona', Turi: 'Bir martalik' }
  },
  {
    id: 12, name: 'Glukoza Test Tasmalari (50 dona)', brand: 'Accu-Chek',
    cat: 'Diagnostika',
    img: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=400&h=400&fit=crop&auto=format',
    icon: '🩸', price: 65000, old: 80000,
    tag: '-19%', tagType: '', student: false, rating: 4.8, reviews: 445,
    desc: "Accu-Chek glukometr uchun mos test tasmalari. Yuqori aniqlik. Oson ishlatish.",
    specs: { Miqdor: '50 dona', Uygunlik: 'Accu-Chek Active', Sertifikat: 'CE, ISO 15197', Saqlash: '25°C gacha' }
  },
];

const PROMO_CODES = {
  'MUIRFA10': { dis: 10000, msg: "🎉 Promo kod qo'llanildi! −10 000 so'm" },
  'TALABA': { dis: 20000, msg: "🎓 Talaba chegirmasi! −20 000 so'm" },
  'KLINIKA': { dis: 50000, msg: "🏥 Klinika chegirmasi! −50 000 so'm" },
  'YANGI25': { dis: 25000, msg: "🎁 Yangi mijoz chegirmasi! −25 000 so'm" },
};

// ════════════════════════════════════════════════
// STATE
// ════════════════════════════════════════════════

let cart = [];
let favs = [];
let promoDis = 0;
let sQ = '';
let sCatF = '';
let curProd = null;
let curQty = 1;
let sStep_ = 1;
let currentUser = null;

// ════════════════════════════════════════════════
// ROUTER
// ════════════════════════════════════════════════

function goPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const page = document.getElementById('page-' + id);
  if (page) {
    page.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Update nav
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  const navMap = { home: 0, search: 1, seller: 2 };
  if (navMap[id] !== undefined) {
    document.querySelectorAll('.nav-link')[navMap[id]]?.classList.add('active');
  }

  // Mobile drawer nav
  document.querySelectorAll('.mob-nav-item').forEach(i => i.classList.remove('active'));

  // Bottom nav
  document.querySelectorAll('.bnav-item').forEach(b => b.classList.remove('active'));
  const bn = document.getElementById('bn-' + id);
  if (bn) bn.classList.add('active');

  // Page-specific init
  if (id === 'cart') renderCart();
  if (id === 'checkout') renderCheckout();
  if (id === 'fav') renderFav();
}

function bnavGo(id) {
  goPage(id);
  if (id === 'search') runSearch();
}

// ════════════════════════════════════════════════
// MOBILE DRAWER
// ════════════════════════════════════════════════

function toggleDrawer() {
  const drawer = document.getElementById('mobDrawer');
  const ham = document.getElementById('hamburger');
  const isOpen = drawer.classList.contains('open');
  drawer.classList.toggle('open');
  ham.classList.toggle('open');
  document.body.style.overflow = isOpen ? '' : 'hidden';
}

// Close on resize to desktop
window.addEventListener('resize', () => {
  if (window.innerWidth >= 960) {
    const drawer = document.getElementById('mobDrawer');
    const ham = document.getElementById('hamburger');
    drawer.classList.remove('open');
    ham.classList.remove('open');
    document.body.style.overflow = '';
  }
});

// ════════════════════════════════════════════════
// NAVBAR SCROLL
// ════════════════════════════════════════════════

window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
  }
}, { passive: true });

// ════════════════════════════════════════════════
// HOME RENDER
// ════════════════════════════════════════════════

function renderHome() {
  // Categories
  const catEl = document.getElementById('catGrid');
  if (catEl) {
    catEl.innerHTML = CATS.map(c => `
      <div class="cat-card" onclick="sCat('${c.n}')">
        <div class="cat-icon">${c.ic}</div>
        <div class="cat-name">${c.n}</div>
        <div class="cat-cnt">${c.cnt} ta</div>
      </div>`).join('');
  }

  // Featured products
  const featEl = document.getElementById('featGrid');
  if (featEl) {
    const featured = PRODS.slice(0, 8);
    featEl.innerHTML = featured.map(p => pCard(p)).join('');
  }

  // Discounted products
  const discEl = document.getElementById('discGrid');
  if (discEl) {
    const discounted = PRODS.filter(p => p.old).slice(0, 4);
    discEl.innerHTML = discounted.map(p => pCard(p)).join('');
  }

  // Student products
  const stuEl = document.getElementById('stuGrid');
  if (stuEl) {
    const student = PRODS.filter(p => p.student).slice(0, 4);
    stuEl.innerHTML = student.map(p => pCard(p)).join('');
  }
}

// ════════════════════════════════════════════════
// PRODUCT CARD
// ════════════════════════════════════════════════

function pCard(p) {
  const isFav = favs.includes(p.id);
  const tagClass = p.tagType === 'blue' ? 'prod-tag blue' : p.tagType === 'gold' ? 'prod-tag gold' : 'prod-tag';
  const imgContent = p.img
    ? `<img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`
    : '';
  const fallback = `<span class="prod-img-fallback" style="${p.img ? 'display:none' : ''}">${p.icon}</span>`;
  return `
    <div class="prod-card" onclick="openDetail(${p.id})">
      <div class="prod-img">
        ${p.tag ? `<span class="${tagClass}">${p.tag}</span>` : ''}
        <button class="prod-fav ${isFav ? 'on' : ''}" onclick="togFav(event,${p.id})" title="Sevimlilarga qo'shish">
          ${isFav ? '❤️' : '🤍'}
        </button>
        ${imgContent}${fallback}
        ${p.student ? `<span class="prod-student-badge">🎓 Talaba</span>` : ''}
      </div>
      <div class="prod-body">
        <div class="prod-brand">${p.brand}</div>
        <div class="prod-name">${p.name}</div>
        <div class="prod-rating">
          <span class="stars">${'⭐'.repeat(Math.floor(p.rating))}</span>
          <span>${p.rating} (${p.reviews})</span>
        </div>
        <div class="prod-footer">
          <div>
            <div class="prod-price">${fmt(p.price)}</div>
            ${p.old ? `<div class="prod-old">${fmt(p.old)}</div>` : ''}
          </div>
          <button class="prod-add" onclick="addById(event,${p.id})" title="Savatchaga qo'shish">+</button>
        </div>
      </div>
    </div>`;
}

// ════════════════════════════════════════════════
// SEARCH
// ════════════════════════════════════════════════

function nsSearch() {
  const v = document.getElementById('nsInput').value.trim();
  if (!v) return;
  sQ = v; sCatF = '';
  goPage('search'); runSearch();
}
function nsSearch2() {
  const v = document.getElementById('drawerSearch').value.trim();
  if (!v) return;
  sQ = v; sCatF = '';
  goPage('search'); runSearch();
  toggleDrawer();
}
function hsSearch() {
  const v = document.getElementById('hsInput').value.trim();
  if (!v) return;
  sQ = v; sCatF = '';
  goPage('search'); runSearch();
}
function qsSearch() {
  sQ = document.getElementById('qsInput').value.trim();
  sCatF = document.getElementById('qsCat').value;
  goPage('search'); runSearch();
}
function mobQsSearch() {
  const v = document.getElementById('mobQsInput')?.value.trim();
  if (!v) return;
  sQ = v; sCatF = '';
  goPage('search'); runSearch();
}
function sCat(cat) {
  sCatF = cat; sQ = '';
  goPage('search'); runSearch();
}

function runSearch() {
  let res = [...PRODS];
  const bcrumb = document.getElementById('sBcrumb');

  // Text filter
  if (sQ) {
    const q = sQ.toLowerCase();
    res = res.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.cat.toLowerCase().includes(q)
    );
    if (bcrumb) bcrumb.textContent = `"${sQ}" natijalari`;
  }

  // Category filter
  if (sCatF) {
    res = res.filter(p => p.cat === sCatF);
    if (bcrumb && !sQ) bcrumb.textContent = sCatF;
  }

  if (!sQ && !sCatF && bcrumb) bcrumb.textContent = 'Katalog';

  // Price filter
  const pMinEl = document.getElementById('pMin');
  const pMaxEl = document.getElementById('pMax');
  const pMin = parseInt(pMinEl?.value) || 0;
  const pMax = parseInt(pMaxEl?.value) || Infinity;
  res = res.filter(p => p.price >= pMin && p.price <= pMax);

  // Sort
  const sortSel = document.getElementById('sortSel');
  const s = sortSel?.value || 'pop';
  if (s === 'cheap') res.sort((a, b) => a.price - b.price);
  else if (s === 'exp') res.sort((a, b) => b.price - a.price);
  else if (s === 'rating') res.sort((a, b) => b.rating - a.rating);

  // Result count
  const rCount = document.getElementById('rCount');
  if (rCount) rCount.textContent = res.length;

  // Render grid
  const grid = document.getElementById('searchGrid');
  if (grid) {
    grid.innerHTML = res.length
      ? res.map(pCard).join('')
      : `<div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:var(--muted)">
          <div style="font-size:56px;margin-bottom:14px">🔍</div>
          <p style="font-size:16px;font-weight:600;margin-bottom:8px">Mahsulot topilmadi</p>
          <p>Boshqa so'z bilan qidiring yoki kategoriya tanlang.</p>
        </div>`;
  }

  // Category filter checkboxes
  const fCats = document.getElementById('fCats');
  if (fCats) {
    const cats = [...new Set(PRODS.map(p => p.cat))];
    fCats.innerHTML = cats.map(c =>
      `<li><input type="checkbox" ${sCatF === c ? 'checked' : ''} onchange="togCF('${c}',this.checked)"> ${c}</li>`
    ).join('');
  }

  // Brand filter checkboxes
  const fBrands = document.getElementById('fBrands');
  if (fBrands) {
    const brands = [...new Set(PRODS.map(p => p.brand))];
    fBrands.innerHTML = brands.slice(0, 8).map(b =>
      `<li><input type="checkbox"> ${b}</li>`
    ).join('');
  }

  // Cat pills
  const pillsEl = document.getElementById('catPills');
  if (pillsEl) {
    const cats = [...new Set(PRODS.map(p => p.cat))];
    pillsEl.innerHTML = `<div class="cat-pill ${!sCatF ? 'active' : ''}" onclick="sCat2('')">Barchasi</div>` +
      cats.map(c => `<div class="cat-pill ${sCatF === c ? 'active' : ''}" onclick="sCat2('${c}')">${c}</div>`).join('');
  }
}

function togCF(c, on) { sCatF = on ? c : ''; runSearch(); }
function sCat2(c) { sCatF = c; runSearch(); }

// ════════════════════════════════════════════════
// PRODUCT DETAIL
// ════════════════════════════════════════════════

function openDetail(id) {
  const p = PRODS.find(x => x.id === id);
  if (!p) return;
  curProd = p; curQty = 1;

  const set = (elId, val) => { const el = document.getElementById(elId); if (el) el.textContent = val; };
  const setHTML = (elId, val) => { const el = document.getElementById(elId); if (el) el.innerHTML = val; };

  set('dCatCr', p.cat);
  set('dNameCr', p.name.slice(0, 28) + (p.name.length > 28 ? '...' : ''));
  set('dVendor', p.brand);
  set('dName', p.name);
  set('dPrice', fmt(p.price));
  set('dOld', p.old ? fmt(p.old) : '');
  // Main image
  const mainImgEl = document.getElementById('dMainImg');
  if (mainImgEl) {
    if (p.img) {
      mainImgEl.innerHTML = `<img src="${p.img}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;border-radius:var(--r-lg)">`;
    } else {
      mainImgEl.textContent = p.icon;
    }
  }
  set('qVal', 1);

  const starsEl = document.getElementById('dStars');
  if (starsEl) starsEl.innerHTML = `${'⭐'.repeat(Math.floor(p.rating))} <span style="color:var(--muted);font-size:13px">${p.rating} (${p.reviews} sharh)</span>`;

  setHTML('dBadges', `
    <span class="dbadge dbadge-g">✅ Sertifikatlangan</span>
    <span class="dbadge dbadge-b">🚚 Tezkor yetkazish</span>
    ${p.old ? '<span class="dbadge dbadge-o">💰 Chegirma</span>' : ''}
    ${p.student ? '<span class="dbadge" style="background:#eff6ff;color:#0652DD;border:1px solid #bfdbfe">🎓 Talaba chegirmasi</span>' : ''}
  `);

  set('dDesc', p.desc);

  const specTbl = document.getElementById('specTbl');
  if (specTbl) {
    specTbl.innerHTML = Object.entries(p.specs)
      .map(([k, v]) => `<tr><td>${k.replace(/_/g, ' ')}</td><td>${v}</td></tr>`).join('');
  }

  const thumbsEl = document.getElementById('dThumbs');
  if (thumbsEl) {
    const thumbImgs = p.img
      ? [`<img src="${p.img}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;border-radius:6px">`, '📦', '🏷️', '📋']
      : [p.icon, '📦', '🏷️', '📋'];
    thumbsEl.innerHTML = thumbImgs
      .map((ic, i) => `<div class="detail-thumb ${i === 0 ? 'active' : ''}" onclick="selThumb(this)">${ic}</div>`).join('');
  }

  // Show save badge
  if (p.old) {
    const pct = Math.round((1 - p.price / p.old) * 100);
    const saveEl = document.getElementById('dSave');
    if (saveEl) { saveEl.textContent = `−${pct}%`; saveEl.style.display = 'inline-block'; }
  } else {
    const saveEl = document.getElementById('dSave');
    if (saveEl) saveEl.style.display = 'none';
  }

  goPage('detail');
}

function selThumb(el) {
  document.querySelectorAll('.detail-thumb').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
}

function chQty(d) {
  curQty = Math.max(1, curQty + d);
  const el = document.getElementById('qVal');
  if (el) el.textContent = curQty;
}

function addCurToCart() {
  if (!curProd) return;
  addToCart(curProd, curQty);
  showToast("✅ Savatchaga qo'shildi!", 'ts');
}

function buyNow() {
  if (!curProd) return;
  addToCart(curProd, curQty);
  goPage('cart');
}

// ════════════════════════════════════════════════
// CART
// ════════════════════════════════════════════════

function addToCart(p, qty = 1) {
  const existing = cart.find(i => i.id === p.id);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ ...p, qty });
  }
  updUI();
  // Badge bump animation
  ['cartBadge', 'bnavCartBadge'].forEach(id => {
    const el = document.getElementById(id);
    if (el) { el.classList.remove('bump'); void el.offsetWidth; el.classList.add('bump'); }
  });
}

function addById(e, id) {
  e.stopPropagation();
  const p = PRODS.find(x => x.id === id);
  if (!p) return;
  addToCart(p);
  const btn = e.target;
  btn.textContent = '✓';
  btn.style.background = 'var(--teal)';
  btn.style.borderColor = 'var(--teal)';
  btn.style.color = '#fff';
  setTimeout(() => {
    btn.textContent = '+';
    btn.style.background = '';
    btn.style.borderColor = '';
    btn.style.color = '';
  }, 900);
  showToast("✅ Savatchaga qo'shildi!", 'ts');
}

function updUI() {
  const total = cart.reduce((s, i) => s + i.qty, 0);
  ['cartBadge', 'bnavCartBadge'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = total;
  });
  const favBadge = document.getElementById('favBadge');
  const bnavFavBadge = document.getElementById('bnavFavBadge');
  if (favBadge) favBadge.textContent = favs.length;
  if (bnavFavBadge) bnavFavBadge.textContent = favs.length;
  if (favs.length) {
    bnavFavBadge?.classList.remove('hidden');
    const favBtn = document.getElementById('favBtn');
    if (favBtn) favBtn.style.display = 'flex';
  }
}

function renderCart() {
  const emptyEl = document.getElementById('cartEmpty');
  const contentEl = document.getElementById('cartContent');
  const listEl = document.getElementById('cartList');
  if (!emptyEl || !contentEl || !listEl) return;

  if (!cart.length) {
    emptyEl.classList.remove('hidden');
    contentEl.classList.add('hidden');
    return;
  }
  emptyEl.classList.add('hidden');
  contentEl.classList.remove('hidden');

  listEl.innerHTML = cart.map(i => `
    <div class="cart-item">
      <div class="ci-img">${i.icon}</div>
      <div class="ci-info">
        <h4>${i.name}</h4>
        <p>${i.brand}</p>
        <div style="display:flex;align-items:center;gap:8px;margin-top:8px">
          <div class="qty-ctrl" style="border-radius:8px">
            <button onclick="cQty(${i.id},-1)" style="width:32px;height:32px">−</button>
            <span style="width:36px;font-size:14px">${i.qty}</span>
            <button onclick="cQty(${i.id},1)" style="width:32px;height:32px">+</button>
          </div>
        </div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div class="ci-price">${fmt(i.price * i.qty)}</div>
        <div class="ci-old">${fmt(i.price)} × ${i.qty}</div>
      </div>
      <button class="ci-del" onclick="remCart(${i.id})" title="Olib tashlash">🗑</button>
    </div>`).join('');
  updSum();
}

function cQty(id, d) {
  const item = cart.find(x => x.id === id);
  if (item) {
    item.qty = Math.max(1, item.qty + d);
  }
  renderCart();
  updUI();
}

function remCart(id) {
  cart = cart.filter(i => i.id !== id);
  renderCart();
  updUI();
  showToast('🗑 Olib tashlandi', 'ti');
}

function updSum() {
  const sub = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const del = sub > 0 ? 20000 : 0;
  const tot = Math.max(0, sub + del - promoDis);
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('sumI', fmt(sub));
  set('sumD', fmt(del));
  set('sumDis', '−' + fmt(promoDis));
  set('sumTot', fmt(tot));
}

function applyPromo() {
  const code = document.getElementById('promoIn')?.value.trim().toUpperCase();
  const promo = PROMO_CODES[code];
  if (promo) {
    promoDis = promo.dis;
    showToast(promo.msg, 'ts');
    updSum();
  } else {
    showToast('❌ Promo kod topilmadi', 'te');
  }
}

// ════════════════════════════════════════════════
// CHECKOUT
// ════════════════════════════════════════════════

function renderCheckout() {
  const sub = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const tot = Math.max(0, sub + 20000 - promoDis);
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('coSub', fmt(sub));
  set('coTot', fmt(tot));
  set('coDis', '−' + fmt(promoDis));

  const coItems = document.getElementById('coItems');
  if (coItems) {
    coItems.innerHTML = cart.map(i =>
      `<div style="display:flex;justify-content:space-between;margin-bottom:8px;padding-bottom:8px;border-bottom:1px solid var(--border);font-size:12px">
        <span>${i.icon} ${i.name.slice(0, 22)}${i.name.length > 22 ? '...' : ''} ×${i.qty}</span>
        <b>${fmt(i.price * i.qty)}</b>
      </div>`
    ).join('');
  }
}

function selOpt(el, grp) {
  document.querySelectorAll(grp + ' .radio-opt').forEach(r => r.classList.remove('sel'));
  el.classList.add('sel');
}

function placeOrder() {
  if (!cart.length) { showToast('⚠️ Savatchangiz bo\'sh!', 'te'); return; }
  const n = document.getElementById('co_n')?.value.trim();
  const p = document.getElementById('co_p')?.value.trim();
  const a = document.getElementById('co_a')?.value.trim();
  if (!n || !p || !a) {
    showToast("⚠️ Iltimos, barcha maydonlarni to'ldiring", 'te');
    return;
  }
  const oNum = '#MF-' + Math.floor(100000 + Math.random() * 900000);
  const el = document.getElementById('oNum');
  if (el) el.textContent = oNum;
  cart = []; promoDis = 0;
  updUI();
  goPage('success');
  showToast('🎉 Buyurtma muvaffaqiyatli yuborildi!', 'ts');
}

// ════════════════════════════════════════════════
// SELLER FORM
// ════════════════════════════════════════════════

function sStep(step) {
  if (step > 1 && sStep_ === 1) {
    const co = document.getElementById('s_co')?.value.trim();
    const ph = document.getElementById('s_ph')?.value.trim();
    if (!co || !ph) {
      showToast("⚠️ Kompaniya nomi va telefonni to'ldiring", 'te');
      return;
    }
  }
  if (step > 2 && sStep_ === 2) {
    // Could add step 2 validation here
  }

  document.querySelectorAll('.form-step').forEach(s => s.classList.remove('active'));
  const stepEl = document.getElementById('fstep' + step);
  if (stepEl) stepEl.classList.add('active');

  for (let i = 1; i <= 4; i++) {
    const ci = document.getElementById('sc' + i);
    const li = document.getElementById('sl' + i);
    if (!ci || !li) continue;
    if (i < step) { ci.textContent = '✓'; ci.className = 'sbar-circle don'; li.className = 'sbar-lbl'; }
    else if (i === step) { ci.textContent = i; ci.className = 'sbar-circle act'; li.className = 'sbar-lbl act'; }
    else { ci.textContent = i; ci.className = 'sbar-circle'; li.className = 'sbar-lbl'; }

    if (i < 4) {
      const line = document.getElementById('sln' + i);
      if (line) line.className = 'sbar-line' + (i < step ? ' don' : '');
    }
  }
  sStep_ = step;
  document.getElementById('sFormCard')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function submitSeller() {
  if (!document.getElementById('ag1')?.checked || !document.getElementById('ag2')?.checked) {
    showToast("⚠️ Barcha shartlarga rozilik bildiring", 'te');
    return;
  }
  const co = document.getElementById('s_co')?.value || 'Kompaniyangiz';
  const card = document.getElementById('sFormCard');
  if (card) {
    card.innerHTML = `
      <div style="text-align:center;padding:40px 20px">
        <div style="font-size:64px;margin-bottom:16px;animation:popIn .4s ease">🎉</div>
        <h2 style="font-family:'Fraunces',serif;font-size:26px;font-weight:700;margin-bottom:10px;color:var(--slate)">Ariza qabul qilindi!</h2>
        <p style="font-size:14px;color:var(--muted);line-height:1.7;margin-bottom:24px">
          <b>${co}</b> uchun arizangiz ko'rib chiqish uchun yuborildi.<br>
          1–2 ish kuni ichida email va SMS orqali javob beramiz.
        </p>
        <div style="background:var(--teal-l);border-radius:12px;padding:16px;max-width:320px;margin:0 auto 24px;border:1px solid rgba(0,184,148,.2)">
          <div style="font-size:13px;color:var(--teal-d);font-weight:700">📧 info@muirfa.uz</div>
          <div style="font-size:13px;color:var(--teal-d);font-weight:700;margin-top:5px">📞 +998 71 200-00-00</div>
        </div>
        <div style="display:flex;flex-direction:column;gap:8px;align-items:center">
          <button class="btn-primary" style="justify-content:center" onclick="goPage('home')">Bosh sahifaga qaytish</button>
          <button class="btn-secondary" onclick="goPage('search');runSearch()" style="min-width:200px;text-align:center">Xarid qilish →</button>
        </div>
      </div>`;
  }
  showToast('✅ Ariza muvaffaqiyatli yuborildi!', 'ts');
}

// ════════════════════════════════════════════════
// AUTH MODAL
// ════════════════════════════════════════════════

function openModal(t) {
  const mContent = document.getElementById('mContent');
  if (mContent) mContent.innerHTML = t === 'login' ? loginHTML() : regHTML();
  document.getElementById('mover')?.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('mover')?.classList.remove('open');
  document.body.style.overflow = '';
}

function loginHTML() {
  return `
    <div class="modal-tabs">
      <button class="modal-tab active" onclick="swTab('login')">Kirish</button>
      <button class="modal-tab" onclick="swTab('register')">Ro'yxatdan o'tish</button>
    </div>
    <h2>Xush kelibsiz! 👋</h2>
    <div class="sub">Hisobingizga kiring</div>
    <div class="social-login">
      <button class="social-btn" onclick="showToast('Tez orada ishlaydi 🔜','ti')">📱 Telegram</button>
      <button class="social-btn" onclick="showToast('Tez orada ishlaydi 🔜','ti')">🔵 Google</button>
    </div>
    <div class="divider-or">yoki</div>
    <div class="m-field"><label>Telefon yoki Email</label><input type="text" id="ml" placeholder="+998 90 123 45 67"></div>
    <div class="m-field">
      <label>Parol</label>
      <input type="password" id="mp" placeholder="••••••••">
    </div>
    <div style="display:flex;justify-content:flex-end;margin-bottom:10px">
      <a href="#" style="font-size:12px;color:var(--teal);font-weight:600" onclick="showToast('Parolni tiklash SMS yuborildi','ts')">Parolni unutdim?</a>
    </div>
    <button class="m-btn" onclick="doLogin()">Kirish →</button>
    <div class="m-switch">Hisobingiz yo'qmi? <a onclick="swTab('register')">Ro'yxatdan o'tish</a></div>`;
}

function regHTML() {
  return `
    <div class="modal-tabs">
      <button class="modal-tab" onclick="swTab('login')">Kirish</button>
      <button class="modal-tab active" onclick="swTab('register')">Ro'yxatdan o'tish</button>
    </div>
    <h2>Hisob yarating 🚀</h2>
    <div class="sub">Bepul ro'yxatdan o'ting</div>
    <div class="m-field"><label>Ism Familiya</label><input type="text" id="mrn" placeholder="Isminggiz Familiyangiz"></div>
    <div class="m-field"><label>Telefon</label><input type="tel" id="mrp" placeholder="+998 90 123 45 67"></div>
    <div class="m-field"><label>Parol</label><input type="password" id="mrpass" placeholder="Kamida 8 belgi"></div>
    <div style="margin-bottom:12px">
      <label style="display:flex;align-items:flex-start;gap:8px;font-size:12px;color:var(--muted);cursor:pointer">
        <input type="checkbox" id="agreeTerms" style="accent-color:var(--teal);margin-top:2px">
        <span>Foydalanish shartlari va Maxfiylik siyosatiga roziman</span>
      </label>
    </div>
    <button class="m-btn" onclick="doReg()">Hisob yaratish →</button>
    <div class="m-switch">Allaqachon hisobingiz bormi? <a onclick="swTab('login')">Kirish</a></div>`;
}

function swTab(t) {
  const mContent = document.getElementById('mContent');
  if (mContent) mContent.innerHTML = t === 'login' ? loginHTML() : regHTML();
}

function doLogin() {
  const l = document.getElementById('ml')?.value.trim();
  const p = document.getElementById('mp')?.value;
  if (!l || !p) { showToast("⚠️ Barcha maydonlarni to'ldiring", 'te'); return; }
  if (p.length < 4) { showToast("⚠️ Parol juda qisqa", 'te'); return; }
  currentUser = { name: l.includes('@') ? l.split('@')[0] : l };
  closeModal();
  const loginBtn = document.getElementById('loginBtn');
  if (loginBtn) {
    loginBtn.textContent = '👤 ' + (currentUser.name.length > 10 ? currentUser.name.slice(0, 10) + '...' : currentUser.name);
    loginBtn.onclick = () => showToast('👤 Profil sahifasi tez orada!', 'ti');
  }
  showToast('✅ Muvaffaqiyatli kirdingiz!', 'ts');
}

function doReg() {
  const n = document.getElementById('mrn')?.value.trim();
  const p = document.getElementById('mrp')?.value.trim();
  const pw = document.getElementById('mrpass')?.value;
  const agree = document.getElementById('agreeTerms')?.checked;
  if (!n || !p || !pw) { showToast("⚠️ Barcha maydonlarni to'ldiring", 'te'); return; }
  if (pw.length < 8) { showToast("⚠️ Parol kamida 8 belgi bo'lishi kerak", 'te'); return; }
  if (!agree) { showToast("⚠️ Foydalanish shartlariga roziliging kerak", 'te'); return; }
  currentUser = { name: n.split(' ')[0] };
  closeModal();
  const loginBtn = document.getElementById('loginBtn');
  if (loginBtn) {
    loginBtn.textContent = '👤 ' + currentUser.name;
    loginBtn.onclick = () => showToast('👤 Profil sahifasi tez orada!', 'ti');
  }
  showToast('🎉 Xush kelibsiz, ' + currentUser.name + '!', 'ts');
}

// ════════════════════════════════════════════════
// FAVORITES
// ════════════════════════════════════════════════

function togFav(e, id) {
  e.stopPropagation();
  if (favs.includes(id)) {
    favs = favs.filter(f => f !== id);
    showToast('💔 Sevimlilardan olib tashlandi', 'ti');
  } else {
    favs.push(id);
    showToast("❤️ Sevimlilarga qo'shildi!", 'ts');
  }
  updUI();
  renderHome();
  if (document.getElementById('page-search')?.classList.contains('active')) runSearch();
  if (document.getElementById('page-fav')?.classList.contains('active')) renderFav();
}

function renderFav() {
  const favGrid = document.getElementById('favGrid');
  const favEmpty = document.getElementById('favEmpty');
  if (!favGrid) return;

  const favProds = PRODS.filter(p => favs.includes(p.id));
  if (!favProds.length) {
    if (favEmpty) favEmpty.classList.remove('hidden');
    favGrid.innerHTML = '';
    return;
  }
  if (favEmpty) favEmpty.classList.add('hidden');
  favGrid.innerHTML = favProds.map(p => pCard(p)).join('');
}

// ════════════════════════════════════════════════
// TOAST
// ════════════════════════════════════════════════

let toastTimeout = null;
function showToast(msg, type = 'ti') {
  const t = document.getElementById('toastEl');
  if (!t) return;
  if (toastTimeout) clearTimeout(toastTimeout);
  t.textContent = msg;
  t.className = `toast ${type} show`;
  toastTimeout = setTimeout(() => { t.className = 'toast'; }, 2800);
}

// ════════════════════════════════════════════════
// UTILS
// ════════════════════════════════════════════════

function fmt(n) {
  return n.toLocaleString('ru-RU') + " so'm";
}

// Helper: navigate to O'quv Materiallari category (avoids apostrophe in onclick)
function goQuv() {
  sCat("O'quv Materiallari");
}

// Phone input formatting
function formatPhone(input) {
  let val = input.value.replace(/\D/g, '');
  if (!val.startsWith('998') && val.length > 0) val = '998' + val;
  if (val.length > 12) val = val.slice(0, 12);
  let formatted = '+';
  if (val.length >= 3) formatted += val.slice(0, 3);
  if (val.length >= 5) formatted += ' ' + val.slice(3, 5);
  if (val.length >= 8) formatted += ' ' + val.slice(5, 8);
  if (val.length >= 10) formatted += ' ' + val.slice(8, 10);
  if (val.length >= 12) formatted += ' ' + val.slice(10, 12);
  input.value = formatted;
}

// ════════════════════════════════════════════════
// KEYBOARD SHORTCUTS
// ════════════════════════════════════════════════

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
    const drawer = document.getElementById('mobDrawer');
    if (drawer?.classList.contains('open')) toggleDrawer();
  }
  // Ctrl+K / Cmd+K → focus search
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    const nsInput = document.getElementById('nsInput');
    if (nsInput) { nsInput.focus(); nsInput.select(); }
  }
});

// ════════════════════════════════════════════════
// INIT
// ════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  renderHome();
  updUI();

  // Add phone formatting to phone inputs
  document.querySelectorAll('input[type="tel"]').forEach(inp => {
    inp.addEventListener('input', () => formatPhone(inp));
  });

  // Navbar search enter key
  const nsInput = document.getElementById('nsInput');
  if (nsInput) nsInput.addEventListener('keydown', e => { if (e.key === 'Enter') nsSearch(); });

  console.log('%c🏥 MUIRFA Medical Marketplace', 'font-size:18px;font-weight:bold;color:#00b894');
  console.log('%cO\'zbekiston #1 tibbiy platforma', 'color:#64788f');
});