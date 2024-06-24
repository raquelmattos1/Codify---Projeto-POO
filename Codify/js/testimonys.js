class Testimonys {
    constructor(name, image, subtitle, text) {
        this._name = name;
        this._image = image;
        this._subtitle = subtitle;
        this._text = text;
    }

    // Getters
    get name() {
        return this._name;
    }

    get image() {
        return this._image;
    }

    get subtitle() {
        return this._subtitle;
    }

    get text() {
        return this._text;
    }

    // Setters
    set name(value) {
        this._name = value;
    }

    set image(value) {
        this._image = value;
    }

    set subtitle(value) {
        this._subtitle = value;
    }

    set text(value) {
        this._text = value;
    }
}

// Set user 'Administrador'
function initializeTestimonys() {
    let testimonys = JSON.parse(localStorage.getItem('testimonys')) || [];

    // Check if some testimony already exists
    const testimonyExists = testimonys.length > 0;

    if (!testimonyExists) {
        const newTestimony = new Testimonys(
            'Diogo Fernandes', 
            'https://www.esmad.ipp.pt/noticias/espaco-alumni-diogo-fernandes/image', 
            'Diogo Fernandes, alumnus da Licenciatura em Tecnologias e Sistemas de Informação para a Web, trabalha atualmente na Blip.',
            'Diogo Fernandes é alumnus da Licenciatura em Tecnologias e Sistemas de Informação para a Web e atualmente trabalha como Product Designer, na Blip, uma das principais empresas tecnológicas em Portugal, recentemente cotada na bolsa americana (NYSE) através da empresa-mãe, Flutter Entertainment. Trabalha na área do entretenimento, mais propriamente em produtos de apostas desportivas.\nComo Product Designer, colabora diariamente com equipas interdisciplinares, de maneira a converter desafios e problemas únicos em soluções inovadoras, nas plataformas principais deste setor ao nível mundial - Betfair, Paddy Power, Pokerstars, Fanduel, Sky Bet, etc. O seu dia-a-dia passa por desenhar e conceber a visão e ideias/features para produtos através de User Stories, validá-las através de testes de utilizador e implementá-las em conjunto com os programadores. Destaca, igualmente, a importância do seu papel, dado que as plataformas da Blip recebem milhões de utilizadores diariamente, de todos os cantos do mundo, e movimentam milhões de euros em apostas, pelo que tem de ser minucioso na sua ação.\nDiogo refere "consigo dizer com toda a certeza que tudo começou quando entrei na licenciatura - sempre tive um gosto pela programação e em descobrir mais sobre tecnologia em geral - e TSIW deu-me todos os recursos necessários para conhecer a área por completo. Comecei inicialmente com o objetivo de seguir uma carreira em programação front-end, mas graças à vasta oferta que o curso nos dá, descobri tudo o que se passava para além do código. Com isto, descobri então o mundo de User Experience e nunca mais olhei para trás".\nO alumnus destaca a Unidade Curricular de Ergonomia Cognitiva e Design de Interação (ECDI), "que foi onde o bichinho de UI/UX despertou. As aulas eram extremamente interessantes e falavam do impacto que uma boa interface tinha na experiência do utilizador - o que dava para relacionar com os fundamentos de design também aprendidos no curso. Juntando todas as bases que TSIW me deu, mais o estágio curricular com foco em Business Intelligence, permitiu-me seguir o Mestrado em Multimédia (FEUP), publicando uma tese sobre o impacto de UI e Storytelling em Data Visualization, bem como iniciar a minha carreira profissional através de um estágio na Blip, empresa onde sempre sonhei trabalhar. Até ao momento, continuo na Blip, como Product Designer, e extremamente feliz com a minha posição atual. Nunca me esqueço do que aprendi com TSIW, os meus colegas, professores e a ESMAD!"'
        );
        
        testimonys.push(newTestimony);
        localStorage.setItem('testimonys', JSON.stringify(testimonys));
    }
    console.log(testimonys);
}

initializeTestimonys();

// Global class
window.Testimonys = Testimonys;
