"use strict";

const fs = require("fs");

class UserStorage {
    static userTableFilePath = "./src/databases/usertable.json";

    static getUsers(property) {
        const users = JSON.parse(fs.readFileSync(this.userTableFilePath));
        const temp = {};
        let i = 0;

        if(property === undefined || property.length === 0) {
            return users;
        }
        for(i = 0; i < property.length; i++) {
            if(users.hasOwnProperty(property[i])) {
                temp[property[i]] = users[property[i]];
            } else {
                const msg = "has no property name";
                console.log(msg);
                return;
            }
        }

        return temp;
    }

    static getUserInfo(id) {
        const users = this.getUsers();
        
        if(users.id.includes(id)) {
            const userInfo = {};
            const idx = users.id.indexOf(id);
            const property = Object.keys(users);
            let i;

            for(i = 0; i < property.length; i++) {
                userInfo[property[i]] = users[property[i]][idx];
            }

            return userInfo;
        } else {
            return {};
        }
    }

    static registerUser(user) {
        const users = this.getUsers();

        users.id.push(user.id);
        users.name.push(user.name);
        users.password.push(user.password);
        users.email.push(user.email);

        fs.writeFileSync(this.userTableFilePath, JSON.stringify(users));
    }
}

module.exports = UserStorage;
