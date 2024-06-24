let loggedUser = JSON.parse(localStorage.getItem('loggedUser'));

if (loggedUser._username != 'Administrador') {
    window.location.href = 'login.html';
}

let mcExercises = JSON.parse(localStorage.getItem('mcExercises')) || [];
let ftbExercises = JSON.parse(localStorage.getItem('ftbExercises')) || [];

let exercises = JSON.parse(localStorage.getItem('exercises')) || [];

function addExerciseFromForm() {
    const exerciseForm = document.getElementById('exerciseForm');
    const titleEx = document.querySelector('.ex-type');
    let type = '';
    if (titleEx === 'Novo Exercício - Multiple Choice') {
        type = 'mc';
    } else {
        type = 'fbc';
    }

    if (type === 'mc') {
        const level = exerciseForm.querySelector('#ERlevel').value;
        const language = exerciseForm.querySelector('#language').value;
        const points = exerciseForm.querySelector('.xpPoints').value;
        const statement = exerciseForm.querySelector('.textSheet').value;
        const alt1 = exerciseForm.querySelector('#alternative1').value;
        const alt2 = exerciseForm.querySelector('#alternative2').value;
        const alt3 = exerciseForm.querySelector('#alternative3').value;
        const alt4 = exerciseForm.querySelector('#alternative4').value;
        const rightAlt = exerciseForm.querySelector('.rightAlternative').value;

        const mcExercise = new MultipleChoiceExercise('mc', level, language, statement, alt1, alt2, alt3, alt4, rightAlt, points, true);
    
        mcExercises.push(mcExercise);
        exercises.push(mcExercise);

        localStorage.setItem('mcExercises', JSON.stringify(mcExercises));
        localStorage.setItem('exercises', JSON.stringify(exercises));

        addExerciseToEscapeRoom(mcExercise);

        console.log(`All exercises: ${JSON.stringify(exercises)}`);
    } else {
        const level = parseInt(exerciseForm.querySelector('#ERlevel').value);
        const language = exerciseForm.querySelector('#language').value;
        const points = exerciseForm.querySelector('.xpPoints').value;
        const statement = exerciseForm.querySelector('.textSheet').value;
        const stc1 = exerciseForm.querySelector('#sentence1').value;
        const stc2 = exerciseForm.querySelector('#sentence2').value;
        const stc3 = exerciseForm.querySelector('#sentence3').value;
        const bk1 = exerciseForm.querySelector('#blank1').value;
        const bk2 = exerciseForm.querySelector('#blank2').value;
        const bk3 = exerciseForm.querySelector('#blank3').value;

        const ftbExercise = new FillTheBlanksExercise('ftb', level, language, statement, stc1, stc2, stc3, bk1, bk2, bk3, points, true);
    
        ftbExercises.push(ftbExercise);
        exercises.push(ftbExercise);

        localStorage.setItem('ftbExercises', JSON.stringify(ftbExercises));
        localStorage.setItem('exercises', JSON.stringify(exercises));

        console.log(`All exercises: ${JSON.stringify(exercises)}`);   
    }
    exerciseForm.reset();
}

