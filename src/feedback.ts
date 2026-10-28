const form = document.querySelector("form");
const nameInput = form.querySelector("#name");
const emailInput = form.querySelector("#email");
const status = document.querySelector("#status");
function showError(input, message) {
  const error = document.createElement("span");
  error.className = "error";
  error.setAttribute("role", "alert");
  error.textContent = message;
  input.setAttribute("aria-invalid", "true");
  input.after(error);
}
function clearErrors() {
  form.querySelectorAll(".error").forEach((el) => el.remove());
  form
    .querySelectorAll("[aria-invalid]")
    .forEach((el) => el.removeAttribute("aria-invalid"));
}
form.addEventListener("submit", (event) => {
  event.preventDefault();
  clearErrors();
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  let valid = true;
  if (name === "") {
    showError(nameInput, "Please enter your name.");
    valid = false;
  }
  if (!email.includes("@")) {
    showError(emailInput, "Please enter a valid email address.");
    valid = false;
  }
  if (valid) {
    status.textContent = `Thanks, ${name}! Your feedback was received.`;
    form.reset();
  }
});
