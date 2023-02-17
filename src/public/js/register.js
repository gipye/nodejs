"use strict";

const id = document.querySelector("#id"),
    password = document.querySelector("#password"),
//    email = document.querySelector("#email");
    registerBtn = document.querySelector("#registerBtn");

function register() {
	const req = {
		id: id.value,
		password: password.value,
	};

	fetch("/register", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(req),
	})
	.then((res) => res.json().then((res) => {
            // 프론트 회원가입 기능 구현
	    	if(res.success === true) {
	    		location.href = "/login";
	    	} else {
	    		alert(res.msg);
	    	}
        })
    );
}

registerBtn.addEventListener("click", register);
