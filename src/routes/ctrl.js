"use strict";

// user data
const User = require("../../models/User.js");

// make function

// controller function
//
const homeController = (req, res) => {
	res.render("index.ejs");
};

const loginController = (req, res) => {
	res.render("login.ejs");
};

const registerController = (req, res) => {
    res.render("register.ejs");
}

// processing function
//
const loginProcessing = (req, res) => {
    const user = new User(req.body);
    const response = user.login();

    return res.json(response);
};

const registerProcessing = (req, res) => {
    //...
    return res.json({ success: "false", msg: "yet incomplete" });
}



// make object
const view = {
	home: homeController,
	login: loginController,
    register: registerController,
};

const process = {
	login: loginProcessing,
    register: registerProcessing,
}

// throw module
module.exports = {
	view,
	process,
};
