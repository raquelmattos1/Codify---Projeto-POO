const exercisesLevel1 = document.querySelector('.level1');
const exercisesLevel2 = document.querySelector('.level2');
const exercisesLevel3 = document.querySelector('.level3');

exercisesLevel1.addEventListener('click', () => displayExercisesByLevel(1));
exercisesLevel2.addEventListener('click', () => displayExercisesByLevel(2));
exercisesLevel3.addEventListener('click', () => displayExercisesByLevel(3));

function displayExercisesByLevel(level) {
    let exercises = JSON.parse(localStorage.getItem('exercises')) || [];
    const exerciseContainer = document.querySelector('.exercises');
    exerciseContainer.innerHTML = '';
    exercises.forEach(exercise => {
        if (exercise._level === level) {
            const card = document.createElement('div');
            card.className = 'col-lg-4 col-md-6 col-sm-12 exercise-card';
            card.innerHTML = `
                <div class="card">
                    <div class="card-body" align="center">
                        <h5 class="card-title">Nível ${exercise._level}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${exercise._language}</h6>
                        <div class="options">
                            <a href="#" class="removeExercise option" title="Remover" data-type="${exercise._type}" data-level="${exercise._level}" data-language="${exercise._language}" data-op1="${exercise._op1}" data-op2="${exercise._op2}" data-op3="${exercise._op3}" data-op4="${exercise._op4}" data-blank1="${exercise._blank1}" data-blank2="${exercise._blank2}" data-blank3="${exercise._blank3}"><i class="fa-solid fa-xmark removeExercise option" data-type="${exercise._type}" data-level="${exercise._level}" data-language="${exercise._language}" data-op1="${exercise._op1}" data-op2="${exercise._op2}" data-op3="${exercise._op3}" data-op4="${exercise._op4}" data-blank1="${exercise._blank1}" data-blank2="${exercise._blank2}" data-blank3="${exercise._blank3}"></i></a>
                        </div>
                    </div>
                </div>
            `;
            exerciseContainer.appendChild(card);
        }
    });

    document.querySelectorAll('.removeExercise').forEach(button => {
        button.addEventListener('click', event => {
            event.preventDefault();
            const type = event.target.getAttribute('data-type');
            const level = parseInt(event.target.getAttribute('data-level'));
            const language = event.target.getAttribute('data-language');
            const op1 = event.target.getAttribute('data-op1');
            const op2 = event.target.getAttribute('data-op2');
            const op3 = event.target.getAttribute('data-op3');
            const op4 = event.target.getAttribute('data-op4');
            const blank1 = event.target.getAttribute('data-blank1');
            const blank2 = event.target.getAttribute('data-blank2');
            const blank3 = event.target.getAttribute('data-blank3');
            const y = confirm('Deseja remover este exercício?');
            if (y) {
                removeExercise(type, level, language, op1, op2, op3, op4, blank1, blank2, blank3);
            }
        });
    });
}

function removeExercise(type, level, language, op1, op2, op3, op4, blank1, blank2, blank3) {
    let exercises = JSON.parse(localStorage.getItem('exercises')) || [];
    let mcExercises = JSON.parse(localStorage.getItem('mcExercises')) || [];
    let fbcExercises = JSON.parse(localStorage.getItem('fbcExercises')) || [];

    // Remove from exercises array
    exercises = exercises.filter(exercise => {
        if (type === 'mc') {
            return !(exercise._level === level && exercise._language === language && exercise._op1 === op1 && exercise._op2 === op2 && exercise._op3 === op3 && exercise._op4 === op4);
        } else if (type === 'fbc') {
            return !(exercise._level === level && exercise._language === language && exercise._blank1 === blank1 && exercise._blank2 === blank2 && exercise._blank3 === blank3);
        } else {
            return !(exercise._level === level && exercise._language === language);
        }
    });

    // Remove from mcExercises array
    mcExercises = mcExercises.filter(exercise => {
        return !(exercise._level === level && exercise._language === language && exercise._op1 === op1 && exercise._op2 === op2 && exercise._op3 === op3 && exercise._op4 === op4);
    });

    // Remove from fbcExercises array
    fbcExercises = fbcExercises.filter(exercise => {
        return !(exercise._level === level && exercise._language === language && exercise._blank1 === blank1 && exercise._blank2 === blank2 && exercise._blank3 === blank3);
    });

    // Update localStorage
    localStorage.setItem('exercises', JSON.stringify(exercises));
    localStorage.setItem('mcExercises', JSON.stringify(mcExercises));
    localStorage.setItem('fbcExercises', JSON.stringify(fbcExercises));

    // Refresh the displayed exercises
    displayExercisesByLevel(level);
}

// Initially display exercises of level 1
displayExercisesByLevel(1);

let loggedUser = JSON.parse(localStorage.getItem('loggedUser'));

if (!loggedUser) {
    document.querySelector('.dropdown').innerHTML = `
        <a href="login.html" class="nav-link py-3 px-2" title="Login" data-bs-toggle="tooltip" data-bs-placement="right">
            Fazer login
        </a>
    `;
    document.querySelector('.dropdown').style.color = '#78FCA0';
}

document.querySelector('#perfil-icon').style.color = '#78FCA0';