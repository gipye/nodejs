"use strict";

class UserStorage {
    static #users = {
        id: ["admin", "gipyong"],
        password: ["admin1234", "1234"],
    };

    static getUsers(property) {
        const users = this.#users;
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
}

module.exports = UserStorage;
