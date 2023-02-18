"use strict";

const id = document.querySelector("#id"),
      name = document.querySelector("#name"),
      password = document.querySelector("#password"),
      confirmPassword = document.querySelector("#confirm-password"),
      email = document.querySelector("#email"),
      registerBtn = document.querySelector("#button");

function register() {
    if(!id.value)
        return alert("input id");
    else if(!password.value)
        return alert("input password");
    else if(password.value !== confirmPassword.value)
        return alert("password confirm diffrent");

	const req = {
		id: id.value,
        name: name.value,
		password: password.value,
        email: email.value,
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
