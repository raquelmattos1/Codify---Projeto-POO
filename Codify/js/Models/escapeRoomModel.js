const selectedLevel = localStorage.getItem('selectedLevel');
let escapeRooms = JSON.parse(localStorage.getItem('escapeRooms')) || [];
const escapeRoomContent = document.getElementById('escapeRoomContent');
let exercises = JSON.parse(localStorage.getItem('exercises')) || [];

console.log(escapeRooms);
if (selectedLevel && escapeRooms.length > 0) {
    const escapeRoom = escapeRooms.find(room => room._level == selectedLevel);
    if (escapeRoom) {
        document.body.style.backgroundImage = `url('${escapeRoom._backgroundImage}')`;

        escapeRoomContent.innerHTML = `
            <h1>${escapeRoom._name}</h1>
            <p>${escapeRoom._statement}</p>
            <p><strong>Pontos:</strong> ${escapeRoom._points}</p>
        `;
    } else {
        escapeRoomContent.innerHTML = '<p>Escape Room não encontrado.</p>';
    }
} else {
    escapeRoomContent.innerHTML = '<p>Nenhum escape room selecionado.</p>';
}

escapeRooms.forEach(escapeRoom => {
    escapeRoom._exercises = [];
});

exercises.forEach(exercise => {
    escapeRooms.forEach(escapeRoom => {
        if (exercise._level === escapeRoom._level) {
            escapeRoom._exercises.push(exercise);
        }
    });
});

localStorage.setItem('escapeRooms', JSON.stringify(escapeRooms));

const startBtn = document.querySelector('.start-btn');
startBtn.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.setItem('currentExerciseIndex', 0);
    window.location.href = 'exerciseSheet.html';
});
