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
      pt: { name: 'Português', flag: '../assets/brasil.png'   },
      en: { name: 'English',   flag: '../assets/eua.png'      },
      es: { name: 'Español',   flag: '../assets/espanha.png'  }
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

    // Aplica o idioma salvo
    const savedLang = localStorage.getItem('autkids-language') || 'pt';
    applyLanguage(savedLang);

    // Toggle dropdown
    langTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      langTrigger.classList.toggle('active');
      langDropdown.classList.toggle('active');
    });

    // Fechar ao clicar fora
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.language-selector') && !e.target.closest('.language-dropdown')) {
        langTrigger.classList.remove('active');
        langDropdown.classList.remove('active');
      }
    });

    // Selecionar idioma
    languageOptions.forEach(option => {
      option.addEventListener('click', () => {
        applyLanguage(option.dataset.lang);
        langTrigger.classList.remove('active');
        langDropdown.classList.remove('active');
      });
    });
  }

  /* ============================================================
      3. ACORDEÃO (PERGUNTAS E RESPOSTAS) — CORRIGIDO
  ============================================================ */
  const questions = document.querySelectorAll('.faq-question');

  questions.forEach(question => {
    question.addEventListener('click', () => {
      const isActive = question.classList.contains('active');

      // Fecha todos os outros
      questions.forEach(q => {
        q.classList.remove('active');
        const ans = q.nextElementSibling;
        ans.style.maxHeight = null;
        ans.style.paddingTop = '0';
        ans.style.paddingBottom = '0'; // CORRIGIDO: remove padding inferior também
      });

      // Abre o clicado (se não estava aberto)
      if (!isActive) {
        question.classList.add('active');
        const answer = question.nextElementSibling;
        answer.style.maxHeight = answer.scrollHeight + 'px';
        answer.style.paddingTop = '';    // restaura padding do CSS
        answer.style.paddingBottom = ''; // restaura padding do CSS
      }
    });
  });

});