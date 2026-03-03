const currentYear = new Date().getFullYear();

const translations = {
  pt: {
    page_title: "Autikids | Central de Ajuda",
    btn_back: "Voltar",
    faq_h1: "Central de Ajuda",
    faq_subtitle: "Encontre respostas rápidas para as dúvidas mais comuns 💛",
    faq_sec_about: "Sobre o aplicativo",
    faq_q_what_is: "O que é o Autikids?",
    faq_a_what_is: "O Autikids é um aplicativo criado para apoiar crianças no desenvolvimento da comunicação, rotina e habilidades sociais por meio de atividades divertidas e interativas.",
    faq_q_who_for: "Para quem o aplicativo foi desenvolvido?",
    faq_a_who_for: "Ele foi pensado especialmente para crianças que precisam de apoio extra na comunicação e rotina — incluindo crianças autistas, mas não se limita a isso.",
    faq_q_free: "O app é gratuito?",
    faq_a_free: "Sim! Uma parte essencial é gratuita. Recursos extras podem ser desbloqueados no plano mensal ou anual.",
    faq_sec_account: "Conta e Perfil",
    faq_q_create: "Como criar uma conta?",
    faq_a_create: "Basta baixar o app, tocar em 'Criar conta' e preencher os dados básicos. Em poucos segundos você já pode começar!",
    faq_q_forgot: "Esqueci minha senha. E agora?",
    faq_a_forgot: "Na tela de login, clique em 'Esqueci minha senha' e siga as instruções enviadas ao seu e-mail.",
    faq_sec_support: "Suporte",
    faq_q_contact: "Como falar com o suporte?",
    faq_a_contact: "Entre em contato pelo e-mail: <strong>support@autikids.app</strong> ou pelo Instagram <a href='https://www.instagram.com/autikids_' rel='noopener noreferrer' target='_blank'>@autikids_</a>",
    faq_q_hours: "Qual o horário de atendimento?",
    faq_a_hours: "Nosso suporte funciona de segunda a sexta, das 8h às 18h (horário de Brasília).",
    footer_rights: `© ${currentYear} Autikids | Todos os direitos reservados`
  },
  en: {
    page_title: "Autikids | Help Center",
    btn_back: "Back",
    faq_h1: "Help Center",
    faq_subtitle: "Find quick answers to common questions 💛",
    faq_sec_about: "About the App",
    faq_q_what_is: "What is Autikids?",
    faq_a_what_is: "Autikids is an app designed to support children in developing communication, routines, and social skills through fun and interactive activities.",
    faq_q_who_for: "Who was the app developed for?",
    faq_a_who_for: "It was designed especially for children who need extra support with communication and routines — including autistic children, but not limited to them.",
    faq_q_free: "Is the app free?",
    faq_a_free: "Yes! An essential part is free. Extra features can be unlocked with a monthly or annual plan.",
    
    faq_sec_account: "Account and Profile",
    faq_q_create: "How do I create an account?",
    faq_a_create: "Just download the app, tap on 'Create account', and fill in the basic details. In a few seconds, you can start!",
    faq_q_forgot: "I forgot my password. What now?",
    faq_a_forgot: "On the login screen, click 'Forgot my password' and follow the instructions sent to your email.",
    faq_sec_support: "Support",
    faq_q_contact: "How to contact support?",
    faq_a_contact: "Contact us via email: <strong>support@autikids.app</strong> or through our Instagram <a href='https://www.instagram.com/autikids_' rel='noopener noreferrer' target='_blank'>@autikids_</a>",
    faq_q_hours: "What are the support hours?",
    faq_a_hours: "Our support is available Monday to Friday, from 8 AM to 6 PM (Brasília time).",
    footer_rights: `© ${currentYear} Autikids | All rights reserved`
  },
  es: {
    page_title: "Autikids | Centro de Ayuda",
    btn_back: "Volver",
    faq_h1: "Centro de Ayuda",
    faq_subtitle: "Encuentra respuestas rápidas a preguntas comunes 💛",
    faq_sec_about: "Sobre la Aplicación",
    faq_q_what_is: "¿Qué es Autikids?",
    faq_a_what_is: "Autikids es una aplicación creada para apoyar a los niños en el desarrollo de la comunicación, rutinas y habilidades sociales mediante actividades divertidas e interactivas.",
    faq_q_who_for: "¿Para quién fue desarrollada la aplicación?",
    faq_a_who_for: "Fue pensada especialmente para niños que necesitan apoyo extra en comunicación y rutina — incluyendo niños autistas, pero no se limita a ellos.",
    faq_q_free: "¿La app es gratuita?",
    faq_a_free: "¡Sí! Una parte esencial es gratuita. Se pueden desbloquear funciones extra con el plan mensual o anual.",
    faq_sec_account: "Cuenta y Perfil",
    faq_q_create: "¿Cómo crear una cuenta?",
    faq_a_create: "Simplemente descargue la app, toque en 'Crear cuenta' y complete los datos básicos. ¡En pocos segundos ya puede comenzar!",
    faq_q_forgot: "Olvidé mi contraseña. ¿Y ahora?",
    faq_a_forgot: "En la pantalla de inicio de sesión, haga clic en 'Olvidé mi contraseña' y siga las instrucciones enviadas a su correo electrónico.",
    faq_sec_support: "Soporte",
    faq_q_contact: "¿Cómo contactar al soporte?",
    faq_a_contact: "Contáctenos por correo: <strong>support@autikids.app</strong> o por nuestro Instagram <a href='https://www.instagram.com/autikids_' rel='noopener noreferrer' target='_blank'>@autikids_</a>",
    faq_q_hours: "¿Cuál es el horario de atención?",
    faq_a_hours: "Nuestro soporte funciona de lunes a viernes, de 8h a 18h (horario de Brasilia).",
    footer_rights: `© ${currentYear} Autikids | Todos los derechos reservados`
  }
};

function changeLanguage(lang) {
  if (!translations[lang]) lang = 'pt';

  if (translations[lang]['page_title']) {
    document.title = translations[lang]['page_title'];
  }

  const elements = document.querySelectorAll('[data-i18n]');

  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang][key]) {
      element.innerHTML = translations[lang][key];
    }
  });
}