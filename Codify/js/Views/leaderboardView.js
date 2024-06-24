const users = JSON.parse(localStorage.getItem('users')) || [];

// Ordenar usuários de forma decrescente com base nos pontos
const sortUsers = users.slice().sort((a, b) => b._points - a._points);

let table = document.querySelector('#leaderboard-users');

// Função para obter a medalha correspondente à posição
function getMedalImage(position) {
    switch (position) {
        case 0:
            return '<img src="/Codify/img/medalha ouro.png" alt="Ouro" class="medal-image">';
        case 1:
            return '<img src="/Codify/img/medalha prata.png" alt="Prata" class="medal-image">';
        case 2:
            return '<img src="/Codify/img/medalha bronze.png" alt="Bronze" class="medal-image">';
        default:
            return '';
    }
}

// Exibir os top 10 usuários, exceto "Administrador"
for (let i = 0; i < Math.min(10, sortUsers.length); i++) {
    if (sortUsers[i]._username !== "Administrador") {
        // Adicionar medalha ao lado dos usernames dos três primeiros colocados
        const medalImage = getMedalImage(i);
        const username = `${sortUsers[i]._username}`;
        
        table.innerHTML += `
        <tr>
            <td>${i + 1}º</td>
            <td class="name-medal">${username} ${medalImage} </td>
            <td>${sortUsers[i]._points}</td>
        </tr>
        `;
    }
}

let loggedUser = JSON.parse(localStorage.getItem('loggedUser'));

if (!loggedUser) {
    document.querySelector('.dropdown').innerHTML = `
        <a href="login.html" class="nav-link py-3 px-2" title="Login" data-bs-toggle="tooltip" data-bs-placement="right">
            Fazer login
        </a>
    `;
    document.querySelector('.dropdown').style.color = '#78FCA0';
}

document.querySelector('#leaderboard-icon').style.color = '#78FCA0';