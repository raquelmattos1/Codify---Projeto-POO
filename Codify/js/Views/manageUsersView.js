let storedUsers = JSON.parse(localStorage.getItem('users')) || [];
let usersTable = document.querySelector('.table-alunos');

function ejectListOfUsers() {
    usersTable.innerHTML = `
        <tr>
            <th>Aluno</th>
            <th>Bloquear</th>
            <th>Remover</th>
        </tr>
    `;


    storedUsers.forEach((user, index) => {
        const blockedText = user._block ? ' (bloqueado)' : '';
        const btnClass = user._block ? 'btn-desbloquear' : 'btn-bloquear';
        const btnText = user._block ? 'Desbloquear' : 'Bloquear';

        if (user._username != 'Administrador') {
            usersTable.innerHTML += `
            <tr>
                <td>${user._username}${blockedText}</td>
                <td><button class="${btnClass}" data-index="${index}">${btnText}</button></td>
                <td><button class="btn-remover" data-index="${index}">Remover</button></td>
            </tr>
        `;
        }

        
    });
}


document.querySelector('#perfil-icon').style.color = '#78FCA0';

ejectListOfUsers();
