const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("password-confirmation");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInput();
});

function checkInput() {
  const usernameValue = username.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const passwordConfirmationValue = passwordConfirm.value;

  if (usernameValue === "") {
    setErrorFor(username, "o nome de usuario e obrigatorio");
  } else {
    setSucessFor(username);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // adiciona a mensagem de error
  small.innerText = message;
  formControl.className = "form-control error";
}

function setSucessFor(input) {
  const formControl = input.parentElement;

  // adiciona classe de sucess

  formControl.className = "form-control sucess";
}
