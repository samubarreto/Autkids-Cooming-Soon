document.addEventListener('DOMContentLoaded', () => {

  function loadSavedLanguage() {
    const savedLang = localStorage.getItem('autkids-language') || 'pt';
    document.documentElement.lang = savedLang;
    if (typeof changeLanguage === 'function') {
      changeLanguage(savedLang);
    }
  }

  loadSavedLanguage();

  const langTrigger = document.getElementById('langTrigger');
  const langDropdown = document.getElementById('langDropdown');
  const currentFlag = document.getElementById('currentFlag');
  const currentLang = document.getElementById('currentLang');
  const languageOptions = document.querySelectorAll('.language-option');

  if (langTrigger && langDropdown) {
    const languages = {
      pt: { name: 'Portugues', flag: '../assets/bandeiras/brasil.png' },
      en: { name: 'English', flag: '../assets/bandeiras/eua.png' },
      es: { name: 'Espanol', flag: '../assets/bandeiras/espanha.png' }
    };

    const languageLabels = {
      pt: { pt: 'Português', en: 'Inglês', es: 'Espanhol' },
      en: { pt: 'Portuguese', en: 'English', es: 'Spanish' },
      es: { pt: 'Portugués', en: 'Inglés', es: 'Español' }
    };

    function applyLanguage(lang) {
      if (!languages[lang]) return;

      currentFlag.src = languages[lang].flag;
      currentLang.textContent = languageLabels[lang][lang];

      languageOptions.forEach(opt => {
        const optionLang = opt.dataset.lang;
        const optionLabel = languageLabels[lang][optionLang];
        const labelElement = opt.querySelector('span');
        if (labelElement && optionLabel) {
          labelElement.textContent = optionLabel;
        }
      });

      languageOptions.forEach((opt) => {
        opt.classList.toggle('active', opt.dataset.lang === lang);
      });

      localStorage.setItem('autkids-language', lang);
      document.documentElement.lang = lang;

      if (typeof changeLanguage === 'function') {
        changeLanguage(lang);
      }
    }

    const savedLang = localStorage.getItem('autkids-language') || 'pt';
    applyLanguage(savedLang);

    langTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      langTrigger.classList.toggle('active');
      langDropdown.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.language-selector') && !e.target.closest('.language-dropdown')) {
        langTrigger.classList.remove('active');
        langDropdown.classList.remove('active');
      }
    });

    languageOptions.forEach((option) => {
      option.addEventListener('click', () => {
        applyLanguage(option.dataset.lang);
        langTrigger.classList.remove('active');
        langDropdown.classList.remove('active');
      });
    });
  }

  const revealItems = document.querySelectorAll('.reveal');
  if (revealItems.length) {
    const observer = new IntersectionObserver((entries, io) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    revealItems.forEach((item) => observer.observe(item));
  }

  const timelineRows = document.querySelectorAll('.timeline-row');
  if (timelineRows.length) {
    timelineRows.forEach((row, index) => {
      row.classList.add('timeline-step');
      row.style.transitionDelay = `${Math.min(index * 70, 280)}ms`;
    });

    const timelineObserver = new IntersectionObserver((entries, io) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.25, rootMargin: '0px 0px -10% 0px' });

    timelineRows.forEach((row) => timelineObserver.observe(row));
  }

  const timelineCarousels = document.querySelectorAll('[data-carousel]');
  if (timelineCarousels.length) {
    timelineCarousels.forEach((carousel) => {
      const slides = Array.from(carousel.querySelectorAll('.timeline-media-slide'));
      const dots = Array.from(carousel.querySelectorAll('.timeline-carousel-dot'));
      let activeIndex = 0;
      let touchStartX = 0;
      let touchDeltaX = 0;
      let autoplayTimer = null;
      const AUTOPLAY_DELAY = 3000;

      if (!slides.length) {
        return;
      }

      if (dots.length) {
        dots.forEach((dot, index) => {
          dot.style.display = index < slides.length ? '' : 'none';
        });
      }

      const renderSlide = (index) => {
        activeIndex = (index + slides.length) % slides.length;

        slides.forEach((slide, i) => {
          slide.classList.toggle('is-active', i === activeIndex);
        });

        dots.forEach((dot, i) => {
          dot.classList.toggle('is-active', i === activeIndex);
        });
      };

      const stopAutoplay = () => {
        if (autoplayTimer) {
          clearInterval(autoplayTimer);
          autoplayTimer = null;
        }
      };

      const startAutoplay = () => {
        stopAutoplay();
        if (slides.length < 2) return;

        autoplayTimer = setInterval(() => {
          renderSlide(activeIndex + 1);
        }, AUTOPLAY_DELAY);
      };

      dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
          renderSlide(index);
          startAutoplay();
        });
      });

      carousel.addEventListener('touchstart', (event) => {
        touchStartX = event.changedTouches[0].clientX;
        touchDeltaX = 0;
      }, { passive: true });

      carousel.addEventListener('touchmove', (event) => {
        touchDeltaX = event.changedTouches[0].clientX - touchStartX;
      }, { passive: true });

      carousel.addEventListener('touchend', (event) => {
        const touchEndX = event.changedTouches[0].clientX;
        const deltaX = touchEndX - touchStartX;
        touchDeltaX = deltaX;

        if (Math.abs(deltaX) < 40) return;

        if (deltaX > 0) {
          renderSlide(activeIndex - 1);
        } else {
          renderSlide(activeIndex + 1);
        }

        startAutoplay();
      }, { passive: true });

      slides.forEach((slide) => {
        slide.addEventListener('click', (event) => {
          if (Math.abs(touchDeltaX) >= 40) {
            event.preventDefault();
            touchDeltaX = 0;
          }
        });
      });

      carousel.addEventListener('mouseenter', stopAutoplay);
      carousel.addEventListener('mouseleave', startAutoplay);

      renderSlide(0);
      startAutoplay();
    });
  }
});

