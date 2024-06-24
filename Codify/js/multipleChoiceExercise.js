class MultipleChoiceExercise {
    constructor(id, level, language, statement, op1, op2, op3, op4, opRight, points, blocked) {
        this._id = id;
        this._level = level;
        this._language = language;
        this._statement = statement;
        this._op1 = op1;
        this._op2 = op2;
        this._op3 = op3;
        this._op4 = op4;
        this._opRight = opRight;
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


    get op1() {
        return this._op1;
    }

    get op2() {
        return this._op2;
    }

    get op3() {
        return this._op3;
    }

    get op4() {
        return this._op4;
    }

    get opRight() {
        return this._opRight;
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

    set op1(value) {
        this._op1 = value;
    }

    set op2(value) {
        this._op2 = value;
    }

    set op3(value) {
        this._op3 = value;
    }

    set op4(value) {
        this._op4 = value;
    }

    set opRight(value) {
        this._opRight = value;
    }

    set points(value) {
        this._points = value;
    }

    set blocked(value) {
        this._blocked = value;
    }
}

// set exercise
function initializeMCExercise() {
    let mcExercises = JSON.parse(localStorage.getItem('mcExercises')) || [];
    let exercises = JSON.parse(localStorage.getItem('exercises')) || [];

    if (mcExercises.length === 0) {
        const mcNewExercise = new MultipleChoiceExercise('mc', 1, 'CSS', 'Qual propriedade CSS é usada para definir a cor de fundo de um elemento?', 'color', 'background-color', 'border-color', 'text-color', 'background-color', 50, true);
    
        mcExercises.push(mcNewExercise);
        exercises.push(mcNewExercise);

        localStorage.setItem('mcExercises', JSON.stringify(mcExercises));
        localStorage.setItem('exercises', JSON.stringify(exercises));

    }
    
}



initializeMCExercise();



window.MultipleChoiceExercise = MultipleChoiceExercise;