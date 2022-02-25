const loginForm = document.getElementById("loginForm");
const loginInput = document.getElementById("loginInput");
const greeting = document.getElementById("greeting")

const HIDDEN = "hidden"
const USERNAME = "userName"


// 함수 실행 시 입력값을 localStorage 내 저장
function loginHandler(event) {
    event.preventDefault();
    const loginID = loginInput.value;
    loginInput.value = "";
    localStorage.setItem(USERNAME, loginID);
    
    loginForm.classList.add(HIDDEN);
    greeting.classList.remove(HIDDEN);
    greeting.innerText = `Hello ~ ${loginID} Have a Nice Day ★`;
};

const checkUserName = localStorage.getItem(USERNAME);

loginForm.addEventListener("submit", loginHandler);