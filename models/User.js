"use strict";

const UserStorage = require("./UserStorage.js");

class User {
    constructor(body) {
        this.body = body;
    }

    login() {
        const { id, password } = UserStorage.getUserInfo(this.body.id);

        if(id) {
            if(password === this.body.password) {
                return { success: true };
            }
            return { success: false, msg: "password is wrong"};
        }
        return { success: false, msg: "not exist id" };
    }

    register() {
        const user = {
            id: this.body.id,
            password: this.body.password,
            name: this.body.name,
            email: this.body.email,
        }

        if(UserStorage.getUsers().id.includes(user.id)) {
            return { success: false, msg: "id already exist" };
        }

        UserStorage.registerUser(user);
        return { success: true };
    }
}

module.exports = User;
