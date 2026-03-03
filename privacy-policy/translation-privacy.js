const currentYear = new Date().getFullYear();

const translations = {
    pt: {
      page_title: "Autikids | Política de Privacidade",
      btn_back: "Voltar",
      privacy_title: "Política de Privacidade",
      last_update: "Última atualização:",
      sec_1_title: "1. Introdução",
      sec_1_text: "A sua privacidade é prioridade para o Autikids. Esta Política de Privacidade descreve como coletamos, usamos e protegemos as informações dos usuários e crianças que utilizam nosso aplicativo.",
      sec_2_title: "2. Coleta de Dados",
      sec_2_text: "Para o funcionamento básico do app, podemos coletar dados técnicos (como modelo do dispositivo e versão do sistema). Não coletamos dados pessoais de crianças sem o consentimento verificável dos pais ou responsáveis.",
      sec_3_title: "3. Uso das Informações",
      sec_3_text: "As informações coletadas são utilizadas exclusivamente para melhorar a experiência do usuário, corrigir falhas técnicas e personalizar o conteúdo educacional oferecido pelo aplicativo.",
      sec_4_title: "4. Compartilhamento",
      sec_4_text: "O Autikids não vende, aluga ou compartilha informações pessoais com terceiros para fins de marketing. Dados anônimos podem ser usados para análises de desempenho internas.",
      sec_5_title: "5. Segurança",
      sec_5_text: "Adotamos medidas de segurança técnicas e administrativas rigorosas para proteger os dados contra acesso não autorizado, alteração ou divulgação.",
      sec_6_title: "6. Direitos dos Pais",
      sec_6_text: "Os pais ou responsáveis têm o direito de revisar, solicitar a exclusão ou recusar a coleta futura de informações de seus filhos a qualquer momento, entrando em contato conosco.",
      sec_7_title: "7. Contato",
      sec_7_text: "Se tiver dúvidas sobre nossa política de privacidade, entre em contato pelo e-mail: support@autikids.app",
      footer_rights: `© ${currentYear} Autikids | Todos os direitos reservados`
    },
    en: {
      page_title: "Autikids | Privacy Policy",
      btn_back: "Back",
      privacy_title: "Privacy Policy",
      last_update: "Last update:",
      sec_1_title: "1. Introduction",
      sec_1_text: "Your privacy is a priority for Autikids. This Privacy Policy describes how we collect, use, and protect the information of users and children who use our application.",
      sec_2_title: "2. Data Collection",
      sec_2_text: "For basic app functionality, we may collect technical data (such as device model and system version). We do not collect personal data from children without verifiable parental or guardian consent.",
      sec_3_title: "3. Use of Information",
      sec_3_text: "Collected information is used exclusively to improve the user experience, fix technical issues, and personalize the educational content offered by the app.",
      sec_4_title: "4. Sharing",
      sec_4_text: "Autikids does not sell, rent, or share personal information with third parties for marketing purposes. Anonymous data may be used for internal performance analysis.",
      sec_5_title: "5. Security",
      sec_5_text: "We adopt strict technical and administrative security measures to protect data against unauthorized access, alteration, or disclosure.",
      sec_6_title: "6. Parental Rights",
      sec_6_text: "Parents or guardians have the right to review, request deletion, or refuse future collection of their children's information at any time by contacting us.",
      sec_7_title: "7. Contact",
      sec_7_text: "If you have questions about our privacy policy, contact us via email: support@autikids.app",
      footer_rights: `© ${currentYear} Autikids | All rights reserved`
    },
    es: {
      page_title: "Autikids | Política de Privacidad",
      btn_back: "Volver",
      privacy_title: "Política de Privacidad",
      last_update: "Última actualización:",
      sec_1_title: "1. Introducción",
      sec_1_text: "Su privacidad es prioridad para Autikids. Esta Política de Privacidad describe cómo recopilamos, usamos y protegemos la información de los usuarios y niños que utilizan nuestra aplicación.",
      sec_2_title: "2. Recopilación de Datos",
      sec_2_text: "Para el funcionamiento básico de la app, podemos recopilar datos técnicos (como modelo del dispositivo y versión del sistema). No recopilamos datos personales de niños sin el consentimiento verificable de los padres o tutores.",
      sec_3_title: "3. Uso de la Información",
      sec_3_text: "La información recopilada se utiliza exclusivamente para mejorar la experiencia del usuario, corregir fallas técnicas y personalizar el contenido educativo ofrecido por la aplicación.",
      sec_4_title: "4. Compartir Información",
      sec_4_text: "Autikids no vende, alquila ni comparte información personal con terceros con fines de marketing. Se pueden utilizar datos anónimos para análisis de rendimiento internos.",
      sec_5_title: "5. Seguridad",
      sec_5_text: "Adoptamos medidas de seguridad técnicas y administrativas estrictas para proteger los datos contra acceso no autorizado, alteración o divulgación.",
      sec_6_title: "6. Derechos de los Padres",
      sec_6_text: "Los padres o tutores tienen derecho a revisar, solicitar la eliminación o rechazar la recopilación futura de información de sus hijos en cualquier momento, contactándonos.",
      sec_7_title: "7. Contacto",
      sec_7_text: "Si tiene dudas sobre nuestra política de privacidad, contáctenos por correo: support@autikids.app",
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
        element.textContent = translations[lang][key];
      }
    });
  }