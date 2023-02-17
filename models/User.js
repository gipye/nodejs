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
}

module.exports = User;
