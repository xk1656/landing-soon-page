const emailEl = document.querySelector(".email");
const smallEl = document.querySelector("small");
const form = document.querySelector("#form");
const button = document.querySelector("button");
const errorIcon = document.querySelector(".error-icon");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (emailEl.value == "") {
    form.classList.add("error");
    smallEl.style.display = "block";
    errorIcon.style.display = "block";
  }
});

emailEl.addEventListener("input", (e) => {
  e.preventDefault();
  form.classList.remove("error");
  smallEl.style.display = "none";
  errorIcon.style.display = "none";
});
