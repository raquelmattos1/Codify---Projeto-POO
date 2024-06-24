let loggedUser = JSON.parse(localStorage.getItem('loggedUser'));


// block acess to no admin users
if (loggedUser._admin === false) {
    window.location.href = 'login.html';
}


// Events of 'Bloquear', 'Desbloquear' and 'Remover'
document.querySelector('.table-alunos').addEventListener('click', (e) => {
    const target = e.target;

    if (target.classList.contains('btn-bloquear')) {
        if (confirm("Deseja bloquear este usuário?") == true) {
            const index = parseInt(target.getAttribute('data-index'));
            storedUsers[index]._block = true;
            localStorage.setItem('users', JSON.stringify(storedUsers));
            window.location.reload();
        }
    }

    if (target.classList.contains('btn-desbloquear')) {
        if (confirm("Deseja desbloquear este usuário?") == true) {
            const index = parseInt(target.getAttribute('data-index'));
            storedUsers[index]._block = false;
            localStorage.setItem('users', JSON.stringify(storedUsers));
            window.location.reload();
        } 
    }

    if (target.classList.contains('btn-remover')) {
        if (confirm("Deseja remover este usuário?") == true) {
            const index = parseInt(target.getAttribute('data-index'));
            storedUsers.splice(index, 1);
            localStorage.setItem('users', JSON.stringify(storedUsers));
            window.location.reload();
        } 
    }
});