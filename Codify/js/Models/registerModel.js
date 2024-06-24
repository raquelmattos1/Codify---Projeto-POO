document.getElementById('submit').addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('senha').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];

    if (username && email && password) {
        let count = 0;
        for (let i = 0; i < users.length; i++) {
            if (users[i]._username === username) {
                count += 1;
            }
            if (users[i]._email === email) {
                count += 2;
            }
        }
        if (count === 1) {
            alert(`O username '${username}'já está a ser utilizado!`);
            clearForm();
        } else if (count === 2) {
            alert(`O email '${email}' já está a ser utilizado!`);
            clearForm();            
        } else if (count === 3) {
            alert(`O username '${username}' e o email '${email}' já estão a ser utilizados!`)
            clearForm();
        } else {
            const newUser = new Users(username, email, password);

            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));

            alert('Usuário registrado com sucesso!');
            console.log(newUser);
            window.location.href = 'login.html';
        }
    } else {
        alert('Por favor, preencha todos os campos.');
    }
    console.log(users);
});

function clearForm() {
    document.getElementById('username').value = '';
    document.getElementById('email').value = '';
    document.getElementById('senha').value = '';
}
