
const currentYear = new Date().getFullYear();

const translations = {
  pt: {
    page_title: "Autikids | Termos de Uso",
    btn_back: "Voltar",
    terms_title: "Termos de Uso",
    last_update: "Última atualização:",
    sec_1_title: "1. Aceitação dos Termos",
    sec_1_text: "Ao baixar, instalar ou utilizar o aplicativo Autikids, você concorda em cumprir estes Termos de Uso. Se você não concordar com algum destes termos, por favor, não utilize o aplicativo.",
    sec_2_title: "2. Objetivo do Aplicativo",
    sec_2_text: "O Autikids é uma ferramenta educacional de apoio desenvolvida para auxiliar no desenvolvimento da comunicação e rotina de crianças neurodivergentes. O aplicativo não substitui acompanhamento médico, terapêutico ou psicológico profissional.",
    sec_3_title: "3. Uso Responsável e Supervisão",
    sec_3_text: "Como o aplicativo é destinado ao público infantil, recomendamos fortemente que o uso seja supervisionado por pais ou responsáveis. O Autikids foi projetado para ser seguro, mas a responsabilidade pelo uso do dispositivo é dos cuidadores.",
    sec_4_title: "4. Assinaturas e Compras",
    sec_4_text: "O Autikids oferecerá versões gratuitas e pagas (Premium). As assinaturas serão renovadas automaticamente, a menos que sejam canceladas pelo menos 24 horas antes do fim do período atual nas configurações da sua conta da loja de aplicativos (Google Play ou App Store).",
    sec_5_title: "5. Propriedade Intelectual",
    sec_5_text: "Todos os direitos de design, personagens, ilustrações, áudios e códigos do Autikids são de propriedade exclusiva dos desenvolvedores. É proibida a cópia, reprodução ou engenharia reversa de qualquer parte do software.",
    sec_6_title: "6. Alterações nos Termos",
    sec_6_text: "Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor assim que publicadas nesta página ou dentro do aplicativo.",
    sec_7_title: "7. Contato",
    sec_7_text: "Para dúvidas sobre estes termos, entre em contato através do e-mail: support@autikids.app",
    footer_rights: `© ${currentYear} Autikids | Todos os direitos reservados`
  },
  en: {
    page_title: "Autikids | Terms of Use",
    btn_back: "Back",
    terms_title: "Terms of Use",
    last_update: "Last update:",
    sec_1_title: "1. Acceptance of Terms",
    sec_1_text: "By downloading, installing, or using the Autikids app, you agree to comply with these Terms of Use. If you do not agree with any of these terms, please do not use the app.",
    sec_2_title: "2. Purpose of the App",
    sec_2_text: "Autikids is a supportive educational tool designed to assist in the development of communication and routines for neurodivergent children. The app does not replace professional medical, therapeutic, or psychological guidance.",
    sec_3_title: "3. Responsible Use and Supervision",
    sec_3_text: "As the app is intended for children, we strongly recommend that its use be supervised by parents or guardians. Autikids is designed to be safe, but responsibility for device usage lies with the caregivers.",
    sec_4_title: "4. Subscriptions and Purchases",
    sec_4_text: "Autikids will offer free and paid (Premium) versions. Subscriptions will renew automatically unless canceled at least 24 hours before the end of the current period in your app store account settings (Google Play or App Store).",
    sec_5_title: "5. Intellectual Property",
    sec_5_text: "All rights to the design, characters, illustrations, audio, and code of Autikids are the exclusive property of the developers. Copying, reproduction, or reverse engineering of any part of the software is prohibited.",
    sec_6_title: "6. Changes to Terms",
    sec_6_text: "We reserve the right to modify these terms at any time. Changes will take effect as soon as they are published on this page or within the app.",
    sec_7_title: "7. Contact",
    sec_7_text: "For questions regarding these terms, please contact us via email: support@autikids.app",
    footer_rights: `© ${currentYear} Autikids | All rights reserved`
  },
  es: {
    page_title: "Autikids | Términos de Uso",
    btn_back: "Volver",
    terms_title: "Términos de Uso",
    last_update: "Última actualización:",
    sec_1_title: "1. Aceptación de los Términos",
    sec_1_text: "Al descargar, instalar o utilizar la aplicación Autikids, usted acepta cumplir con estos Términos de Uso. Si no está de acuerdo con alguno de estos términos, por favor no utilice la aplicación.",
    sec_2_title: "2. Objetivo de la Aplicación",
    sec_2_text: "Autikids es una herramienta educativa de apoyo diseñada para ayudar en el desarrollo de la comunicación y la rutina de niños neurodivergentes. La aplicación no sustituye el acompañamiento médico, terapéutico o psicológico profesional.",
    sec_3_title: "3. Uso Responsable y Supervisión",
    sec_3_text: "Como la aplicación está destinada al público infantil, recomendamos encarecidamente que su uso sea supervisado por padres o tutores. Autikids fue diseñado para ser seguro, pero la responsabilidad del uso del dispositivo recae en los cuidadores.",
    sec_4_title: "4. Suscripciones y Compras",
    sec_4_text: "Autikids ofrecerá versiones gratuitas y de pago (Premium). Las suscripciones se renovarán automáticamente a menos que se cancelen al menos 24 horas antes del final del período actual en la configuración de su cuenta de la tienda de aplicaciones (Google Play o App Store).",
    sec_5_title: "5. Propiedad Intelectual",
    sec_5_text: "Todos los derechos de diseño, personajes, ilustraciones, audios y códigos de Autikids son propiedad exclusiva de los desarrolladores. Está prohibida la copia, reproducción o ingeniería inversa de cualquier parte del software.",
    sec_6_title: "6. Cambios en los Términos",
    sec_6_text: "Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor tan pronto como se publiquen en esta página o dentro de la aplicación.",
    sec_7_title: "7. Contacto",
    sec_7_text: "Para dudas sobre estos términos, contáctenos a través del correo: support@autikids.app",
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

