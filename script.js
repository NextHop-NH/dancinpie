// ============================================================
//  Dancin' Pie — vanilla interactions + i18n (EN / MK)
//  Mobile nav · filter tabs · Solo/Sharable toggle · language toggle
// ============================================================
(function () {
  // ---------- i18n dictionary ----------
  var I18N = {
    en: {
      "meta.title": "Dancin' Pie — Detroit & Tavern Style Pizza",
      "meta.desc": "Dancin' Pie — Detroit & Tavern style pizza made with 48-hour cold-proofed dough and cheese all the way to the corner. Thick crispy-edged squares and snappy tavern thins in Detroit, MI.",
      "nav.styles": "Our Styles", "nav.menu": "The Menu", "nav.locations": "Locations", "nav.order": "Order Now",
      "hero.eyebrow": "Detroit & Tavern Style",
      "hero.h1": 'Order on Wolt or eat fresh at <span class="pop">Groovelyn</span>.',
      "hero.sub": "Thick, crispy-edged Detroit squares and snappy tavern thins — fresh dough every morning, cheese all the way to the corner.",
      "hero.cta1": "See the Menu", "hero.cta2": "Find a Spot",
      "hero.stat1": "48hr", "hero.stat1l": "Cold-proofed dough", "hero.stat2l": "Iconic styles", "hero.stat3l": "Crispy corners",
      "mq.1": "Fresh Dough Daily", "mq.2": "Crispy Cheese Edges", "mq.3": "Party-Cut Squares", "mq.4": "Hot Honey On Request", "mq.5": "Cold-Proofed 48 Hours",
      "styles.kicker": "Two ways to dance", "styles.h2": "Square or thin. You can't lose.",
      "styles.p": "Every pie starts with our 48-hour cold-proofed dough. Then it goes one of two beautiful directions.",
      "sc1.tag": "The thick one", "sc1.h3": "Detroit Square",
      "sc1.p": "Baked in a seasoned blue-steel pan so the cheese caramelizes against the wall into a lacy, crunchy frico edge. Airy, focaccia-soft middle. Sauce racing-striped over the top.",
      "sc1.m1": "Pan-baked", "sc1.m2": "Crispy edges", "sc1.m3": "8 corners",
      "sc2.tag": "The crispy one", "sc2.h3": "Tavern Thin",
      "sc2.p": "Rolled cracker-thin, loaded edge to edge, then party-cut into little squares — the Midwest tavern way. Snappy, shareable, impossible to stop eating.",
      "sc2.m1": "Cracker-thin", "sc2.m2": "Edge-to-edge", "sc2.m3": "Party cut",
      "menu.kicker": "The Menu", "menu.h2": "Pick your pie",
      "menu.p": 'Detroit squares and tavern thins, fired fresh to order.',
      "tab.all": "All Pies", "tab.detroit": "Detroit Square", "tab.tavern": "Tavern Thin", "tab.veg": "Plant-Based",
      "size.personal": "Personal", "size.square": "Square", "size.party": "Party",
      "size.personal_s": "1 person", "size.square_s": "1–2 people", "size.party_s": "6–8 people",
      "pz1.badge": "Fan Fave", "pz1.desc": "Wisconsin brick cheese carried all the way to the crispy edge, a double stack of pepperoni, and three bold stripes of San Marzano sauce over the top.", "pz1.ing": "Brick cheese · double pepperoni · red-top sauce",
      "pz2.desc": "Just cheese, done right. Brick and low-moisture mozz baked into a lacquered frico wall, finished with a garlic-butter rim.", "pz2.ing": "Brick + mozzarella · frico edge · garlic butter",
      "pz3.badge": "Spicy", "pz3.desc": "Cup-and-char pepperoni that crisps into little grease cups, a lazy drizzle of hot honey, and a flick of calabrian chili. A little swagger.", "pz3.ing": "Cup pepperoni · hot honey · calabrian chili",
      "pz4.badge": "Loaded", "pz4.desc": "The whole crew shows up: pepperoni, fennel sausage, bell peppers, red onion, cremini mushroom, and a scatter of black olive.", "pz4.ing": "Pepperoni · sausage · peppers · onion · mushroom",
      "pz5.badge": "Party Cut", "pz5.desc": "Cracker-thin and edge-to-edge: fennel sausage and cremini mushroom over a snappy crust, party-cut into little squares.", "pz5.ing": "Thin crust · sausage · mushroom",
      "pz6.badge": "Spicy", "pz6.desc": "Chicago-style hot giardiniera and spicy soppressata over mozzarella on a snappy thin crust. Bright, crunchy, hot.", "pz6.ing": "Soppressata · hot giardiniera · mozzarella",
      "pz7.desc": "Garlic cream base, dollops of whipped ricotta, mozzarella, then a tangle of lemon-dressed arugula tossed on after the bake.", "pz7.ing": "Garlic cream · ricotta · arugula",
      "pz8.badge": "Veggie", "pz8.desc": "Fresh mozzarella, San Marzano, torn basil and a swirl of good olive oil over a tavern-thin crust. Clean and classic.", "pz8.ing": "Fresh mozz · basil · San Marzano",
      "pz9.badge": "Vegan", "pz9.desc": "Roasted squash, charred broccolini and red onion over vegan mozz on a Detroit square, finished with chili oil.", "pz9.ing": "Vegan mozz · roasted veg · chili oil",
      "menu.nopies": "No pies in that style yet — check back soon!",
      "loc.kicker": "Come dance with us", "loc.h2": "Find your pie",
      "loc.p": "Dine in, carry out, or order ahead. Slices fly — we recommend calling first on game nights.",
      "loc.name": "Skopje", "loc.addr": "Mariovska, Skopje 1000",
      "loc.d1": "Mon – Thu", "loc.d2": "Fri – Sat", "loc.d3": "Sunday", "loc.open": "Open till 9p", "loc.order": "Order Pickup",
      "foot.blurb": "Detroit & Tavern style pizza, made with 48-hour dough and cheese all the way to the corner.",
      "foot.visit": "Visit", "foot.hungry": "Hungry?", "foot.catering": "Catering & Parties", "foot.gift": "Gift Cards",
      "foot.l_order": "Order Pickup", "foot.l_menu": "See the Menu", "foot.l_styles": "Our Styles", "foot.l_top": "Back to Top",
      "foot.rights": "© 2026 Dancin' Pie. All rights reserved.", "foot.made": "Made fresh in Skopje, North Macedonia.",
    },
    mk: {
      "meta.title": "Dancin' Pie — Пица во детроит и таверна стил",
      "meta.desc": "Dancin' Pie — пица во детроит и таверна стил, со тесто ладно ферментирано 48 часа и сирење дури до ќошот. Дебели квадрати со крцкави рабови и тенки таверна пици во Детроит.",
      "nav.styles": "Стилови", "nav.menu": "Мени", "nav.locations": "Локации", "nav.order": "Нарачај",
      "hero.eyebrow": "Детроит и таверна стил",
      "hero.h1": 'Нарачај на Wolt или јади свежо во <span class="pop">Groovelyn</span>.',
      "hero.sub": "Дебели детроит квадрати со крцкави рабови и тенки крцкави таверна пици — свежо тесто секое утро и сирење дури до ќошот.",
      "hero.cta1": "Види го менито", "hero.cta2": "Најди локација",
      "hero.stat1": "48ч", "hero.stat1l": "Ладно ферментирано тесто", "hero.stat2l": "Култни стилови", "hero.stat3l": "Крцкави ќошиња",
      "mq.1": "Свежо тесто секој ден", "mq.2": "Крцкави рабови од сирење", "mq.3": "Квадрати на парче", "mq.4": "Лут мед по желба", "mq.5": "Ладна ферментација 48 часа",
      "styles.kicker": "Два начина да заиграш", "styles.h2": "Квадрат или тенка. Не можеш да погрешиш.",
      "styles.p": "Секоја пица почнува со нашето тесто, ладно ферментирано 48 часа. Потоа оди во една од двете прекрасни насоки.",
      "sc1.tag": "Дебелата", "sc1.h3": "Детроит квадрат",
      "sc1.p": "Печена во челичен сад за да карамелизира сирењето по рабовите во крцкава фрико кора. Воздушеста, фокача-мека средина. Сос во ленти преку врвот.",
      "sc1.m1": "Печена во сад", "sc1.m2": "Крцкави рабови", "sc1.m3": "8 ќошиња",
      "sc2.tag": "Крцкавата", "sc2.h3": "Тенка таверна",
      "sc2.p": "Развлечена тенко како крекер, натоварена од раб до раб, па исечена на мали квадрати — на начинот на средно-западните таверни. Крцкава, за делење, не можеш да застанеш.",
      "sc2.m1": "Тенка како крекер", "sc2.m2": "Од раб до раб", "sc2.m3": "Сечена на квадрати",
      "menu.kicker": "Менито", "menu.h2": "Избери ја твојата пица",
      "menu.p": 'Детроит квадрати и тенки таверна пици, печени свежо по нарачка.',
      "tab.all": "Сите пици", "tab.detroit": "Детроит квадрат", "tab.tavern": "Тенка таверна", "tab.veg": "Постни",
      "size.personal": "Лична", "size.square": "Квадрат", "size.party": "Парти",
      "size.personal_s": "1 лице", "size.square_s": "1–2 лица", "size.party_s": "6–8 лица",
      "pz1.badge": "Хит", "pz1.desc": "Висконсин брик сирење сè до крцкавиот раб, двоен слој пеперони и три смели ленти сос Сан Марцано преку врвот.", "pz1.ing": "Брик сирење · двојна пеперони · сос одозгора",
      "pz2.desc": "Само сирење, како што треба. Брик и моцарела печени во сјајна фрико кора, завршена со раб од лук и путер.", "pz2.ing": "Брик + моцарела · фрико раб · лук путер",
      "pz3.badge": "Луто", "pz3.desc": "Пеперони што се крцка во мали чашички, лежерно полеана со лут мед и малку калабриски чили. Со малку став.", "pz3.ing": "Чашеста пеперони · лут мед · калабриски чили",
      "pz4.badge": "Полна", "pz4.desc": "Целата екипа е тука: пеперони, колбас со морач, пиперки, црвен кромид, печурки и црни маслинки.", "pz4.ing": "Пеперони · колбас · пиперки · кромид · печурки",
      "pz5.badge": "Парти рез", "pz5.desc": "Тенка како крекер и од раб до раб: колбас со морач и печурки врз крцкава кора, сечена на мали квадрати.", "pz5.ing": "Тенка кора · колбас · печурки",
      "pz6.badge": "Луто", "pz6.desc": "Чикаго-стил лута џардинера и лута сопресата врз моцарела на тенка крцкава кора. Свежо, крцкаво, луто.", "pz6.ing": "Сопресата · лута џардинера · моцарела",
      "pz7.desc": "База од лук крем, грутки матена рикота, моцарела, па рукола со лимон додадена по печењето.", "pz7.ing": "Лук крем · рикота · рукола",
      "pz8.badge": "Вегетаријанска", "pz8.desc": "Свежа моцарела, Сан Марцано, искинат босилек и капка добро маслиново масло на тенка таверна кора. Чисто и класично.", "pz8.ing": "Свежа моцарела · босилек · Сан Марцано",
      "pz9.badge": "Веган", "pz9.desc": "Печена тиква, печена броколини и црвен кромид врз веган моцарела на детроит квадрат, завршено со чили масло.", "pz9.ing": "Веган моцарела · печен зеленчук · чили масло",
      "menu.nopies": "Сè уште нема пици во тој стил — навратете наскоро!",
      "loc.kicker": "Дојди да заиграш со нас", "loc.h2": "Најди ја твојата пица",
      "loc.p": "Јади кај нас, земи за дома или нарачај однапред. Парчињата летаат — препорачуваме да се јавите однапред на денови со натпревари.",
      "loc.name": "Скопје", "loc.addr": "Мариовска, Скопје 1000",
      "loc.d1": "Пон – Чет", "loc.d2": "Пет – Саб", "loc.d3": "Недела", "loc.open": "Отворено до 21ч", "loc.order": "Нарачај за носење",
      "foot.blurb": "Пица во детроит и таверна стил, со тесто од 48 часа и сирење дури до ќошот.",
      "foot.visit": "Посети", "foot.hungry": "Гладен?", "foot.catering": "Кетеринг и забави", "foot.gift": "Поклон картички",
      "foot.l_order": "Нарачај за носење", "foot.l_menu": "Види го менито", "foot.l_styles": "Нашите стилови", "foot.l_top": "Кон врвот",
      "foot.rights": "© 2026 Dancin' Pie. Сите права задржани.", "foot.made": "Свежо подготвено во Скопје, Северна Македонија.",
    },
  };

  var lang = "en";
  var currentSize = "party"; // matches the default-active toggle button
  var t = function (key) { return (I18N[lang] && I18N[lang][key] != null) ? I18N[lang][key] : (I18N.en[key] != null ? I18N.en[key] : key); };

  // Prices are stored in USD (data-solo / data-share). On the MK site we show
  // denari, converted at this rate and rounded to the nearest 10. Edit to taste.
  var MKD_PER_USD = 58;
  function formatPrice(usd) {
    if (lang === 'mk') return (Math.round(usd * MKD_PER_USD / 10) * 10) + ' ден';
    return '$' + usd;
  }

  var cards = Array.prototype.slice.call(document.querySelectorAll('#menuGrid .pz'));
  var st = document.getElementById('sizeToggle');
  var knob = st && st.querySelector('.knob');

  function positionKnob() {
    if (!st || !knob) return;
    var act = st.querySelector('button.active');
    if (!act) return;
    knob.style.left = act.offsetLeft + 'px';
    knob.style.width = act.offsetWidth + 'px';
  }

  function applySize(size) {
    currentSize = size;
    cards.forEach(function (c) {
      var amt = c.querySelector('.amt'), lbl = c.querySelector('.lbl');
      if (!amt || !lbl) return;
      amt.textContent = formatPrice(Number(c.dataset[size]));
      lbl.textContent = t('size.' + size + '_s');
    });
  }

  function applyLang(next) {
    lang = I18N[next] ? next : "en";
    document.documentElement.lang = lang;
    try { localStorage.setItem('dp-lang', lang); } catch (e) {}

    document.querySelectorAll('[data-i18n]').forEach(function (el) { el.textContent = t(el.getAttribute('data-i18n')); });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) { el.innerHTML = t(el.getAttribute('data-i18n-html')); });

    document.title = t('meta.title');
    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute('content', t('meta.desc'));

    document.querySelectorAll('.lang-btn').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
    });

    applySize(currentSize); // re-localize the Solo/Sharable price labels
    positionKnob();
  }

  // ---------- mobile nav ----------
  var nav = document.querySelector('.nav');
  var burger = document.getElementById('burger');
  var navlinks = document.getElementById('navlinks');
  if (burger && nav) {
    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('nav-open');
      burger.setAttribute('aria-expanded', String(open));
    });
    navlinks.addEventListener('click', function (e) {
      // close on link tap (mobile), but not when using the language toggle
      if (e.target.tagName === 'A' && window.innerWidth <= 980) {
        nav.classList.remove('nav-open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ---------- language toggle ----------
  document.querySelectorAll('.lang-btn').forEach(function (b) {
    b.addEventListener('click', function () { applyLang(b.dataset.lang); });
  });

  // ---------- theme toggle (light / dark) ----------
  var themeBtn = document.getElementById('themeBtn');
  if (themeBtn) {
    var syncTheme = function () {
      themeBtn.setAttribute('aria-pressed', String(document.documentElement.getAttribute('data-mode') === 'dark'));
    };
    syncTheme();
    themeBtn.addEventListener('click', function () {
      var next = document.documentElement.getAttribute('data-mode') === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-mode', next);
      try { localStorage.setItem('dp-mode', next); } catch (e) {}
      syncTheme();
    });
  }

  // ---------- menu filter tabs ----------
  var tabs = document.getElementById('tabs');
  var noPies = document.getElementById('noPies');
  if (tabs) {
    tabs.addEventListener('click', function (e) {
      var b = e.target.closest('.tab');
      if (!b) return;
      tabs.querySelectorAll('.tab').forEach(function (t2) { t2.classList.toggle('active', t2 === b); });
      var f = b.dataset.filter, shown = 0;
      cards.forEach(function (c) {
        var on = (f === 'all' || c.dataset.cat === f);
        c.style.display = on ? '' : 'none';
        if (on) shown++;
      });
      if (noPies) noPies.style.display = shown ? 'none' : 'block';
    });
  }

  // ---------- size toggle (Solo / Sharable) ----------
  if (st) {
    st.addEventListener('click', function (e) {
      var b = e.target.closest('button');
      if (!b) return;
      st.querySelectorAll('button').forEach(function (x) { x.classList.toggle('active', x === b); });
      positionKnob();
      applySize(b.dataset.size);
    });
    window.addEventListener('load', positionKnob);
    window.addEventListener('resize', positionKnob);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(positionKnob);
    setTimeout(positionKnob, 60);
  }

  // ---------- init ----------
  var saved = null;
  try { saved = localStorage.getItem('dp-lang'); } catch (e) {}
  var browserMk = (navigator.language || '').toLowerCase().indexOf('mk') === 0;
  applyLang(saved || (browserMk ? 'mk' : 'en'));
})();
