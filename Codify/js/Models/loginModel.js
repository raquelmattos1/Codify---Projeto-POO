document.querySelector('#submit').addEventListener('click', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('senha').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];
    console.log(users);

    if (username && password) {
        let userFound = false;
        let loggedUser = null;
        
        for (let i = 0; i < users.length; i++) {
            if (users[i]._username === username && users[i]._password === password) {
                userFound = true;
                loggedUser = users[i]; 
                break; // Break loop when user is found
            }
        }

        if (userFound) {
            if (loggedUser._block === true) {
                alert('Este usuário está bloqueado!');
            } else {
                localStorage.setItem('loggedUser', JSON.stringify(loggedUser)); // Salvar o usuário logado no localStorage
                console.log(`Usuário logado: ${loggedUser._username}`);
                alert('Login feito com sucesso!');
                window.location.href = 'profile.html';
            }

        } else {
            alert('Usuário não encontrado!');
        }
        clearForm();
    } else {
        alert('Por favor preencha todos os campos!');
    }
    
});

function clearForm() {
    document.getElementById('username').value = '';
    document.getElementById('senha').value = '';
};

