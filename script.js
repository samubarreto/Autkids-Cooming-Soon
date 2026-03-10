document.addEventListener('DOMContentLoaded', () => {
  
  /* ============================================================
      1. CARREGAR IDIOMA SALVO (TODAS AS PÁGINAS)
  ============================================================ */
  function loadSavedLanguage() {
    const savedLang = localStorage.getItem('autikids-language') || 'pt';
    
    // Atualizar atributo lang do HTML
    document.documentElement.lang = savedLang;
    
    // Chamar função de tradução (se existir)
    if(typeof changeLanguage === 'function') {
      changeLanguage(savedLang);
    }
  }

  // SEMPRE carregar idioma salvo ao iniciar qualquer página
  loadSavedLanguage();

  /* ============================================================
      2. SELETOR DE IDIOMAS (APENAS PÁGINA INICIAL)
  ============================================================ */
  const langTrigger = document.getElementById('langTrigger');
  const langDropdown = document.getElementById('langDropdown');
  const currentFlag = document.getElementById('currentFlag');
  const currentLang = document.getElementById('currentLang');
  const languageOptions = document.querySelectorAll('.language-option');

  // Só executa se o dropdown existir na página
  if(langTrigger && langDropdown) {
    
    // Configurações de idiomas
    const languages = {
      pt: {
        name: 'Português',
        flag: 'assets/brasil.png'
      },
      en: {
        name: 'English',
        flag: 'assets/eua.png'
      },
      es: {
        name: 'Español',
        flag: 'assets/espanha.png'
      }
    };

    // Função para aplicar idioma
    function applyLanguage(lang) {
      if(!languages[lang]) return;
      
      // Atualizar interface do dropdown
      currentFlag.src = languages[lang].flag;
      currentLang.textContent = languages[lang].name;
      
      // Marcar opção ativa
      languageOptions.forEach(opt => {
        if(opt.dataset.lang === lang) {
          opt.classList.add('active');
        } else {
          opt.classList.remove('active');
        }
      });
      
      // Salvar no localStorage
      localStorage.setItem('autikids-language', lang);
      
      // Atualizar atributo lang do HTML
      document.documentElement.lang = lang;
      
      // Chamar função de tradução
      if(typeof changeLanguage === 'function') {
        changeLanguage(lang);
      }
    }

    // Carregar idioma salvo no dropdown
    const savedLang = localStorage.getItem('autikids-language') || 'pt';
    applyLanguage(savedLang);

    // Toggle dropdown
    langTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      langTrigger.classList.toggle('active');
      langDropdown.classList.toggle('active');
    });

    // Fechar dropdown ao clicar fora
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.language-selector')) {
        langTrigger.classList.remove('active');
        langDropdown.classList.remove('active');
      }
    });

    // Selecionar idioma
    languageOptions.forEach(option => {
      option.addEventListener('click', () => {
        const lang = option.dataset.lang;
        
        // Aplicar idioma selecionado
        applyLanguage(lang);
        
        // Fechar dropdown
        langTrigger.classList.remove('active');
        langDropdown.classList.remove('active');
      });
    });
  }

  /* ============================================================
      3. ANIMAÇÃO DE SCROLL (SCROLL REVEAL)
  ============================================================ */
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); 
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  const elementsToAnimate = document.querySelectorAll(
    'section, .hero-left, .hero-right, .feature, .pricing-left, .pricing-right, .media-item, .testi'
  );

  elementsToAnimate.forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });

  /* ============================================================
      4. CARROSSEL DE DEPOIMENTOS
  ============================================================ */
  let currentSlide = 0;
  const slides = document.querySelectorAll('.testi-slide');
  const dots = document.querySelectorAll('.dot');
  const totalSlides = slides.length;
  let autoSlide; 

  if(slides.length > 0 && dots.length > 0) {
    
    function showSlide(index) {
      slides.forEach(slide => slide.classList.remove('active'));
      dots.forEach(dot => dot.classList.remove('active'));
      
      slides[index].classList.add('active');
      dots[index].classList.add('active');
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides;
      showSlide(currentSlide);
    }

    function goToSlide(index) {
      currentSlide = index;
      showSlide(currentSlide);
    }

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        goToSlide(index);
        clearInterval(autoSlide);
        autoSlide = setInterval(nextSlide, 4000);
      });
    });

    autoSlide = setInterval(nextSlide, 4000);

    const carousel = document.querySelector('.testimonials-carousel');
    if(carousel) {
      carousel.addEventListener('mouseenter', () => {
        clearInterval(autoSlide);
      });

      carousel.addEventListener('mouseleave', () => {
        autoSlide = setInterval(nextSlide, 2000);
      });
    }
  }

  /* ============================================================
      5. CAROUSEL 3D DE PERSONAGENS
  ============================================================ */
  const mockupSlides = document.querySelectorAll('.mockup-slide');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const indicators = document.querySelectorAll('.carousel-indicator');
  
  let currentMockupIndex = 0;
  let autoRotateInterval;
  const totalMockupSlides = mockupSlides.length;

  // Função para calcular a posição de cada slide no carousel circular
  function getSlidePosition(slideIndex, currentIndex, total) {
    const diff = ((slideIndex - currentIndex) + total) % total;
    
    if (diff === 0) return 'center';
    if (diff === 1) return 'right-1';
    if (diff === 2) return 'right-2';
    if (diff === total - 1) return 'left-1';
    if (diff === total - 2) return 'left-2';
    return 'hidden';
  }

  // Função para atualizar as posições de todos os slides
  function updateMockupCarousel() {
    mockupSlides.forEach((slide, index) => {
      // Remove todas as classes de posição
      slide.classList.remove('center', 'right-1', 'right-2', 'left-1', 'left-2', 'hidden');
      
      // Adiciona a classe correspondente à posição atual
      const position = getSlidePosition(index, currentMockupIndex, totalMockupSlides);
      slide.classList.add(position);
    });

    // Atualiza os indicadores
    indicators.forEach((indicator, index) => {
      if (index === currentMockupIndex) {
        indicator.classList.add('active');
      } else {
        indicator.classList.remove('active');
      }
    });
  }

  // Função para ir para o próximo slide
  function nextMockup() {
    currentMockupIndex = (currentMockupIndex + 1) % totalMockupSlides;
    updateMockupCarousel();
  }

  // Função para ir para o slide anterior
  function prevMockup() {
    currentMockupIndex = (currentMockupIndex - 1 + totalMockupSlides) % totalMockupSlides;
    updateMockupCarousel();
  }

  // Função para ir para um slide específico
  function goToMockup(index) {
    currentMockupIndex = index;
    updateMockupCarousel();
  }

  // Função para iniciar a rotação automática
  function startAutoRotate() {
    autoRotateInterval = setInterval(nextMockup, 2500);
  }

  // Função para parar a rotação automática
  function stopAutoRotate() {
    clearInterval(autoRotateInterval);
  }

  // Se houver slides de mockup, inicia o carrossel
  if (mockupSlides.length > 0) {
    // Inicializa o carousel
    updateMockupCarousel();
    
    // Inicia a rotação automática
    startAutoRotate();

    // Event listeners para os botões de navegação
    if (prevBtn && nextBtn) {
      prevBtn.addEventListener('click', () => {
        prevMockup();
        stopAutoRotate();
        startAutoRotate(); // Reinicia o timer
      });

      nextBtn.addEventListener('click', () => {
        nextMockup();
        stopAutoRotate();
        startAutoRotate(); // Reinicia o timer
      });
    }

    // Event listeners para os indicadores
    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
        goToMockup(index);
        stopAutoRotate();
        startAutoRotate(); // Reinicia o timer
      });
    });

    // Event listeners para os próprios slides (clique para navegar)
    mockupSlides.forEach((slide, index) => {
      slide.addEventListener('click', () => {
        if (index !== currentMockupIndex) {
          goToMockup(index);
          stopAutoRotate();
          startAutoRotate(); // Reinicia o timer
        }
      });
    });

    // Pausa a rotação quando o mouse está sobre o carousel
    const mockupCarousel = document.querySelector('.mockup-carousel');
    const carouselControls = document.querySelector('.carousel-controls');
    
    // if (mockupCarousel) {
    //   mockupCarousel.addEventListener('mouseenter', stopAutoRotate);
    //   mockupCarousel.addEventListener('mouseleave', startAutoRotate);
    // }
    
    // if (carouselControls) {
    //   carouselControls.addEventListener('mouseenter', stopAutoRotate);
    //   carouselControls.addEventListener('mouseleave', startAutoRotate);
    // }

    // Suporte a navegação por teclado (acessibilidade)
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        prevMockup();
        stopAutoRotate();
        startAutoRotate();
      } else if (e.key === 'ArrowRight') {
        nextMockup();
        stopAutoRotate();
        startAutoRotate();
      }
    });
  }
  
});
/* ============================================================
    6. CARROSSEL DE MÍDIA
============================================================ */
(function() {
  const track = document.querySelector('.media-carousel-track');
  const prevBtn = document.querySelector('.media-prev-btn');
  const nextBtn = document.querySelector('.media-next-btn');
  const dotsContainer = document.querySelector('.media-carousel-dots');

  if (!track) return;

  const cards = Array.from(track.querySelectorAll('.media-card'));
  let currentIndex = 0;

  function getVisible() {
    if (window.innerWidth <= 580) return 1;
    if (window.innerWidth <= 900) return 2;
    return 3;
  }

  function maxIndex() {
    return Math.max(0, cards.length - getVisible());
  }

  function getCardWidth() {
    const gap = window.innerWidth <= 580 ? 16 : 24;
    return cards[0].offsetWidth + gap;
  }

  function updateTrack() {
    const offset = currentIndex * getCardWidth();
    track.style.transform = `translateX(-${offset}px)`;
    updateDots();
    updateButtons();
  }

  function updateButtons() {
    if (prevBtn) prevBtn.disabled = currentIndex === 0;
    if (nextBtn) nextBtn.disabled = currentIndex >= maxIndex();
  }

  function buildDots() {
    dotsContainer.innerHTML = '';
    const total = maxIndex() + 1;
    for (let i = 0; i < total; i++) {
      const dot = document.createElement('button');
      dot.className = 'media-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', `Ir para item ${i + 1}`);
      dot.addEventListener('click', () => { currentIndex = i; updateTrack(); });
      dotsContainer.appendChild(dot);
    }
  }

  function updateDots() {
    const dots = dotsContainer.querySelectorAll('.media-dot');
    dots.forEach((d, i) => d.classList.toggle('active', i === currentIndex));
  }

  if (prevBtn) prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) { currentIndex--; updateTrack(); }
  });

  if (nextBtn) nextBtn.addEventListener('click', () => {
    if (currentIndex < maxIndex()) { currentIndex++; updateTrack(); }
  });

  // Recalcula ao redimensionar
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      currentIndex = Math.min(currentIndex, maxIndex());
      buildDots();
      updateTrack();
    }, 150);
  });

  buildDots();
  updateTrack();
})();