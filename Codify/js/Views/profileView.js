document.querySelector('#perfil-icon').style.color = '#78FCA0';
// Get loggedUser
let loggedUser = JSON.parse(localStorage.getItem('loggedUser'));

if (loggedUser) {
    console.log('Usuário logado:', loggedUser);
} else {
    console.log('Nenhum usuário está logado');
    // If no user logged redirect to login page
    window.location.href = 'login.html';
}

// sort users by points
const users = JSON.parse(localStorage.getItem('users')) || [];
const sortedUsers = users.slice().sort((a, b) => b._points - a._points);

// loggedUser position
let userPosition = sortedUsers.findIndex(user => user._username === loggedUser._username);

// define medal
let medalImage = '';
switch (userPosition) {
    case 0:
        medalImage = '<img src="/Codify/img/medalha ouro.png" alt="Ouro" class="medal-image">';
        break;
    case 1:
        medalImage = '<img src="/Codify/img/medalha prata.png" alt="Prata" class="medal-image">';
        break;
    case 2:
        medalImage = '<img src="/Codify/img/medalha bronze.png" alt="Bronze" class="medal-image">';
        break;
    default:
        medalImage = '';
}

if (loggedUser._points != 0) {
    document.querySelector('.hello-user').innerHTML += ` ${loggedUser._username}! ${medalImage}`;
} else {
    document.querySelector('.hello-user').innerHTML += ` ${loggedUser._username}!`;
}

if(loggedUser._username === 'Administrador') {
    document.querySelector('.hello-user').innerHTML = `Olá Administrador!`;
}

function ejectProfileData() {
    const profileData = document.querySelector('.profile-data');
    profileData.innerHTML = `
    <div class="row">
        <div class="col-md-12 col-xl-4" align="center">
            <img src="${loggedUser._avatar}" alt="" class="avatar">   
            <br>
            <button type="button" data-bs-toggle="modal" data-bs-target="#myModal" class="mudar-avatar">
                Mudar avatar
            </button>                            
        </div>
        <div class="col-md-12 col-xl-4 edit-perfil">
            <h5>Username</h5>
            <input value="${loggedUser._username}" class="input-nome"></input>
            <h5>Email</h5>
            <input value="${loggedUser._email}" class="input-email"></input>
            <h5>Senha</h5>
            <input type="password" value="${loggedUser._password}" class="input-senha"></input> 
            <br>
            <button class="btn-salvar">Salvar</button> 
        </div>
        <div class="col-md-12 col-xl-4 pontos" align="center">
            <h3>Meus pontos</h3> 
            <h1 class="qnt-pontos" align="center">${loggedUser._points}XP</h1>  
        </div>                                         
    </div>
    <br><br>
    `;

    // Change profile data only for users[i]._admin = false
    if (loggedUser._admin === true) {
        document.querySelector('.btn-salvar').style.display = 'none';
    }
}

ejectProfileData();

// Edit profile 
function editProfile() {
    const newUsername = document.querySelector('.input-nome').value;
    const newEmail = document.querySelector('.input-email').value;
    const newPassword = document.querySelector('.input-senha').value;

    let storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    console.log(storedUsers)
    let userFound = false;

    for (let i = 0; i < storedUsers.length; i++) {
        if (storedUsers[i]._username === loggedUser._username) {
            storedUsers[i]._username = newUsername;
            storedUsers[i]._email = newEmail;
            storedUsers[i]._password = newPassword;

            loggedUser = storedUsers[i];
            userFound = true;
            break;
        }
    }

    // Save changes in localStorgae
    console.log(JSON.stringify(storedUsers));
    if (userFound) {
        localStorage.setItem('users', JSON.stringify(storedUsers));
        localStorage.setItem('loggedUser', JSON.stringify(loggedUser));

        console.log('Usuário atualizado:', loggedUser);
        console.log('Todos os usuários:', storedUsers);

        
        alert('Perfil atualizado com sucesso!');
        window.location.reload(); 
    } else {
        console.error('Erro: Usuário não encontrado.');
    }
}

document.querySelector('.btn-salvar').addEventListener('click', (e) => {
    e.preventDefault();
    editProfile();
});

const avatarModal = document.querySelector('.avatar-flex-container');

function ejectAvatarsModal(avatarModal) {
    let hasAvatar = 0;

    const avatars = JSON.parse(localStorage.getItem('avatars')) || [];
    avatars.forEach(function (avatar, index) {
        const avatarContainer = document.createElement('div');
        avatarContainer.classList.add('avatar-container', 'col-md-4', 'mb-3');
        
        const img = document.createElement('img');
        img.src = avatar._image;
        img.classList.add('img-avatar');

        // event on click img
        img.addEventListener('click', function() {
            // remove border
            const allImages = document.querySelectorAll('.img-avatar');
            allImages.forEach(function(image) {
                image.style.border = 'none';
            });

            // add border
            img.style.border = '3px solid #78FCA0';

            const src = img.src;
            console.log('SRC:', src);

            const saveButton = document.querySelector('.btn-salvarAvatar');
            saveButton.addEventListener('click', (e) => {
                e.preventDefault();

                let storedUsers = JSON.parse(localStorage.getItem('users')) || [];

                for (let i = 0; i < storedUsers.length; i++) {
                    if (storedUsers[i]._username === loggedUser._username) {
                        for (let j = 0; j < storedUsers[i]._unlockedAvatars.length; j++) {
                            if (storedUsers[i]._unlockedAvatars[j] === avatar._id) {
                                hasAvatar += 1;
                            }                             
                        }
                        if (hasAvatar === 0) {
                            if (avatar._pointsValue > 0) {
                                if (storedUsers[i]._points >= avatar._pointsValue) {
                                    var result = confirm(`Este avatar custa ${avatar._pointsValue}XP, deseja comprá-lo?`);
                                    if (result == true) {
                                        storedUsers[i]._points -= avatar._pointsValue;
                                        storedUsers[i]._avatar = src;
                                        loggedUser = storedUsers[i];
                                        storedUsers[i]._unlockedAvatars.push(avatar._id);
                                    }
                                } else {
                                    alert(`Este avatar custa ${avatar._pointsValue}XP, tens apenas: ${loggedUser._points}XP`);
                                } 
                            } else {
                                storedUsers[i]._points -= avatar._pointsValue;
                                storedUsers[i]._avatar = src;
                                loggedUser = storedUsers[i];
                                storedUsers[i]._unlockedAvatars.push(avatar._id);
                                
                            }
                            
                        } else if (hasAvatar > 0) {
                            storedUsers[i]._avatar = src;
                            loggedUser = storedUsers[i];
                        }
                    }
                    console.log(JSON.stringify(loggedUser));
                }
                console.log(JSON.stringify(storedUsers));
                localStorage.setItem('users', JSON.stringify(storedUsers)); 
                localStorage.removeItem('loggedUser'); 
                localStorage.setItem('loggedUser', JSON.stringify(loggedUser)); 

                window.location.reload();
            })

        });

        avatarContainer.appendChild(img);
        avatarModal.appendChild(avatarContainer);
    });
}

ejectAvatarsModal(avatarModal);

// Hide 'Mudar Avatar' and 'Meus pontos' for 'Administrador'
if (loggedUser._username === 'Administrador') {
    document.querySelector('.mudar-avatar').style.display = 'none';
    document.querySelector('.pontos').innerHTML = `<button class="btn-gerirAlunos">Gerir Alunos</button>`;
}

document.querySelector('.btn-gerirAlunos').addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'manageUsers.html';
});

if (loggedUser._username === 'Administrador') {
    document.querySelector('#escapeRoomContainer').innerHTML += `
        <br>
        <button class="newFTBEx-btn">Novo 'FIll the Blanks'</button>
        <button class="newMCEx-btn">Novo 'Multiple Choice'</button>
    `;
}

document.querySelector('.newFTBEx-btn').addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'newExercise(FTB).html';
});

document.querySelector('.newMCEx-btn').addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'newExercise(MC).html';
});

if (loggedUser._username === 'Administrador') {
    document.querySelector('#levels').innerHTML = '';
}

