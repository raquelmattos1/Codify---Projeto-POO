let loggedUser = JSON.parse(localStorage.getItem('loggedUser'));

if (!loggedUser) {
    document.querySelector('.dropdown').innerHTML = `
        <a href="login.html" class="nav-link py-3 px-2" title="Login" data-bs-toggle="tooltip" data-bs-placement="right">
            Fazer login
        </a>
    `;
    document.querySelector('.dropdown').style.color = '#78FCA0';
}


window.onload = function() {
    loadTestimonys();
};

function loadTestimonys() {
    let tests = JSON.parse(localStorage.getItem('testimonys')) || [];
    const cards = document.querySelector('.row.cards');
    cards.innerHTML = ''; 

    if (loggedUser._username === "Administrador") {
        for (let i = 0; i < tests.length; i++) { 
            cards.innerHTML += `
            <div class="col-md-4 mb-3">
                <div class="card card-alumni" id="card-${i}">
                    <img src="${tests[i]._image}" alt="" class="img-alumni">
                    <h3 class="nome-alumni">${tests[i]._name}</h3>
                    <div class="row">
                        <div class="col-md-6">
                            <a href="fullTestimony.html" onclick="saveIndex(${i})"><i class="fa-solid fa-angles-right mais-info"></i></a>
                        </div>
                        <div class="col-md-6">
                            <a onclick="removeTestimony(${i})"><i class="fa-solid fa-trash lixo-icon"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            `;
        }
    } else {
        for (let i = 0; i < tests.length; i++) { 
            cards.innerHTML += `
            <div class="col-md-4 mb-3">
                <div class="card card-alumni" id="card-${i}">
                    <img src="${tests[i]._image}" alt="" class="img-alumni">
                    <h3 class="nome-alumni">${tests[i]._name}</h3>
                    <a href="fullTestimony.html" onclick="saveIndex(${i})"><i class="fa-solid fa-angles-right mais-info"></i></a>
                </div>
            </div>
            `;
        }
    }
}

function saveIndex(index) {
    localStorage.setItem('indexTest', index);
}

if (loggedUser._username === 'Administrador') {
    document.querySelector('.text-box').innerHTML += `
        <div align="center">
            <button class="btn-novoTestemunho" onclick="newTestimony()">Novo Testemunho</button>
        </div>
    `;
}

function newTestimony() {
    window.location.href = 'newTestimony.html';
}

function saveTestimonys(tests) {
    localStorage.setItem('testimonys', JSON.stringify(tests));
}

function removeTestimony(index) {
    let tests = JSON.parse(localStorage.getItem('testimonys')) || [];

    confirm("Confirmar remoção de testemunho?");
    if (confirm) {
        tests.splice(index, 1);
        saveTestimonys(tests); 
        loadTestimonys();  
    }

    
}

document.querySelector("#alumni-icon").style.color = '#78FCA0';
document.querySelector("#alumni-icon").style.fontSize = '30px';


