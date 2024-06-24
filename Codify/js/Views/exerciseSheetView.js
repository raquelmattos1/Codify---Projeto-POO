let users = JSON.parse(localStorage.getItem('users')) || [];
const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));

document.addEventListener('DOMContentLoaded', () => {
    const selectedLevel = localStorage.getItem('selectedLevel');
    let escapeRooms = JSON.parse(localStorage.getItem('escapeRooms')) || [];
    const currentExerciseIndex = parseInt(localStorage.getItem('currentExerciseIndex')) || 0;
    const exerciseContainer = document.querySelector('.text');
    const escapeRoom = escapeRooms.find(room => room._level == selectedLevel);

    if (escapeRoom && escapeRoom._exercises && escapeRoom._exercises.length > 0) {
        const exercise = escapeRoom._exercises[currentExerciseIndex];
        
        if (exercise) {
            document.querySelector('.codeLanguage').innerHTML = `<h4>${exercise._language}</h4>`;
            
            // Check the type of exercise and render accordingly
            if (exercise._id === 'ftb') {
                renderFTBExercise(exercise);
            } else if (exercise._id === 'mc') {
                renderMCExercise(exercise);
            }

            const languageColor = document.querySelector('.codeLanguage');
            if (exercise._language === "CSS") {
                languageColor.style.color = '#4767f5';
            } else if (exercise._language === "JavaScript") {
                languageColor.style.color = 'yellow';
            } else if (exercise._language === "Python") {
                languageColor.style.color = 'blue';
            } else {
                languageColor.style.color = 'orange';
            }
        } else {
            exerciseContainer.innerHTML = '<p>Exercício não encontrado.</p>';
        }
    } else {
        exerciseContainer.innerHTML = '<p>Escape Room não encontrado ou sem exercícios.</p>';
    }
    
    const continueBtn = document.querySelector('.continueBtn');
    continueBtn.addEventListener('click', () => {
        const exercise = escapeRoom._exercises[currentExerciseIndex];
        let isCorrect = false;
        let pointsEarned = 0;

        if (exercise._id === 'ftb') {
            isCorrect = checkFTBAnswer(exercise);
            pointsEarned = parseInt(exercise._points); 
        } else if (exercise._id === 'mc') {
            isCorrect = checkMCAnswer(exercise);
            pointsEarned = parseInt(exercise._points); 
        }

        if (isCorrect) {
            loggedUser._points += pointsEarned;
            for (let i = 0; i < users.length; i++) {
                if (users[i]._username === loggedUser._username) {
                    users[i] = loggedUser;

                }
                localStorage.setItem('users', JSON.stringify(users));
                localStorage.setItem('loggedUser', JSON.stringify(loggedUser));
                console.log(users);
            } 

            alert(`Ganhou ${pointsEarned} XP, parabéns!`);

            const nextExerciseIndex = currentExerciseIndex + 1;
            if (nextExerciseIndex < escapeRoom._exercises.length) {
                localStorage.setItem('currentExerciseIndex', nextExerciseIndex);
                window.location.reload();
            } else {
                clearInterval(timerInterval); // stop timer
                const minutes = Math.floor(seconds / 60);
                const displaySeconds = seconds % 60;
                alert(`Você completou todos os exercícios!\nTempo total: ${minutes}:${displaySeconds.toString().padStart(2, '0')}`);
                window.location.href = 'profile.html';
            }
        } else {
            alert("Resposta incorreta. Tente novamente.");
        }
    });

    let seconds = 0;
    const timerElement = document.querySelector('.timer');
    const updateTimer = () => {
        seconds++;
        const minutes = Math.floor(seconds / 60);
        const displaySeconds = seconds % 60;
        timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${displaySeconds.toString().padStart(2, '0')}`;
    };
    
    const timerInterval = setInterval(updateTimer, 1000);
});

function renderFTBExercise(exercise) {
    document.querySelector('.statement').innerHTML = `<p>${exercise._statement}</p>`;
    document.querySelector('.statement').innerHTML += `
        <p>${exercise._sentence1.replace('__________', '<input type="text" class="blank" id="blank1">')}</p>
        <p>${exercise._sentence2.replace('__________', '<input type="text" class="blank" id="blank2">')}</p>
        <p>${exercise._sentence3.replace('__________', '<input type="text" class="blank" id="blank3">')}</p>
    `;
}

function renderMCExercise(exercise) {
    document.querySelector('.statement').innerHTML = `<p>${exercise._statement}</p>`;
    document.querySelector('.statement').innerHTML += `
        <div>
            <input type="radio" name="option" id="op1" value="${exercise._op1}"> <label for="op1">${exercise._op1}</label><br>
            <input type="radio" name="option" id="op2" value="${exercise._op2}"> <label for="op2">${exercise._op2}</label><br>
            <input type="radio" name="option" id="op3" value="${exercise._op3}"> <label for="op3">${exercise._op3}</label><br>
            <input type="radio" name="option" id="op4" value="${exercise._op4}"> <label for="op4">${exercise._op4}</label>
        </div>
    `;
}

function checkFTBAnswer(exercise) {
    const blank1 = document.getElementById('blank1').value;
    const blank2 = document.getElementById('blank2').value;
    const blank3 = document.getElementById('blank3').value;
    
    let isCorrect = true;

    if (blank1 !== exercise._blank1) {
        document.getElementById('blank1').style.backgroundColor = '#FF9090';
        isCorrect = false;
    } else {
        document.getElementById('blank1').style.backgroundColor = 'white';
    }

    if (blank2 !== exercise._blank2) {
        document.getElementById('blank2').style.backgroundColor = '#FF9090';
        isCorrect = false;
    } else {
        document.getElementById('blank2').style.backgroundColor = 'white';
    }

    if (blank3 !== exercise._blank3) {
        document.getElementById('blank3').style.backgroundColor = '#FF9090';
        isCorrect = false;
    } else {
        document.getElementById('blank3').style.backgroundColor = 'white';
    }

    return isCorrect;
}

function checkMCAnswer(exercise) {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        return selectedOption.value === exercise._opRight;
    }
    return false;
}

const giveUp = document.querySelector('.giveUpBtn');
giveUp.addEventListener('click', (e) => {
    e.preventDefault();

    let y = confirm('Quer mesmo desistir?');
    if (y) {
        window.location.href = 'profile.html';
    }
})

