class Users {
    constructor(username, email, password) {
        this._username = username;
        this._email = email;
        this._password = password;
        this._admin = false;
        this._block = false;
        this._points = 0;
        this._avatar = '/Codify/img/default avatar.png';
        this._unlockedAvatars = [];
        this._unlockedLevels = [];
    }

    // Getters
    get username() {
        return this._username;
    }

    get email() {
        return this._email;
    }

    get password() {
        return this._password;
    }

    get admin() {
        return this._admin;
    }

    get block() {
        return this._block;
    }

    get points() {
        return this._points;
    }

    get avatar() {
        return this._avatar;
    }

    get unlockedAvatars() {
        return this._unlockedAvatars;
    }

    get unlockedLevels() {
        return this._unlockedLevels;
    }

    // Setters
    set username(value) {
        this._username = value;
    }

    set email(value) {
        this._email = value;
    }

    set password(value) {
        this._password = value;
    }

    set admin(value) {
        this._admin = value;
    }

    set block(value) {
        this._block = value;
    }

    set points(value) {
        this._points = value;
    }

    set avatar(value) {
        this._avatar = value;
    }

    set unlockedAvatars(value) {
        this._unlockedAvatars = value;
    }

    set unlockedLevels(value) {
        this._unlockedLevels = value;
    }
}

// Set user 'Administrador'
function initializeAdminUser() {
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if admin already exists
    const adminExists = users.some(user => user._username === 'Administrador' && user._email === 'admin@gmail.com');

    if (!adminExists) {
        const adminUser = new Users('Administrador', 'admin@gmail.com', 'admin123');
        adminUser.admin = true;
        adminUser.points = 0;
        adminUser.avatar = '/Codify/img/admin avatar.png';
        
        users.push(adminUser);
        localStorage.setItem('users', JSON.stringify(users));
    }
}

initializeAdminUser();

// Global class
window.Users = Users;
