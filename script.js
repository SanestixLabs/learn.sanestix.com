/* ═══════════════════════════════════════════
   LEARN.SANESTIX — script.js
   ═══════════════════════════════════════════ */

// ── FAQ ACCORDION ──
function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const allItems = document.querySelectorAll('.faq-item');
  allItems.forEach(function(i) {
    if (i !== item) i.classList.remove('open');
  });
  item.classList.toggle('open');
}

// ── HERO VIDEO PLACEHOLDER CLICK → EMBED ──
document.addEventListener('DOMContentLoaded', function() {
  var heroPlaceholder = document.getElementById('heroPlaceholder');
  if (heroPlaceholder) {
    heroPlaceholder.addEventListener('click', function() {
      var videoId = 'FwOTs4UxQS4';
      var wrap = document.getElementById('heroVideoWrap');
      if (wrap) {
        wrap.innerHTML = '<iframe src="https://www.youtube.com/embed/' + videoId + '?autoplay=1&rel=0&modestbranding=1" title="AI Launchpad Course Intro" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:none;"></iframe>';
      }
    });
  }
});

// ── NAV SCROLL EFFECT ──
(function() {
  var nav = document.getElementById('nav');
  if (!nav) return;
  function onNavScroll() {
    if (window.scrollY > 20) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', onNavScroll, { passive: true });
})();

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
  var els = document.querySelectorAll('.week-card, .project-card, .testi-card, .offer-item, .founder-card');
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

// ── TESTIMONIAL VIDEO PLACEHOLDER CLICK → EMBED ──
function loadTestiVideo() {
  var videoId = 'qBRPqkjVTck';
  var embed = document.getElementById('testiVideoEmbed');
  if (embed) {
    embed.innerHTML = '<iframe src="https://www.youtube.com/embed/' + videoId + '?autoplay=1&rel=0&modestbranding=1" title="Student Testimonial" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width:100%;height:100%;border:none;display:block;"></iframe>';
  }
}
