/* ═══════════════════════════════════════════
   LEARN.SANESTIX — script.js
   ═══════════════════════════════════════════ */

// ── COUNTDOWN TIMER ──
(function() {
  let totalSec = 11 * 3600 + 47 * 33;
  let seats = 67;

  function pad(n) { return n < 10 ? '0' + n : '' + n; }

  function tick() {
    totalSec = Math.max(0, totalSec - 1);
    const h = Math.floor(totalSec / 3600);
    const m = Math.floor((totalSec % 3600) / 60);
    const s = totalSec % 60;
    const cdH = document.getElementById('cdH');
    const cdM = document.getElementById('cdM');
    const cdS = document.getElementById('cdS');
    if (cdH) cdH.textContent = pad(h);
    if (cdM) cdM.textContent = pad(m);
    if (cdS) cdS.textContent = pad(s);
  }
  setInterval(tick, 1000);

  // Slowly increment seats
  setInterval(function() {
    if (Math.random() > 0.4 && seats < 100) {
      seats++;
      const sc = document.getElementById('seatsCount');
      const sf = document.getElementById('seatsFill');
      if (sc) sc.textContent = seats + ' / 100';
      if (sf) sf.style.width = seats + '%';
    }
  }, 14000);
})();

// ── LIVE ACTIVITY POPUP ──
(function() {
  const pops = [
    ['Ali R.', 'Lahore', 'applied for the cohort'],
    ['Fatima N.', 'Karachi', 'just secured a seat'],
    ['Hassan M.', 'Islamabad', 'submitted their application'],
    ['Usman B.', 'Faisalabad', 'asked about the program'],
    ['Maria A.', 'Peshawar', 'applied for the cohort'],
    ['Bilal K.', 'Rawalpindi', 'just enrolled'],
    ['Sana Q.', 'Lahore', 'completed the application'],
    ['Zain A.', 'Karachi', 'asked about installments'],
  ];
  let pi = 0;

  function rotate() {
    const p = pops[pi % pops.length]; pi++;
    const ago = Math.floor(Math.random() * 9) + 1;
    const el = document.getElementById('activityText');
    if (el) {
      el.style.opacity = '0';
      setTimeout(function() {
        el.textContent = p[1] + ' — ' + p[0] + ' ' + p[2] + ' — ' + ago + ' min ago';
        el.style.opacity = '1';
      }, 300);
    }
  }

  const actEl = document.getElementById('activityText');
  if (actEl) {
    actEl.style.transition = 'opacity 0.3s';
    setInterval(rotate, 7000);
  }
})();

// ── FAQ ACCORDION ──
function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const allItems = document.querySelectorAll('.faq-item');
  allItems.forEach(function(i) {
    if (i !== item) i.classList.remove('open');
  });
  item.classList.toggle('open');
}

// ── VIDEO PLACEHOLDER CLICK → EMBED ──
// For hero video
document.addEventListener('DOMContentLoaded', function() {
  var heroPlaceholder = document.getElementById('heroPlaceholder');
  if (heroPlaceholder) {
    heroPlaceholder.addEventListener('click', function() {
      // Replace VIDEO_ID with your actual YouTube video ID
      var videoId = 'FwOTs4UxQS4';
      var wrap = document.getElementById('heroVideoWrap');
      if (wrap) {
        wrap.innerHTML = '<iframe src="https://www.youtube.com/embed/' + videoId + '?autoplay=1&rel=0&modestbranding=1" title="AI Launchpad Course Intro" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>';
      }
    });
  }
});

// For testimonial videos
function loadTestiVideo(containerId, videoId) {
  // Replace VIDEO_ID_1/2/3/4 with actual IDs when available
  var placeholderIds = { 'VIDEO_ID_1': 'qBRPqkjVTck', 'VIDEO_ID_2': 'qBRPqkjVTck', 'VIDEO_ID_3': 'qBRPqkjVTck', 'VIDEO_ID_4': 'qBRPqkjVTck' };
  var actualId = placeholderIds[videoId] || videoId;
  var container = document.getElementById(containerId);
  if (!container) return;
  // Full video for feature testimonial
  if (containerId === 'testiVid1') {
    container.innerHTML = '<iframe src="https://www.youtube.com/embed/' + actualId + '?autoplay=1&rel=0" title="Testimonial" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border-radius:20px;"></iframe>';
  } else {
    // Vertical short — expand card to portrait ratio
    container.style.display = 'block';
    container.style.padding = '0';
    container.style.paddingTop = '177.78%';
    container.style.position = 'relative';
    container.innerHTML = '<iframe src="https://www.youtube.com/embed/' + actualId + '?autoplay=1&rel=0" title="Testimonial" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border-radius:12px;border:none;"></iframe>';
  }
}

// ── STICKY BAR ──
(function() {
  var bar = document.getElementById('stickyBar');
  if (!bar) return;
  var heroHeight = 600;
  function onScroll() {
    if (window.scrollY > heroHeight) {
      bar.classList.add('visible');
    } else {
      bar.classList.remove('visible');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
})();

// ── FADE-UP ANIMATION ON SCROLL ──
(function() {
  var els = document.querySelectorAll('.week-card, .learn-card, .project-card, .tcard, .offer-item, .founder-card');
  els.forEach(function(el) { el.classList.add('fade-up'); });

  function checkVisibility() {
    var windowH = window.innerHeight;
    els.forEach(function(el) {
      var rect = el.getBoundingClientRect();
      if (rect.top < windowH - 60) {
        el.classList.add('visible');
      }
    });
  }
  window.addEventListener('scroll', checkVisibility, { passive: true });
  checkVisibility();
})();

// ── FORM SUBMIT ──
function handleApply() {
  var name = document.getElementById('fName') ? document.getElementById('fName').value.trim() : '';
  var email = document.getElementById('fEmail') ? document.getElementById('fEmail').value.trim() : '';
  var phone = document.getElementById('fPhone') ? document.getElementById('fPhone').value.trim() : '';
  var btn = document.getElementById('formSubmit');
  if (!name || !email || !phone) {
    if (btn) {
      var orig = btn.textContent;
      btn.style.background = 'linear-gradient(135deg,#ff5252,#d32f2f)';
      btn.textContent = 'Please fill in Name, Email & Phone';
      setTimeout(function() {
        btn.style.background = '';
        btn.textContent = orig;
      }, 2500);
    }
    return;
  }
  if (btn) {
    btn.textContent = 'Submitting…';
    btn.style.opacity = '0.7';
    setTimeout(function() {
      btn.textContent = '✓ Application Submitted!';
      btn.style.opacity = '1';
      btn.style.background = 'linear-gradient(135deg,#00e676,#00c853)';
      // Here you would normally send to your backend or email service
    }, 1200);
  }
}

// ── NAV HAMBURGER ──
document.addEventListener('DOMContentLoaded', function() {
  var toggle = document.getElementById('navToggle');
  var mobile = document.getElementById('navMobile');
  if (toggle && mobile) {
    toggle.addEventListener('click', function() {
      mobile.classList.toggle('open');
    });
    // Close nav when a link is clicked
    mobile.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        mobile.classList.remove('open');
      });
    });
  }
});

// ── SMOOTH SCROLL ──
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener('click', function(e) {
    var target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
