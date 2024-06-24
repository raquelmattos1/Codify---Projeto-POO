class EscapeRooms {
    constructor(id, name, level, backgroundImage, statement, points, exercises) {
        this._id = id;
        this._name = name;
        this._level = level;
        this._backgroundImage = backgroundImage;
        this._statement = statement;
        this._points = points;
        this._exercises = exercises;
    }

    // Getters
    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get level() {
        return this._level;
    }

    get backgroundImage() {
        return this._backgroundImage;
    }

    get statement() {
        return this._statement;
    }

    get points() {
        return this._points;
    }

    get exercises() {
        return this._exercises;
    }

    // Setters
    set id(value) {
        this._id = value;
    }

    set name(value) {
        this._name = value;
    }

    set level(value) {
        this._level = value;
    }

    set backgroundImage(value) {
        this._backgroundImage = value;
    }

    set statement(value) {
        this._statement = value;
    }

    set points(value) {
        this._points = value;
    }

    set exercises(value) {
        this._exercises = value;
    }
}

//Set 3 escapeRooms
function initializeEscapeRooms() {
    let escapeRooms = JSON.parse(localStorage.getItem('escapeRooms')) || [];
    // Check if default escapeRooms already exists
    const escapeRoomsExists = escapeRooms.length > 0;

    if (!escapeRoomsExists) {
        const escapeRoom1 = new EscapeRooms(1, 'Laboratório de Inteligência Artificial', 1, '/Codify/img/background1.jpg', ' Você é um cientista preso em um laboratório de IA altamente avançado. O laboratório possui vários níveis de segurança que precisam ser superados para escapar. Cada nível está protegido por desafios de programação e lógica. Será capaz de passá-los?', 500, []);
        const escapeRoom2 = new EscapeRooms(2, 'Data Center Descontrolado', 2, '/Codify/img/background2.jpeg', 'Um vírus invadiu o principal data center de uma grande empresa de tecnologia, causando caos. Os servidores estão sobrecarregados, e o sistema de resfriamento está falhando. Você é o engenheiro encarregado de restaurar a ordem e impedir que o data center entre em colapso.', 1000, []);
        const escapeRoom3 = new EscapeRooms(3, 'Invasão ao Mainframe', 3, '/Codify/img/background3.jpeg', 'Você é um agente secreto tentando invadir o mainframe de uma organização criminosa para coletar provas. O mainframe está protegido por vários níveis de segurança digital. Terás de passar por todos eles. Está pronto?', 1500, []);

        escapeRooms.push(escapeRoom1);
        escapeRooms.push(escapeRoom2);
        escapeRooms.push(escapeRoom3);

        localStorage.setItem('escapeRooms', JSON.stringify(escapeRooms));
    }
}

initializeEscapeRooms();

//Global class
window.EscapeRooms = EscapeRooms;