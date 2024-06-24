class FillTheBlanksExercise {
    constructor(id, level, language, statement, sentence1, sentence2, sentence3, blank1, blank2, blank3, points, blocked) {
        this._id = id;
        this._level = level;
        this._language = language;
        this._statement = statement;
        this._sentence1 = sentence1;
        this._sentence2 = sentence2;
        this._sentence3 = sentence3;
        this._blank1 = blank1;
        this._blank2 = blank2;
        this._blank3 = blank3;
        this._points = points;
        this._blocked = blocked;
    }

    // Getters

    get id() {
        return this._id;
    }

    get level() {
        return this._level;
    }

    get language() {
        return this._language;
    }

    get statement() {
        return this._statement;
    }

    get sentence1() {
        return this._sentence1;
    }

    get sentence2() {
        return this._sentence2;
    }
    
    get sentence3() {
        return this._sentence3;
    }

    get blank1() {
        return this._blank1;
    }

    get blank2() {
        return this._blank2;
    }

    get blank3() {
        return this._blank3;
    }

    get points() {
        return this._points;
    }

    get blocked() {
        return this._blocked;
    }

    //Setters
    set id(value) {
        this._id = value;
    }

    set level(value) {
        this._level = value;
    }

    set language(value) {
        this._language = value;
    } 

    set statement(value) {
        this._statement = value;
    }

    set sentence1(value) {
        this._sentence1 = value;
    }

    set sentence2(value) {
        this._sentence2 = value;
    }

    set sentence3(value) {
        this._sentence3 = value;
    }

    set blank1(value) {
        this._blank1 = value;
    }

    set blank2(value) {
        this._blank2 = value;
    }

    set blank3(value) {
        this._blank3 = value;
    }

    set points(value) {
        this._points = value;
    }

    set blocked(value) {
        this._blocked = value;
    }

}

// set exercise
function initializeFTBExercise() {
    let ftbExercises = JSON.parse(localStorage.getItem('ftbExercises')) || [];
    let exercises = JSON.parse(localStorage.getItem('exercises')) || [];

    if (ftbExercises.length === 0) {
        const ftbNewExercise = new FillTheBlanksExercise('ftb', 2, 'JavaScript', 'Complete os espaços com os métodos apropriados do localStorage.\nPreencha os espaços em branco com as palavras corretas para que as sentenças estejam corretas.', 'O método localStorage.__________() serve para remover um item específico do armazenamento local com base em sua chave.', 'Para armazenar um novo item no localStorage, usamos o método localStorage.__________(), fornecendo uma chave e um valor.', 'O método localStorage.__________() é usado para obter o valor de um item armazenado com base em sua chave.', 'removeItem', 'setItem', 'getItem',  100, true);
        const ftbNewExercise2 = new FillTheBlanksExercise('ftb', 3, 'Python', 'Complete os espaços com os métodos apropriados da lista em Python.\nPreencha os espaços em branco com os métodos corretos para que as sentenças estejam corretas.', 'O método list.__________() é usado para adicionar um item ao final da lista.', 'Para remover o primeiro item com um valor específico da lista, usamos o método list.__________().', 'O método list.__________() é utilizado para obter o índice do primeiro item com um valor específico.', 'append', 'remove', 'index', 200, true);
        
        ftbExercises.push(ftbNewExercise);
        ftbExercises.push(ftbNewExercise2);
        exercises.push(ftbNewExercise);
        exercises.push(ftbNewExercise2);

        localStorage.setItem('ftbExercises', JSON.stringify(ftbExercises));
        localStorage.setItem('exercises', JSON.stringify(exercises));

    }
    
}

initializeFTBExercise();



window.FillTheBlanksExercise = FillTheBlanksExercise;