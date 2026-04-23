const currentYear = new Date().getFullYear();

const translations = {
	pt: {
		page_title: 'Autkids | Sobre Nós',
		btn_back: 'Voltar',

		// HERO
		hero_title: 'Conheça a nossa história',
		hero_subtitle: 'Somos uma equipe apaixonada por criar soluções digitais que fazem a diferença na vida de crianças autistas e suas famílias.',

		// MISSÃO
		mission_title: 'Nossa Missão',
		mission_p1: 'Desenvolver um aplicativo inovador que promova a inclusão, o aprendizado e o desenvolvimento de crianças autistas.',
		mission_p2: 'Nosso objetivo é oferecer uma experiência personalizada, segura e acessível para cada usuário.',

		impact_card_title: 'Impacto Social',
		impact_card_text: 'Buscamos transformar a comunicação e o aprendizado de crianças autistas por meio da tecnologia.',

		research_card_title: 'Base Científica',
		research_card_text: 'Nosso projeto é fundamentado em estudos e práticas voltadas ao desenvolvimento infantil e ao espectro autista.',

		// TIMELINE
		timeline_title: 'Nossa Jornada',

		tl_1_badge: 'Início',
		tl_1_title: 'Criação do Projeto',
		tl_1_desc: 'O Autkids surgiu como um projeto acadêmico com o objetivo de ajudar crianças no espectro autista a se comunicarem melhor.',

		tl_2_badge: 'Experiência',
		tl_2_title: 'Visita ao Espaço Potencial',
		tl_2_desc: 'Tivemos a oportunidade de conhecer de perto a realidade das crianças e profissionais, enriquecendo nosso projeto.',

		tl_3_badge: 'Reconhecimento',
		tl_3_title: 'Publicação Científica',
		tl_3_desc: 'O projeto foi reconhecido academicamente, reforçando sua relevância e impacto.',

		tl_4_badge: 'Conquistas',
		tl_4_title: 'Certificações',
		tl_4_desc: 'Recebemos reconhecimento por nosso trabalho e dedicação ao desenvolvimento da solução.',

		tl_5_badge: 'Evolução',
		tl_5_title: 'Desenvolvimento do Produto',
		tl_5_desc: 'Criamos protótipos e evoluímos o design focado na experiência das crianças.',

		tl_6_badge: 'Futuro',
		tl_6_title: 'Lançamento',
		tl_6_desc: 'Estamos nos preparando para levar o Autkids ao público e impactar ainda mais famílias.',

		// VALORES
		values_title: 'Nossos Valores',
		values_subtitle: 'Princípios que guiam cada decisão do time.',

		value_1_title: 'Inclusão',
		value_1_desc: 'Acreditamos que toda criança merece oportunidades iguais de desenvolvimento.',

		value_2_title: 'Empatia',
		value_2_desc: 'Colocamos as necessidades das crianças e famílias no centro de tudo.',

		value_3_title: 'Inovação',
		value_3_desc: 'Buscamos constantemente novas formas de melhorar a experiência dos usuários.',

		// EQUIPE
		team_title: 'Nossa Equipe',
		team_subtitle: 'Um time dedicado a transformar ideias em soluções reais.',

		// FOOTER
		footer_rights: `© ${currentYear} Autkids | CNPJ: 65.388.377/0001-00. Todos os direitos reservados`
	}
};

function changeLanguage(lang) {
	if (!translations[lang]) lang = 'pt';

	if (translations[lang].page_title) {
		document.title = translations[lang].page_title;
	}

	const elements = document.querySelectorAll('[data-i18n]');
	elements.forEach((element) => {
		const key = element.getAttribute('data-i18n');
		if (translations[lang][key]) {
			element.textContent = translations[lang][key];
		}
	});
}