// ============================================
//  DancinPie — interactivity
// ============================================

const MENU = [
  {
    emoji: "🍅",
    name: "The Classic Margherita",
    desc: "San Marzano, fior di latte, fresh basil, a thread of olive oil.",
    price: "390 ден",
    tag: "veg",
    tagLabel: "Veggie",
  },
  {
    emoji: "🌶️",
    name: "Diavola Disco",
    desc: "Spicy salami, chilli honey, mozzarella, oregano kick.",
    price: "480 ден",
    tag: "spicy",
    tagLabel: "Spicy",
  },
  {
    emoji: "🧀",
    name: "Quattro Formaggi",
    desc: "Mozzarella, gorgonzola, parmigiano, smoked scamorza.",
    price: "520 ден",
    tag: "veg",
    tagLabel: "Veggie",
  },
  {
    emoji: "🍄",
    name: "Funghi Funk",
    desc: "Roasted mushrooms, truffle cream, thyme, grana.",
    price: "510 ден",
    tag: "veg",
    tagLabel: "Veggie",
  },
  {
    emoji: "🥓",
    name: "Carbonara Twist",
    desc: "Guanciale, egg cream, pecorino, cracked black pepper.",
    price: "540 ден",
    tag: "house",
    tagLabel: "House fave",
  },
  {
    emoji: "🫒",
    name: "Mediterraneo",
    desc: "Cherry tomatoes, olives, capers, oregano, basil.",
    price: "470 ден",
    tag: "veg",
    tagLabel: "Veggie",
  },
  {
    emoji: "🌿",
    name: "Pesto Groove",
    desc: "Basil pesto, burrata, sun-dried tomato, pine nuts.",
    price: "560 ден",
    tag: "house",
    tagLabel: "House fave",
  },
  {
    emoji: "🍕",
    name: "Pepperoni Party",
    desc: "Double pepperoni, mozzarella, a little extra char.",
    price: "490 ден",
    tag: "house",
    tagLabel: "House fave",
  },
];

function renderMenu() {
  const grid = document.getElementById("menuGrid");
  if (!grid) return;
  grid.innerHTML = MENU.map((p) => `
    <article class="pizza-card">
      <div class="emoji">${p.emoji}</div>
      <h3>${p.name}</h3>
      <p class="desc">${p.desc}</p>
      <div class="row">
        <span class="price">${p.price}</span>
        <span class="tag tag--${p.tag}">${p.tagLabel}</span>
      </div>
    </article>
  `).join("");
}

// Reveal cards on scroll
function setupReveal() {
  const cards = document.querySelectorAll(".pizza-card, .visit-card, .story-text, .story-card");
  if (!("IntersectionObserver" in window)) {
    cards.forEach((c) => (c.style.opacity = 1));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          e.target.style.animation = `rise .6s cubic-bezier(.2,.7,.2,1) forwards`;
          e.target.style.animationDelay = `${(i % 4) * 0.08}s`;
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  cards.forEach((c) => {
    c.style.opacity = 0;
    c.style.transform = "translateY(20px)";
    io.observe(c);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderMenu();
  setupReveal();
  const yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();
});
