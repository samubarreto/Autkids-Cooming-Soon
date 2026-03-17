document.addEventListener('DOMContentLoaded', () => {

  /* ============================================================
      1. CARREGAR IDIOMA SALVO
  ============================================================ */
  function loadSavedLanguage() {
    const savedLang = localStorage.getItem('autkids-language') || 'pt';
    document.documentElement.lang = savedLang;
    if (typeof changeLanguage === 'function') {
      changeLanguage(savedLang);
    }
  }

  loadSavedLanguage();

  /* ============================================================
      2. SELETOR DE IDIOMAS
  ============================================================ */
  const langTrigger = document.getElementById('langTrigger');
  const langDropdown = document.getElementById('langDropdown');
  const currentFlag = document.getElementById('currentFlag');
  const currentLang = document.getElementById('currentLang');
  const languageOptions = document.querySelectorAll('.language-option');

  if (langTrigger && langDropdown) {

    const languages = {
      pt: { name: 'Português', flag: '../assets/brasil.png'  },
      en: { name: 'English',   flag: '../assets/eua.png'     },
      es: { name: 'Español',   flag: '../assets/espanha.png' }
    };

    function applyLanguage(lang) {
      if (!languages[lang]) return;

      currentFlag.src = languages[lang].flag;
      currentLang.textContent = languages[lang].name;

      languageOptions.forEach(opt => {
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

    languageOptions.forEach(option => {
      option.addEventListener('click', () => {
        applyLanguage(option.dataset.lang);
        langTrigger.classList.remove('active');
        langDropdown.classList.remove('active');
      });
    });
  }

});