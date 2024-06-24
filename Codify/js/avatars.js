class Avatars {
    constructor(id, pointsValue, image) {
        this._id = id;
        this._pointsValue = pointsValue;
        this._image = image;
    }

    // Getters
    get id() {
        return this._id;
    }

    get pointsValue() {
        return this._pointsValue;
    }

    get image() {
        return this._image;
    }


    // Setters
    set id(value) {
        this.id = value;
    }

    set pointsValue(value) {
        this._pointsValue = value;
    }

    set image(value) {
        this._Image = value;
    }

}



// Set default avatars
function initializeAvatars() {
    let avatars = JSON.parse(localStorage.getItem('avatars')) || [];

    // Check if default avatars already exists
    const avatarsExists = avatars.some(avatar => avatar._image === '/Codify/img/default avatar.png');

    if (!avatarsExists) {
        const deafultAvatar1 = new Avatars(0, 0, '/Codify/img/default avatar.png');
        avatars.push(deafultAvatar1);

        const deafultAvatar2 = new Avatars(1, 100, '/Codify/img/avatar 1.png');
        avatars.push(deafultAvatar2);

        const deafultAvatar3 = new Avatars(3, 200, '/Codify/img/avatar 2.png');
        avatars.push(deafultAvatar3);

        const deafultAvatar4 = new Avatars(4, 300, '/Codify/img/avatar 3.png');
        avatars.push(deafultAvatar4);

        const deafultAvatar5 = new Avatars(5, 400, '/Codify/img/avatar 4.png');
        avatars.push(deafultAvatar5);

        localStorage.setItem('avatars', JSON.stringify(avatars));
    }
    console.log(avatars);
}

initializeAvatars();


// Global class
window.Users = Avatars;
