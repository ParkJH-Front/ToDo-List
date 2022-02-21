const loginForm = document.getElementById("LoginForm")
const loginInput = document.querySelector("#LoginForm input")
const greeting = document.getElementById("greeting")
const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"
//const userNameCheck = localStorage.getItem(USERNAME_KEY) 여기있으면 적용이 안됨...

function LoginBtn(info) {
    const username = loginInput.value
    
    info.preventDefault()
    loginForm.classList.add(HIDDEN_CLASSNAME)
    localStorage.setItem(USERNAME_KEY, username) // 개발자 도구 > Application -> Local Storage 저장됨

    greetingPrint(userNameCheck)
}

function greetingPrint (username) {
    greeting.classList.remove(HIDDEN_CLASSNAME)
    greeting.innerHTML = `Hello ${username}`    
}

const userNameCheck = localStorage.getItem(USERNAME_KEY) // 왜 여기에 있어야지만 적용이 되는거지?

if (userNameCheck === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", LoginBtn)
} else {
    greetingPrint(userNameCheck)
}