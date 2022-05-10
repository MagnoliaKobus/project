const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const wave = document.querySelector("canvas");
const logo = document.querySelector("#logo");
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
}

const SavedUsername = localStorage.getItem(USERNAME_KEY);

if (SavedUsername === null) {
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  window.location.href = "main.html";
}
