const loginForm = document.getElementById("LoginForm")
const loginInput = document.querySelector("#LoginForm input")
const greeting = document.getElementById("greeting")
const HIDDEN_CLASSNAME = "hidden"

function LoginBtn(info) {
    info.preventDefault()
    const username = loginInput.value

    loginForm.classList.add(HIDDEN_CLASSNAME)
    greeting.classList.remove(HIDDEN_CLASSNAME)
    greeting.innerHTML = "Hello " + username // 이 표현식도 가능하고
    greeting.innerHTML = `Hello ${username}` // 이 표현식도 가능하다 `string ${value}... string...` 근데 뭐가 좋을까나?
}

loginForm.addEventListener("submit", LoginBtn)