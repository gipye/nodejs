"use strict";

// const user
// const UserStorage = require("../../models/UserStorage.js");
const User = require("../../models/User.js");

// User database
// const users = UserStorage.getUsers(["id", "password"]);

// make function
const homeController = (req, res) => {
	res.render("index.ejs");
};

const loginController = (req, res) => {
	res.render("login.ejs");
};

const loginProcessing = (req, res) => {

    const user = new User(req.body);
    const response = user.login();

    return res.json(response);
/* 이전 방식

// req 변수는 src/public/js/login.js 파일에서 fetch() 함수의
// 두 번째 인자로 설정한 옵션에 따른 req 객체
	const id = req.body.id,
		password = req.body.password;

// res.json() 함수는 res 객체의 body에 인자로 넘겨준 값을 json 문자열로 변환하여 저장한다.
	if(users.id.includes(id)) {
		const idx = users.id.indexOf(id);

		if(users.password[idx] === password) {
			return res.json({
				success: true,
			});
		}
	}

	return res.json({
		success: false,
		msg: "login fail",
	});

*/// 여까지 이전 방식
};



// make object
const view = {
	home: homeController,
	login: loginController,
};

const process = {
	login: loginProcessing
}

// throw module
module.exports = {
	view,
	process,
};
