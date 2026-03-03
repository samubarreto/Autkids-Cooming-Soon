document.addEventListener('DOMContentLoaded', () => {
    // 1. Pega o idioma salvo no localStorage
    const savedLang = localStorage.getItem('autikids-language') || 'pt';
    
    // 2. Define no HTML
    document.documentElement.lang = savedLang;
    
    // 3. Aplica a tradução
    if (typeof changeLanguage === 'function') {
      changeLanguage(savedLang);
    }
});