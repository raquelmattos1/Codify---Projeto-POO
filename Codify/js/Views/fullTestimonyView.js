// Get indexTest on localStorage
const indexTest = parseInt(localStorage.getItem('indexTest'));
console.log('Index do testemunho:', indexTest);

let tests = JSON.parse(localStorage.getItem('testimonys')) || [];
const subtitle = document.querySelector('.subtitle');
subtitle.innerHTML += `
    <div class="row" >
        <div class="col-lg-12 col-xl-6" align="center">
            <img src="${tests[indexTest]._image}" alt="" class="portrait">                               
        </div>
        <div class="col-lg-12 col-xl-6">
            <div class="row" align="center">
                <h1 class="nomeAluno">${tests[indexTest]._name}</h1>   
            </div>
            <div class="row">
                <h3 class="subtitulo-1">${tests[indexTest]._subtitle}</h3>                           
            </div>
        </div>  
    </div>

    <div class="row subtitle-text">
        <p>${tests[indexTest]._text}</p> 
    </div>

`;

document.querySelector("#alumni-icon").style.color = '#78FCA0';
document.querySelector("#alumni-icon").style.fontSize = '30px';

let loggedUser = JSON.parse(localStorage.getItem('loggedUser'));

if (!loggedUser) {
    document.querySelector('.dropdown').innerHTML = `
        <a href="login.html" class="nav-link py-3 px-2" title="Login" data-bs-toggle="tooltip" data-bs-placement="right">
            Fazer login
        </a>
    `;
    document.querySelector('.dropdown').style.color = '#78FCA0';
}

