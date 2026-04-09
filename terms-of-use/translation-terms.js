const currentYear = new Date().getFullYear();

const translations = {
  pt: {
    page_title: "Autkids | Termos de Uso",
    btn_back: "Voltar",
    terms_title: "Termos de Uso e Responsabilidade – Autkids",
    last_update: "Última atualização:",

    intro_text: "Bem-vindo ao <strong>Autkids</strong>. Ao utilizar nosso aplicativo, você (adiante denominado <strong>\"Responsável\"</strong>) declara ser maior de <strong>18 anos</strong> e representante legal da criança usuária. Nos termos do <strong>Art. 14 da LGPD</strong>, o <strong>Responsável</strong> fornece consentimento expresso para o tratamento de dados do menor de idade para as finalidades aqui descritas.",
    intro_text2: "Este documento rege o uso do aplicativo <strong>Autkids</strong>, de propriedade da empresa <strong>AUTKIDS INOVA SIMPLES (I.S.)</strong>, inscrita no <strong>CNPJ sob o nº 65.388.377/0001-05</strong>, com sede em <strong>Marília/SP</strong>.",
    intro_text3: "Leia <strong>atentamente</strong> todas as condições estabelecidas neste Termo de Uso e, caso precise de algum esclarecimento adicional, entre em contato conosco através do e-mail: <a href='mailto:suporte@autkids.com'>suporte@autkids.com</a>",

    sec_1_title: "1. Aceitação dos Termos e Elegibilidade",
    sec_1_text: "O <strong>Autkids</strong> é destinado ao uso por crianças sob a <strong>supervisão direta</strong> de seus pais ou tutores legais. Ao criar uma conta e configurar o perfil da criança, o <strong>Responsável</strong> afirma ter <strong>capacidade legal e autoridade</strong> para fornecer os dados solicitados e monitorar o uso da plataforma.",

    sec_2_title: "2. Cadastro e Proteção de Dados",
    sec_2_li1: "<strong>Acesso:</strong> O acesso inicial pode ser feito pela <strong>conta Google</strong>.",
    sec_2_li2: "<strong>Questionário Inicial:</strong> Para personalizar a experiência da criança, coletamos informações como <strong>nome</strong> e <strong>data de nascimento</strong>. O Responsável declara que as informações prestadas são verdadeiras.",
    sec_2_li3: "<strong>Consentimento para Dados Sensíveis (Saúde):</strong> Ao utilizar o Autkids, o Responsável poderá fornecer, de forma opcional, informações sobre o diagnóstico da criança, nível de suporte (1, 2 ou 3), formas de comunicação (Não-oralizada, Oralizada) e interesses específicos da criança.",
    sec_2_li4: "<strong>Finalidade:</strong> Esses dados são coletados exclusivamente para <strong>personalizar a interface</strong> (cards, cores e rotinas) e melhorar a eficácia da comunicação. O Autkids não compartilha diagnósticos com terceiros para fins comerciais.",
    sec_2_li5: "<strong>Roadmap de Desenvolvimento:</strong> O Responsável entende que perguntas sobre os interesses da criança (ex: dinossauros, carros, música) visam alimentar o roteiro de desenvolvimento do aplicativo. Essas informações ajudam a equipe do Autkids a criar novos pacotes de cards e funcionalidades que façam sentido para a comunidade.",
    sec_2_li6: "<strong>Feedback e Pesquisa:</strong> Periodicamente, o Autkids poderá enviar questionários ao Responsável para coletar feedback sobre a facilidade de uso, percepção de melhora na comunicação e sugestões de novas funcionalidades. A participação é <strong>voluntária</strong>.",
    sec_2_li7: "<strong>Segurança (PIN):</strong> O Autkids possui uma área restrita de configurações protegida por um <strong>PIN de 4 dígitos</strong>, que deve ser de conhecimento exclusivo do Responsável para evitar que a criança altere configurações ou acesse áreas administrativas.",
    sec_2_li8: "<strong>Serviços de Terceiros e Diagnósticos:</strong> Para garantir a segurança e estabilidade, o Autkids utiliza o <strong>Firebase Crashlytics</strong> para coletar relatórios de erros técnicos. A autenticação é realizada via <strong>Google Auth</strong>.",

    sec_3_title: "3. Natureza do Aplicativo (Aviso de Responsabilidade)",
    sec_3_li1: "<strong>Ferramenta de Apoio:</strong> O Autkids é uma ferramenta de suporte à comunicação e <strong>não substitui</strong> diagnósticos, tratamentos médicos, terapias ocupacionais ou acompanhamento fonoaudiológico.",
    sec_3_li2: "<strong>Resultados:</strong> O desenvolvimento da comunicação varia de criança para criança. O Autkids não garante resultados clínicos ou evoluções específicas, sendo uma interface facilitadora entre a criança e o mundo ao seu redor.",

    sec_4_title: "4. Uso das Funcionalidades",
    sec_4_li1: "<strong>Facilitação da Expressão:</strong> O aplicativo utiliza pictogramas e ilustrações autorais para permitir que a criança expresse desejos, emoções, rotinas e necessidades de forma intuitiva.",
    sec_4_li2: "<strong>Conforto Visual:</strong> Toda a interface foi desenvolvida com uma <strong>paleta de cores pensada no conforto sensorial</strong>, utilizando tons e contrastes suaves para evitar a sobrecarga visual (hipersensibilidade).",
    sec_4_li3: "<strong>Personalização:</strong> O Responsável é livre para configurar o idioma (<strong>Português, Inglês ou Espanhol</strong>) e os perfis, devendo zelar pelo conteúdo inserido.",
    sec_4_li4: "<strong>Ambiente Seguro:</strong> O app se compromete a oferecer um ambiente <strong>livre de anúncios intrusivos</strong> na área de navegação da criança para evitar distrações ou gatilhos sensoriais.",

    sec_5_title: "5. Personalização Avançada e Conteúdo do Usuário",
    sec_5_li1: "<strong>Criação de Cards Customizados:</strong> O Responsável pode criar novos cartões de comunicação utilizando fotografias de ambientes, objetos ou pessoas reais. O Responsável é o único proprietário e responsável legal pelas imagens enviadas, garantindo que possui os direitos de uso e que o conteúdo é adequado para menores.",
    sec_5_li2: "<strong>Voz Gravada:</strong> O app permite a gravação da voz do próprio Responsável para promover maior segurança emocional e familiaridade para a criança.",
    sec_5_li3: "<strong>Voz via IA:</strong> O app utiliza tecnologia de <strong>Inteligência Artificial</strong> para gerar áudio para comandos específicos. O uso desta tecnologia visa facilitar a comunicação funcional e não deve ser utilizado para fins que não sejam o suporte ao desenvolvimento da criança.",

    sec_6_title: "6. Planos, Assinaturas e Publicidade",
    sec_6_intro: "O Autkids opera sob um modelo <strong>Freemium</strong> (Gratuito com opções de Upgrade):",
    sec_6_li1: "<strong>Plano Gratuito:</strong> Permite a criação de até <strong>5 cards personalizados, 1 seção personalizada e 1 subseção personalizada</strong> e contém <strong>publicidade (anúncios)</strong> em áreas que não interfiram diretamente na segurança sensorial da criança.",
    sec_6_li2: "<strong>Planos Premium (Pagos):</strong> Oferecem limites expandidos ou ilimitados para criação de cards, maior variedade de vozes via IA e <strong>isenção de anúncios publicitários</strong>. Os valores e benefícios específicos serão detalhados na tela de <strong>\"Benefícios Premium\"</strong> no momento da contratação.",
    sec_6_li3: "<strong>Publicidade (Plano Gratuito):</strong> Os anúncios exibidos no plano gratuito são gerenciados pelo <strong>Google AdMob</strong>. O Responsável entende que o provedor de anúncios pode coletar identificadores anônimos do dispositivo para fins de exibição de publicidade, respeitando as políticas de privacidade para conteúdo infantil.",
    sec_6_li4: "<strong>Processamento de Pagamento:</strong> O pagamento dos planos premium é processado pela <strong>Apple Pay</strong> ou <strong>Google Pay</strong>. O cancelamento deve seguir as regras das respectivas plataformas.",

    sec_7_title: "7. Responsabilidade sobre o Conteúdo Inserido",
    sec_7_li1: "Não fazer upload de imagens que violem direitos de terceiros ou leis vigentes.",
    sec_7_li2: "Zelar pela segurança do <strong>PIN de acesso</strong>, uma vez que a edição de vozes, fotos e a contratação de planos são feitas através dele.",

    sec_8_title: "8. Propriedade Intelectual",
    sec_8_text: "Todo o design, ilustrações (avatares, cards de rotina, alimentos, etc.) e o código-fonte do <strong>Autkids</strong> são de <strong>propriedade exclusiva</strong> dos seus desenvolvedores. É proibida a reprodução, engenharia reversa ou venda de qualquer parte do aplicativo sem autorização prévia.",

    sec_9_title: "9. Limitação de Responsabilidade",
    sec_9_li1: "Eventuais falhas na comunicação entre a criança e o responsável.",
    sec_9_li2: "Uso indevido do aplicativo por terceiros devido ao compartilhamento do <strong>PIN</strong> ou da senha.",
    sec_9_li3: "Danos ao dispositivo móvel decorrentes do uso por parte da criança.",


    sec_10_title: "10. Alterações nos Termos",
    sec_10_text: "Reservamo-nos o direito de <strong>atualizar estes termos periodicamente</strong>. O uso continuado do app após alterações constitui aceitação dos novos termos.",

    footer_rights: `© ${currentYear} Autkids | CNPJ: 65.388.377/0001-00. Todos os direitos reservados`
  },

  en: {
    page_title: "Autkids | Terms of Use",
    btn_back: "Back",
    terms_title: "Terms of Use and Responsibility – Autkids",
    last_update: "Last update:",

    intro_text: "Welcome to <strong>Autkids</strong>. By using our app, you (hereinafter referred to as the <strong>\"Guardian\"</strong>) declare that you are over <strong>18 years old</strong> and the legal representative of the child user. Pursuant to <strong>Art. 14 of the LGPD</strong>, the <strong>Guardian</strong> provides express consent for the processing of the minor's data for the purposes described herein.",
    intro_text2: "This document governs the use of the <strong>Autkids</strong> app, owned by <strong>AUTKIDS INOVA SIMPLES (I.S.)</strong>, registered under <strong>CNPJ No. 65.388.377/0001-05</strong>, headquartered in <strong>Marília/SP, Brazil</strong>.",
    intro_text3: "Please read <strong>carefully</strong> all the conditions set forth in these Terms of Use and, if you need any additional clarification, contact us at: <a href='mailto:suporte@autkids.com'>suporte@autkids.com</a>",

    sec_1_title: "1. Acceptance of Terms and Eligibility",
    sec_1_text: "<strong>Autkids</strong> is intended for use by children under the <strong>direct supervision</strong> of their parents or legal guardians. By creating an account and setting up the child's profile, the <strong>Guardian</strong> affirms having <strong>legal capacity and authority</strong> to provide the requested data and monitor the use of the platform.",

    sec_2_title: "2. Registration and Data Protection",
    sec_2_li1: "<strong>Access:</strong> Initial access can be done via a <strong>Google account</strong>.",
    sec_2_li2: "<strong>Initial Questionnaire:</strong> To personalize the child's experience, we collect information such as <strong>name</strong> and <strong>date of birth</strong>. The Guardian declares that the information provided is truthful.",
    sec_2_li3: "<strong>Consent for Sensitive Data (Health):</strong> When using Autkids, the Guardian may optionally provide information about the child's diagnosis, support level (1, 2, or 3), communication methods (Non-verbal, Verbal), and specific interests of the child.",
    sec_2_li4: "<strong>Purpose:</strong> This data is collected exclusively to <strong>personalize the interface</strong> (cards, colors, and routines) and improve communication effectiveness. Autkids does not share diagnoses with third parties for commercial purposes.",
    sec_2_li5: "<strong>Development Roadmap:</strong> The Guardian understands that questions about the child's interests (e.g., dinosaurs, cars, music) aim to feed the app's development roadmap. This information helps the Autkids team create new card packs and features meaningful to the community.",
    sec_2_li6: "<strong>Feedback and Research:</strong> Periodically, Autkids may send questionnaires to the Guardian to collect feedback on ease of use, perceived improvement in communication, and suggestions for new features. Participation is <strong>voluntary</strong>.",
    sec_2_li7: "<strong>Security (PIN):</strong> Autkids has a restricted settings area protected by a <strong>4-digit PIN</strong>, which must be known exclusively by the Guardian to prevent the child from changing settings or accessing administrative areas.",
    sec_2_li8: "<strong>Third-Party Services and Diagnostics:</strong> To ensure security and stability, Autkids uses <strong>Firebase Crashlytics</strong> to collect technical error reports. Authentication is performed via <strong>Google Auth</strong>.",

    sec_3_title: "3. Nature of the App (Disclaimer)",
    sec_3_li1: "<strong>Support Tool:</strong> Autkids is a communication support tool and <strong>does not replace</strong> medical diagnoses, treatments, occupational therapy, or speech therapy.",
    sec_3_li2: "<strong>Results:</strong> Communication development varies from child to child. Autkids does not guarantee clinical results or specific progress, serving as a facilitating interface between the child and the world around them.",

    sec_4_title: "4. Use of Features",
    sec_4_li1: "<strong>Facilitating Expression:</strong> The app uses pictograms and original illustrations to allow the child to express desires, emotions, routines, and needs intuitively.",
    sec_4_li2: "<strong>Visual Comfort:</strong> The entire interface was developed with a <strong>color palette designed for sensory comfort</strong>, using soft tones and contrasts to avoid visual overload (hypersensitivity).",
    sec_4_li3: "<strong>Customization:</strong> The Guardian is free to configure the language (<strong>Portuguese, English, or Spanish</strong>) and profiles, and must oversee the content entered.",
    sec_4_li4: "<strong>Safe Environment:</strong> The app is committed to providing an environment <strong>free of intrusive ads</strong> in the child's navigation area to avoid distractions or sensory triggers.",

    sec_5_title: "5. Advanced Customization and User Content",
    sec_5_li1: "<strong>Custom Card Creation:</strong> The Guardian can create new communication cards using photos of environments, objects, or real people. The Guardian is the sole owner and legally responsible for the uploaded images, ensuring they hold usage rights and the content is appropriate for minors.",
    sec_5_li2: "<strong>Recorded Voice:</strong> The app allows recording the Guardian's own voice to promote greater emotional security and familiarity for the child.",
    sec_5_li3: "<strong>AI Voice:</strong> The app uses <strong>Artificial Intelligence</strong> technology to generate audio for specific commands. The use of this technology aims to facilitate functional communication and must not be used for purposes other than supporting the child's development.",

    sec_6_title: "6. Plans, Subscriptions and Advertising",
    sec_6_intro: "Autkids operates under a <strong>Freemium</strong> model (Free with Upgrade options):",
    sec_6_li1: "<strong>Free Plan:</strong> Allows the creation of up to <strong>5 custom cards, 1 custom section, and 1 custom subsection</strong> and may contain <strong>advertising (ads)</strong> in areas that do not directly interfere with the child's sensory safety.",
    sec_6_li2: "<strong>Premium Plans (Paid):</strong> Offer expanded or unlimited limits for card creation, greater variety of AI voices, and <strong>ad-free experience</strong>. Specific values and benefits will be detailed on the <strong>\"Premium Benefits\"</strong> screen at the time of purchase.",
    sec_6_li3: "<strong>Advertising (Free Plan):</strong> Ads displayed on the free plan are managed by <strong>Google AdMob</strong>. The Guardian understands that the ad provider may collect anonymous device identifiers for advertising purposes, in compliance with privacy policies for child and family-directed content.",
    sec_6_li4: "<strong>Payment Processing:</strong> Premium plan payments are processed by <strong>Apple Pay</strong> or <strong>Google Pay</strong>. Cancellation must follow the rules of the respective platforms.",

    sec_7_title: "7. Responsibility for Uploaded Content",
    sec_7_li1: "Not uploading images that violate third-party rights or applicable laws.",
    sec_7_li2: "Safeguarding the <strong>access PIN</strong>, since editing voices, photos, and purchasing plans are done through it.",

    sec_8_title: "8. Intellectual Property",
    sec_8_text: "All design, illustrations (avatars, routine cards, food items, etc.) and source code of <strong>Autkids</strong> are the <strong>exclusive property</strong> of its developers. Reproduction, reverse engineering, or sale of any part of the app without prior authorization is prohibited.",

    sec_9_title: "9. Limitation of Liability",
    sec_9_li1: "Any communication failures between the child and the guardian.",
    sec_9_li2: "Misuse of the app by third parties due to sharing of the <strong>PIN</strong> or password.",
    sec_9_li3: "Damage to the mobile device resulting from use by the child.",


    sec_10_title: "10. Changes to the Terms",
    sec_10_text: "We reserve the right to <strong>update these terms periodically</strong>. Continued use of the app after changes constitutes acceptance of the new terms.",

    footer_rights: `© ${currentYear} Autkids | CNPJ: 65.388.377/0001-00. All rights reserved`
  },

  es: {
    page_title: "Autkids | Términos de Uso",
    btn_back: "Volver",
    terms_title: "Términos de Uso y Responsabilidad – Autkids",
    last_update: "Última actualización:",

    intro_text: "Bienvenido a <strong>Autkids</strong>. Al utilizar nuestra aplicación, usted (en adelante denominado <strong>\"Responsable\"</strong>) declara ser mayor de <strong>18 años</strong> y representante legal del niño usuario. En virtud del <strong>Art. 14 de la LGPD</strong>, el <strong>Responsable</strong> proporciona consentimiento expreso para el tratamiento de datos del menor de edad para los fines aquí descritos.",
    intro_text2: "Este documento rige el uso de la aplicación <strong>Autkids</strong>, propiedad de la empresa <strong>AUTKIDS INOVA SIMPLES (I.S.)</strong>, inscrita en el <strong>CNPJ bajo el nº 65.388.377/0001-05</strong>, con sede en <strong>Marília/SP, Brasil</strong>.",
    intro_text3: "Lea <strong>atentamente</strong> todas las condiciones establecidas en estos Términos de Uso y, si necesita alguna aclaración adicional, contáctenos a través del correo electrónico: <a href='mailto:suporte@autkids.com'>suporte@autkids.com</a>",

    sec_1_title: "1. Aceptación de los Términos y Elegibilidad",
    sec_1_text: "<strong>Autkids</strong> está destinado al uso por niños bajo la <strong>supervisión directa</strong> de sus padres o tutores legales. Al crear una cuenta y configurar el perfil del niño, el <strong>Responsable</strong> afirma tener <strong>capacidad legal y autoridad</strong> para proporcionar los datos solicitados y supervisar el uso de la plataforma.",

    sec_2_title: "2. Registro y Protección de Datos",
    sec_2_li1: "<strong>Acceso:</strong> El acceso inicial se puede realizar mediante una <strong>cuenta de Google</strong>.",
    sec_2_li2: "<strong>Cuestionario Inicial:</strong> Para personalizar la experiencia del niño, recopilamos información como <strong>nombre</strong> y <strong>fecha de nacimiento</strong>. El Responsable declara que la información proporcionada es verdadera.",
    sec_2_li3: "<strong>Consentimiento para Datos Sensibles (Salud):</strong> Al utilizar Autkids, el Responsable podrá proporcionar, de forma opcional, información sobre el diagnóstico del niño, nivel de apoyo (1, 2 o 3), formas de comunicación (No-oral, Oral) e intereses específicos del niño.",
    sec_2_li4: "<strong>Finalidad:</strong> Estos datos se recopilan exclusivamente para <strong>personalizar la interfaz</strong> (tarjetas, colores y rutinas) y mejorar la eficacia de la comunicación. Autkids no comparte diagnósticos con terceros con fines comerciales.",
    sec_2_li5: "<strong>Hoja de Ruta de Desarrollo:</strong> El Responsable entiende que las preguntas sobre los intereses del niño (ej: dinosaurios, coches, música) tienen como objetivo alimentar la hoja de ruta de desarrollo de la aplicación. Esta información ayuda al equipo de Autkids a crear nuevos paquetes de tarjetas y funcionalidades significativas para la comunidad.",
    sec_2_li6: "<strong>Retroalimentación e Investigación:</strong> Periódicamente, Autkids podrá enviar cuestionarios al Responsable para recopilar comentarios sobre la facilidad de uso, percepción de mejora en la comunicación y sugerencias de nuevas funcionalidades. La participación es <strong>voluntaria</strong>.",
    sec_2_li7: "<strong>Seguridad (PIN):</strong> Autkids tiene un área de configuración restringida protegida por un <strong>PIN de 4 dígitos</strong>, que debe ser de conocimiento exclusivo del Responsable para evitar que el niño cambie configuraciones o acceda a áreas administrativas.",
    sec_2_li8: "<strong>Servicios de Terceros y Diagnósticos:</strong> Para garantizar la seguridad y estabilidad, Autkids utiliza <strong>Firebase Crashlytics</strong> para recopilar informes de errores técnicos. La autenticación se realiza mediante <strong>Google Auth</strong>.",

    sec_3_title: "3. Naturaleza de la Aplicación (Aviso de Responsabilidad)",
    sec_3_li1: "<strong>Herramienta de Apoyo:</strong> Autkids es una herramienta de apoyo a la comunicación y <strong>no reemplaza</strong> diagnósticos médicos, tratamientos, terapias ocupacionales ni seguimiento fonoaudiológico.",
    sec_3_li2: "<strong>Resultados:</strong> El desarrollo de la comunicación varía de niño a niño. Autkids no garantiza resultados clínicos o evoluciones específicas, siendo una interfaz facilitadora entre el niño y el mundo que lo rodea.",

    sec_4_title: "4. Uso de las Funcionalidades",
    sec_4_li1: "<strong>Facilitación de la Expresión:</strong> La aplicación utiliza pictogramas e ilustraciones originales para permitir que el niño exprese deseos, emociones, rutinas y necesidades de forma intuitiva.",
    sec_4_li2: "<strong>Comodidad Visual:</strong> Toda la interfaz fue desarrollada con una <strong>paleta de colores pensada en el confort sensorial</strong>, utilizando tonos y contrastes suaves para evitar la sobrecarga visual (hipersensibilidad).",
    sec_4_li3: "<strong>Personalización:</strong> El Responsable es libre de configurar el idioma (<strong>Portugués, Inglés o Español</strong>) y los perfiles, debiendo velar por el contenido insertado.",
    sec_4_li4: "<strong>Entorno Seguro:</strong> La app se compromete a ofrecer un entorno <strong>libre de anuncios intrusivos</strong> en el área de navegación del niño para evitar distracciones o gatillos sensoriales.",

    sec_5_title: "5. Personalización Avanzada y Contenido del Usuario",
    sec_5_li1: "<strong>Creación de Tarjetas Personalizadas:</strong> El Responsable puede crear nuevas tarjetas de comunicación utilizando fotografías de entornos, objetos o personas reales. El Responsable es el único propietario y responsable legal de las imágenes cargadas, garantizando que posee los derechos de uso y que el contenido es apropiado para menores.",
    sec_5_li2: "<strong>Voz Grabada:</strong> La app permite grabar la voz del propio Responsable para promover mayor seguridad emocional y familiaridad para el niño.",
    sec_5_li3: "<strong>Voz mediante IA:</strong> La app utiliza tecnología de <strong>Inteligencia Artificial</strong> para generar audio para comandos específicos. El uso de esta tecnología tiene como objetivo facilitar la comunicación funcional y no debe utilizarse para fines distintos al apoyo al desarrollo del niño.",

    sec_6_title: "6. Planes, Suscripciones y Publicidad",
    sec_6_intro: "Autkids opera bajo un modelo <strong>Freemium</strong> (Gratuito con opciones de actualización):",
    sec_6_li1: "<strong>Plan Gratuito:</strong> Permite la creación de hasta <strong>5 tarjetas personalizadas, 1 sección personalizada y 1 subsección personalizada</strong> y puede contener <strong>publicidad (anuncios)</strong> en áreas que no interfieran directamente con la seguridad sensorial del niño.",
    sec_6_li2: "<strong>Planes Premium (De pago):</strong> Ofrecen límites ampliados o ilimitados para la creación de tarjetas, mayor variedad de voces mediante IA y <strong>exención de anuncios publicitarios</strong>. Los valores y beneficios específicos de cada plan serán detallados en la pantalla de <strong>\"Beneficios Premium\"</strong> en el momento de la contratación.",
    sec_6_li3: "<strong>Publicidad (Plan Gratuito):</strong> Los anuncios mostrados en el plan gratuito son gestionados por <strong>Google AdMob</strong>. El Responsable entiende que el proveedor de anuncios puede recopilar identificadores anónimos del dispositivo con fines publicitarios, respetando las políticas de privacidad para contenido infantil.",
    sec_6_li4: "<strong>Procesamiento de Pagos:</strong> El pago de los planes premium es procesado por <strong>Apple Pay</strong> o <strong>Google Pay</strong>. La cancelación debe seguir las reglas de las respectivas plataformas.",

    sec_7_title: "7. Responsabilidad sobre el Contenido Insertado",
    sec_7_li1: "No cargar imágenes que violen derechos de terceros o leyes vigentes.",
    sec_7_li2: "Velar por la seguridad del <strong>PIN de acceso</strong>, ya que la edición de voces, fotos y la contratación de planes se realizan a través de él.",

    sec_8_title: "8. Propiedad Intelectual",
    sec_8_text: "Todo el diseño, ilustraciones (avatares, tarjetas de rutina, alimentos, etc.) y el código fuente de <strong>Autkids</strong> son <strong>propiedad exclusiva</strong> de sus desarrolladores. Está prohibida la reproducción, ingeniería inversa o venta de cualquier parte de la aplicación sin autorización previa.",

    sec_9_title: "9. Limitación de Responsabilidad",
    sec_9_li1: "Eventuales fallos en la comunicación entre el niño y el responsable.",
    sec_9_li2: "Uso indebido de la aplicación por terceros debido a la divulgación del <strong>PIN</strong> o la contraseña.",
    sec_9_li3: "Daños al dispositivo móvil derivados del uso por parte del niño.",

  
    sec_10_title: "10. Cambios en los Términos",
    sec_10_text: "Nos reservamos el derecho de <strong>actualizar estos términos periódicamente</strong>. El uso continuado de la app tras los cambios constituye la aceptación de los nuevos términos.",

    footer_rights: `© ${currentYear} Autkids | CNPJ: 65.388.377/0001-00. Todos los derechos reservados`
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