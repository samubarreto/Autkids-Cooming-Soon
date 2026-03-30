const currentYear = new Date().getFullYear();

const translations = {
  pt: {
    page_title: "Autkids | Política de Privacidade",
    btn_back: "Voltar",
    privacy_title: "Política de Privacidade e Proteção de Dados do Autkids",
    last_update: "Última atualização:",

    sec_1_title: "1. Sobre esta Política",
    sec_1_text: "Esta Política aplica-se ao uso do aplicativo Autkids em qualquer dispositivo. O Autkids é uma ferramenta projetada para auxiliar na comunicação e desenvolvimento de crianças com TEA. A segurança e a conformidade de dados são pilares fundamentais da nossa operação.",

    sec_2_title: "2. Direitos e Controles dos Seus Dados",
    sec_2_text: "Garantimos a você, como titular ou responsável legal, o controle total sobre seus dados e os da criança assistida, nos termos do art. 11, inciso I da LGPD (Lei Geral de Proteção de Dados). No Autkids, você tem direito a:",
    sec_2_li1: "<strong>Retificação:</strong> Corrigir diagnósticos ou informações de perfil a qualquer momento.",
    sec_2_li2: "<strong>Exclusão:</strong> Solicitar ou excluir a remoção definitiva de perfis e mídias associadas.",

    sec_3_title: "3. Dados Pessoais que Coletamos",
    sec_3_text: "Coletamos apenas o estritamente necessário para que o Autkids funcione com excelência. Dividimos a coleta em categorias para maior transparência:",
    sec_3_1_title: "3.1. Dados do Responsável (Usuário)",
    sec_3_1_li1: "Informações de cadastro (Nome, e-mail, país).",
    sec_3_1_li2: "Dados de pagamento e faturamento.",
    sec_3_2_title: "3.2. Dados da Criança e Conteúdo",
    sec_3_2_text: "O Autkids permite que o responsável personalize a experiência, coletando:",
    sec_3_2_li1: "<strong>Dados de Perfil:</strong> Nome, idade, nível de suporte e diagnóstico da criança.",
    sec_3_2_li2: "<strong>Fotos de Ambientes e Lugares:</strong> Para criação de rotinas visuais e PECS (Sistema de Comunicação por Troca de Figuras).",
    sec_3_2_li3: "<strong>Áudios:</strong> Gravações de voz para auxiliar na associação sonora e comunicação verbal.",
    sec_3_3_title: "3.3. Dados de Uso Técnico",
    sec_3_3_li1: "<strong>Endereço IP:</strong> Coletado para fins de segurança, prevenção a fraudes e identificação da origem do acesso.",
    sec_3_3_li2: "<strong>Registros de Eventos (Logs):</strong> Quando ocorre um erro técnico, registramos informações sobre o estado do aplicativo no momento da falha, agilizando a solução e melhorando a estabilidade geral da plataforma.",

    sec_4_title: "4. Finalidade do Uso dos Dados",
    sec_4_text: "Utilizamos seus dados exclusivamente para as finalidades descritas abaixo, com base legal prevista na LGPD:",
    table_col_1: "Finalidade",
    table_col_2: "Base Legal",
    table_col_3: "Categorias de Dados",
    table_row_1_col_1: "Prestação do Serviço e Gestão da Conta",
    table_row_1_col_2: "Art. 7º, V da LGPD (Execução de Contrato)",
    table_row_1_col_3: "Dados do Usuário e Perfil da Criança.",
    table_row_2_col_1: "Personalização Terapêutica (Mídias e Saúde)",
    table_row_2_col_2: "Art. 11, I da LGPD (Consentimento de Dados Sensíveis) e Art. 14 da LGPD (Melhor interesse do menor)",
    table_row_2_col_3: "Fotos, Áudios, Diagnósticos e Nível de Suporte.",
    table_row_3_col_1: "Segurança e Prevenção de Fraude",
    table_row_3_col_2: "Art. 7º, IX da LGPD (Interesse Legítimo)",
    table_row_3_col_3: "Dados técnicos, IP e logs de uso.",
    table_row_4_col_1: "Cumprimento de Leis e Obrigações Fiscais",
    table_row_4_col_2: "Art. 7º, II da LGPD (Obrigação Legal)",
    table_row_4_col_3: "Dados fiscais e registros de acesso (Marco Civil).",
    table_row_5_col_1: "Defesa em Processos Judiciais",
    table_row_5_col_2: "Art. 7º, VI da LGPD e Art. 11, II, \"d\" da LGPD",
    table_row_5_col_3: "Todos os dados necessários para defesa.",
    table_row_6_col_1: "Tratamento de Dados de Crianças e Adolescentes",
    table_row_6_col_2: "Art. 14 da LGPD (Consentimento em destaque fornecido pelo responsável)",
    table_row_6_col_3: "Nome, idade, foto, vídeos e registros de evolução pedagógica ou terapêutica.",

    sec_5_title: "5. Compartilhamento de Dados",
    sec_5_text: "O Autkids <strong>não comercializa</strong> dados pessoais. O compartilhamento ocorre apenas com:",
    sec_5_li1: "<strong>Provedores de Nuvem:</strong> Armazenamento criptografado.",
    sec_5_li2: "<strong>Parceiros Técnicos:</strong> Serviços de autenticação e análise de estabilidade.",
    sec_5_li3: "<strong>Autoridades:</strong> Quando houver ordem judicial ou risco iminente à segurança da criança.",

    sec_6_title: "6. Proteção e Retenção de Dados",
    sec_6_text: "Implementamos segurança de nível bancário:",
    sec_6_li1: "<strong>Criptografia de Mídia:</strong> Fotos e áudios são criptografados tanto em trânsito quanto em repouso.",
    sec_6_li2: "<strong>Retenção:</strong> Mantemos seus dados enquanto você for um usuário ativo. Após o cancelamento da conta, os dados poderão ser armazenados por até <strong>5 (cinco) anos</strong> para fins de auditoria, defesa em processos judiciais ou cumprimento de obrigações fiscais, sendo eliminados ou anonimizados após esse prazo.",

    sec_7_title: "7. Mudanças nesta Política",
    sec_7_text: "Podemos atualizar este documento à medida que lançamos novas funcionalidades. A mudança na política de privacidade e dados do aplicativo será sinalizada por um aviso no aplicativo ou e-mail, indicando atualização na forma como a plataforma coleta, armazena, utiliza ou compartilha suas informações pessoais.",

    sec_8_title: "8. Como Entrar em Contato",
    sec_8_text: "Se tiver dúvidas sobre o aplicativo, como tratamos as fotos, áudios ou dados de saúde do seu filho, entre em contato com nosso Encarregado de Proteção de Dados (DPO):",
    sec_8_li1: "<strong>E-mail:</strong> <a href='mailto:dpo@autkids.com'>dpo@autkids.com</a>",
    sec_8_li2: "<strong>Endereço:</strong> Avenida Doutor Hercules Galletti, 260, Bloco 29, AP103 — Marília/SP",

    footer_rights: `© ${currentYear} Autkids | Todos os direitos reservados`
  },

  en: {
    page_title: "Autkids | Privacy Policy",
    btn_back: "Back",
    privacy_title: "Privacy and Data Protection Policy of Autkids",
    last_update: "Last update:",

    sec_1_title: "1. About this Policy",
    sec_1_text: "This Policy applies to the use of the Autkids app on any device. Autkids is a tool designed to support communication and development in children with ASD. Data security and compliance are fundamental pillars of our operation.",

    sec_2_title: "2. Your Data Rights and Controls",
    sec_2_text: "We guarantee you, as the data subject or legal guardian, full control over your data and the assisted child's data, pursuant to Art. 11, item I of the LGPD (Brazilian General Data Protection Law). At Autkids, you have the right to:",
    sec_2_li1: "<strong>Rectification:</strong> Correct diagnoses or profile information at any time.",
    sec_2_li2: "<strong>Deletion:</strong> Request the permanent removal of profiles and associated media.",

    sec_3_title: "3. Personal Data We Collect",
    sec_3_text: "We collect only what is strictly necessary for Autkids to function excellently. We divide data collection into categories for greater transparency:",
    sec_3_1_title: "3.1. Guardian Data (User)",
    sec_3_1_li1: "Registration information (Name, email, country).",
    sec_3_1_li2: "Payment and billing data.",
    sec_3_2_title: "3.2. Child Data and Content",
    sec_3_2_text: "Autkids allows the guardian to personalize the experience by collecting:",
    sec_3_2_li1: "<strong>Profile Data:</strong> Name, age, support level, and the child's diagnosis.",
    sec_3_2_li2: "<strong>Environment and Place Photos:</strong> For creating visual routines and PECS (Picture Exchange Communication System).",
    sec_3_2_li3: "<strong>Audio:</strong> Voice recordings to assist with sound association and verbal communication.",
    sec_3_3_title: "3.3. Technical Usage Data",
    sec_3_3_li1: "<strong>IP Address:</strong> Collected for security purposes, fraud prevention, and identifying the origin of access.",
    sec_3_3_li2: "<strong>Event Logs:</strong> When a technical error occurs, we record information about the app's state at the time of the failure, speeding up resolution and improving overall platform stability.",

    sec_4_title: "4. Purpose of Data Use",
    sec_4_text: "We use your data exclusively for the purposes described below, with a legal basis set forth in the LGPD:",
    table_col_1: "Purpose",
    table_col_2: "Legal Basis",
    table_col_3: "Data Categories",
    table_row_1_col_1: "Service Provision and Account Management",
    table_row_1_col_2: "Art. 7, V of the LGPD (Contract Performance)",
    table_row_1_col_3: "User Data and Child Profile.",
    table_row_2_col_1: "Therapeutic Personalization (Media and Health)",
    table_row_2_col_2: "Art. 11, I of the LGPD (Consent for Sensitive Data) and Art. 14 of the LGPD (Best interests of the minor)",
    table_row_2_col_3: "Photos, Audio, Diagnoses, and Support Level.",
    table_row_3_col_1: "Security and Fraud Prevention",
    table_row_3_col_2: "Art. 7, IX of the LGPD (Legitimate Interest)",
    table_row_3_col_3: "Technical data, IP, and usage logs.",
    table_row_4_col_1: "Compliance with Laws and Tax Obligations",
    table_row_4_col_2: "Art. 7, II of the LGPD (Legal Obligation)",
    table_row_4_col_3: "Tax data and access logs (Marco Civil).",
    table_row_5_col_1: "Defense in Legal Proceedings",
    table_row_5_col_2: "Art. 7, VI of the LGPD and Art. 11, II, \"d\" of the LGPD",
    table_row_5_col_3: "All data necessary for defense.",
    table_row_6_col_1: "Processing of Children's and Adolescents' Data",
    table_row_6_col_2: "Art. 14 of the LGPD (Highlighted consent provided by the guardian)",
    table_row_6_col_3: "Name, age, photo, videos, and pedagogical or therapeutic progress records.",

    sec_5_title: "5. Data Sharing",
    sec_5_text: "Autkids <strong>does not sell</strong> personal data. Sharing only occurs with:",
    sec_5_li1: "<strong>Cloud Providers:</strong> Encrypted storage.",
    sec_5_li2: "<strong>Technical Partners:</strong> Authentication and stability analysis services.",
    sec_5_li3: "<strong>Authorities:</strong> When required by court order or when there is an imminent risk to the child's safety.",

    sec_6_title: "6. Data Protection and Retention",
    sec_6_text: "We implement bank-level security:",
    sec_6_li1: "<strong>Media Encryption:</strong> Photos and audio are encrypted both in transit and at rest.",
    sec_6_li2: "<strong>Retention:</strong> We retain your data while you are an active user. After account cancellation, data may be stored for up to <strong>5 (five) years</strong> for auditing, legal defense, or tax compliance purposes, after which it will be deleted or anonymized.",

    sec_7_title: "7. Changes to this Policy",
    sec_7_text: "We may update this document as we launch new features. Any change to the app's privacy and data policy will be communicated via an in-app notice or email, indicating updates to how the platform collects, stores, uses, or shares your personal information.",

    sec_8_title: "8. How to Contact Us",
    sec_8_text: "If you have questions about the app, how we handle your child's photos, audio, or health data, please contact our Data Protection Officer (DPO):",
    sec_8_li1: "<strong>Email:</strong> <a href='mailto:dpo@autkids.com'>dpo@autkids.com</a>",
    sec_8_li2: "<strong>Address:</strong> Avenida Doutor Hercules Galletti, 260, Bloco 29, AP103 — Marília/SP, Brazil",

    footer_rights: `© ${currentYear} Autkids | All rights reserved`
  },

  es: {
    page_title: "Autkids | Política de Privacidad",
    btn_back: "Volver",
    privacy_title: "Política de Privacidad y Protección de Datos del Autkids",
    last_update: "Última actualización:",

    sec_1_title: "1. Sobre esta Política",
    sec_1_text: "Esta Política se aplica al uso de la aplicación Autkids en cualquier dispositivo. Autkids es una herramienta diseñada para apoyar la comunicación y el desarrollo de niños con TEA. La seguridad y el cumplimiento de datos son pilares fundamentales de nuestra operación.",

    sec_2_title: "2. Sus Derechos y Control de Datos",
    sec_2_text: "Le garantizamos, como titular o responsable legal, el control total sobre sus datos y los del niño asistido, conforme al art. 11, inciso I de la LGPD (Ley General de Protección de Datos de Brasil). En Autkids, usted tiene derecho a:",
    sec_2_li1: "<strong>Rectificación:</strong> Corregir diagnósticos o información de perfil en cualquier momento.",
    sec_2_li2: "<strong>Eliminación:</strong> Solicitar la eliminación definitiva de perfiles y medios asociados.",

    sec_3_title: "3. Datos Personales que Recopilamos",
    sec_3_text: "Recopilamos únicamente lo estrictamente necesario para que Autkids funcione con excelencia. Dividimos la recopilación en categorías para mayor transparencia:",
    sec_3_1_title: "3.1. Datos del Responsable (Usuario)",
    sec_3_1_li1: "Información de registro (Nombre, correo electrónico, país).",
    sec_3_1_li2: "Datos de pago y facturación.",
    sec_3_2_title: "3.2. Datos del Niño y Contenido",
    sec_3_2_text: "Autkids permite al responsable personalizar la experiencia, recopilando:",
    sec_3_2_li1: "<strong>Datos de Perfil:</strong> Nombre, edad, nivel de apoyo y diagnóstico del niño.",
    sec_3_2_li2: "<strong>Fotos de Entornos y Lugares:</strong> Para la creación de rutinas visuales y PECS (Sistema de Comunicación por Intercambio de Imágenes).",
    sec_3_2_li3: "<strong>Audios:</strong> Grabaciones de voz para auxiliar en la asociación sonora y comunicación verbal.",
    sec_3_3_title: "3.3. Datos de Uso Técnico",
    sec_3_3_li1: "<strong>Dirección IP:</strong> Recopilada con fines de seguridad, prevención de fraudes e identificación del origen del acceso.",
    sec_3_3_li2: "<strong>Registros de Eventos (Logs):</strong> Cuando ocurre un error técnico, registramos información sobre el estado de la aplicación en el momento del fallo, agilizando la solución y mejorando la estabilidad general de la plataforma.",

    sec_4_title: "4. Finalidad del Uso de los Datos",
    sec_4_text: "Utilizamos sus datos exclusivamente para los fines descritos a continuación, con base legal prevista en la LGPD:",
    table_col_1: "Finalidad",
    table_col_2: "Base Legal",
    table_col_3: "Categorías de Datos",
    table_row_1_col_1: "Prestación del Servicio y Gestión de la Cuenta",
    table_row_1_col_2: "Art. 7º, V de la LGPD (Ejecución de Contrato)",
    table_row_1_col_3: "Datos del Usuario y Perfil del Niño.",
    table_row_2_col_1: "Personalización Terapéutica (Medios y Salud)",
    table_row_2_col_2: "Art. 11, I de la LGPD (Consentimiento de Datos Sensibles) y Art. 14 de la LGPD (Mejor interés del menor)",
    table_row_2_col_3: "Fotos, Audios, Diagnósticos y Nivel de Apoyo.",
    table_row_3_col_1: "Seguridad y Prevención de Fraude",
    table_row_3_col_2: "Art. 7º, IX de la LGPD (Interés Legítimo)",
    table_row_3_col_3: "Datos técnicos, IP y registros de uso.",
    table_row_4_col_1: "Cumplimiento de Leyes y Obligaciones Fiscales",
    table_row_4_col_2: "Art. 7º, II de la LGPD (Obligación Legal)",
    table_row_4_col_3: "Datos fiscales y registros de acceso (Marco Civil).",
    table_row_5_col_1: "Defensa en Procesos Judiciales",
    table_row_5_col_2: "Art. 7º, VI de la LGPD y Art. 11, II, \"d\" de la LGPD",
    table_row_5_col_3: "Todos los datos necesarios para la defensa.",
    table_row_6_col_1: "Tratamiento de Datos de Niños y Adolescentes",
    table_row_6_col_2: "Art. 14 de la LGPD (Consentimiento destacado proporcionado por el responsable)",
    table_row_6_col_3: "Nombre, edad, foto, videos y registros de evolución pedagógica o terapéutica.",

    sec_5_title: "5. Compartir Datos",
    sec_5_text: "Autkids <strong>no comercializa</strong> datos personales. El compartir ocurre únicamente con:",
    sec_5_li1: "<strong>Proveedores de Nube:</strong> Almacenamiento cifrado.",
    sec_5_li2: "<strong>Socios Técnicos:</strong> Servicios de autenticación y análisis de estabilidad.",
    sec_5_li3: "<strong>Autoridades:</strong> Cuando exista orden judicial o riesgo inminente para la seguridad del niño.",

    sec_6_title: "6. Protección y Retención de Datos",
    sec_6_text: "Implementamos seguridad de nivel bancario:",
    sec_6_li1: "<strong>Cifrado de Medios:</strong> Las fotos y audios están cifrados tanto en tránsito como en reposo.",
    sec_6_li2: "<strong>Retención:</strong> Conservamos sus datos mientras sea un usuario activo. Después de la cancelación de la cuenta, los datos podrán almacenarse hasta <strong>5 (cinco) años</strong> para auditoría, defensa en procesos judiciales o cumplimiento de obligaciones fiscales, siendo eliminados o anonimizados tras ese plazo.",

    sec_7_title: "7. Cambios en esta Política",
    sec_7_text: "Podemos actualizar este documento a medida que lanzamos nuevas funcionalidades. El cambio en la política de privacidad y datos de la aplicación será señalado por un aviso en la aplicación o correo electrónico, indicando actualización en la forma en que la plataforma recopila, almacena, utiliza o comparte su información personal.",

    sec_8_title: "8. Cómo Contactarnos",
    sec_8_text: "Si tiene preguntas sobre la aplicación, cómo tratamos las fotos, audios o datos de salud de su hijo, póngase en contacto con nuestro Responsable de Protección de Datos (DPO):",
    sec_8_li1: "<strong>Correo:</strong> <a href='mailto:dpo@autkids.com'>dpo@autkids.com</a>",
    sec_8_li2: "<strong>Dirección:</strong> Avenida Doutor Hercules Galletti, 260, Bloco 29, AP103 — Marília/SP, Brasil",

    footer_rights: `© ${currentYear} Autkids | Todos los derechos reservados`
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