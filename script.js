// ============================================================
//  Dancin' Pie — vanilla interactions
//  Mobile nav · menu filter tabs · Solo/Sharable price toggle
// ============================================================
(function () {
  // ---- mobile nav ----
  var nav = document.querySelector('.nav');
  var burger = document.getElementById('burger');
  var navlinks = document.getElementById('navlinks');
  if (burger && nav) {
    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('nav-open');
      burger.setAttribute('aria-expanded', String(open));
    });
    navlinks.addEventListener('click', function (e) {
      if (e.target.tagName === 'A' && window.innerWidth <= 980) {
        nav.classList.remove('nav-open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ---- menu filter tabs ----
  var tabs = document.getElementById('tabs');
  var cards = Array.prototype.slice.call(document.querySelectorAll('#menuGrid .pz'));
  var noPies = document.getElementById('noPies');
  if (tabs) {
    tabs.addEventListener('click', function (e) {
      var b = e.target.closest('.tab');
      if (!b) return;
      tabs.querySelectorAll('.tab').forEach(function (t) { t.classList.toggle('active', t === b); });
      var f = b.dataset.filter, shown = 0;
      cards.forEach(function (c) {
        var on = (f === 'all' || c.dataset.cat === f);
        c.style.display = on ? '' : 'none';
        if (on) shown++;
      });
      if (noPies) noPies.style.display = shown ? 'none' : 'block';
    });
  }

  // ---- size toggle (Solo / Sharable) ----
  var st = document.getElementById('sizeToggle');
  if (st) {
    var knob = st.querySelector('.knob');
    var positionKnob = function () {
      var act = st.querySelector('button.active');
      if (!act) return;
      knob.style.left = act.offsetLeft + 'px';
      knob.style.width = act.offsetWidth + 'px';
    };
    var applySize = function (size) {
      cards.forEach(function (c) {
        var amt = c.querySelector('.amt'), lbl = c.querySelector('.lbl');
        if (!amt || !lbl) return;
        amt.textContent = '$' + c.dataset[size];
        lbl.textContent = size === 'solo' ? 'Solo' : 'Sharable';
      });
    };
    st.addEventListener('click', function (e) {
      var b = e.target.closest('button');
      if (!b) return;
      st.querySelectorAll('button').forEach(function (x) { x.classList.toggle('active', x === b); });
      positionKnob();
      applySize(b.dataset.size);
    });
    window.addEventListener('load', positionKnob);
    window.addEventListener('resize', positionKnob);
    // Re-align once webfonts settle (button widths shift after Bricolage loads)
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(positionKnob);
    setTimeout(positionKnob, 60);
  }
})();
