const er1 = document.querySelector('.level1-students');
const er2 = document.querySelector('.level2-students');
const er3 = document.querySelector('.level3-students');

const ers = JSON.parse(localStorage.getItem('escapeRooms')) || [];

let exercises = JSON.parse(localStorage.getItem('exercises')) || [];
console.log(exercises);

function loadEscapeRoom(level) {
    level = parseInt(level);
    const escapeRoom = ers.find(er => er._level === level);
    if (escapeRoom) {
        localStorage.setItem('currentEscapeRoom', JSON.stringify(escapeRoom));
        window.location.href = 'escapeRoom.html';
        localStorage.setItem('selectedLevel', JSON.stringify(level));
    }
}

er1.addEventListener('click', (e) => {
    e.preventDefault();
    loadEscapeRoom(1);
});

er2.addEventListener('click', (e) => {
    e.preventDefault();
    loadEscapeRoom(2);
});

er3.addEventListener('click', (e) => {
    e.preventDefault();
    loadEscapeRoom(3);
});



