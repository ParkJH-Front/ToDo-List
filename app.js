const loginForm = document.querySelector("#LoginForm")
const loginInput = document.querySelector("#LoginFrom input")

function loginSubmit() {
    event.preventDefault();
    console.log(loginInput.value)
}

loginForm.addEventListener("submit", loginSubmit)