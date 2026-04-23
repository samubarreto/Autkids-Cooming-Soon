/* ========================================
   PRICING — SCRIPT
======================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- CARREGAR IDIOMA SALVO ---- */
  const savedLang = localStorage.getItem('autkids-language') || 'pt';
  if (typeof changeLanguage === 'function') {
    changeLanguage(savedLang);
  }

  /* ---- FAQ ACCORDION ---- */
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  /* ---- WAITLIST FORM ---- */
  const waitlistBtn = document.getElementById('waitlistBtn');
  if (waitlistBtn) {
    waitlistBtn.addEventListener('click', submitWaitlist);
  }

  const emailInput = document.getElementById('waitlistEmail');
  if (emailInput) {
    emailInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') submitWaitlist();
    });
  }

});

function submitWaitlist() {
  const emailInput = document.getElementById('waitlistEmail');
  const form      = document.getElementById('waitlistForm');
  const success   = document.getElementById('waitlistSuccess');

  if (!emailInput || !form || !success) return;

  const email = emailInput.value.trim();

  if (!email || !email.includes('@') || !email.includes('.')) {
    emailInput.focus();
    emailInput.style.borderColor = '#e53935';
    emailInput.style.animation = 'shake 0.3s ease';
    setTimeout(() => {
      emailInput.style.borderColor = '';
      emailInput.style.animation = '';
    }, 1500);
    return;
  }

  form.style.display = 'none';
  success.style.display = 'flex';
}