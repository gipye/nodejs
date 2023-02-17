"use strict";

const id = document.querySelector("#id"),
	password = document.querySelector("#password"),
	loginBtn = document.querySelector("#loginBtn");

function login() {
	const req = {
		id: id.value,
		password: password.value,
	};

// fetch() 함수의 반환값은 src/routes/ctrl.js 파일의
// loginProcessing()함수를 실행한 후의 res객체
	fetch("/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(req),
	})
	.then((res) => res.json()   // res.json()의 반환값이 Promise객체
        .then((res) => {
	    	// 프론트 로그인 기능 구현
	    	if(res.success === true) {
	    		location.href = "/";
	    	} else {
	    		alert(res.msg);
	    	}
        })
    );
}

loginBtn.addEventListener("click", login);
