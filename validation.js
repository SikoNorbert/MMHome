const _name = document.getElementById("name");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const form = document.querySelector(".form");
const validationBtn = document.querySelector(".validation");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateEmailInput();
});

validationBtn.addEventListener("click", function () {
  window.location.href = "thank-you.html";
});

function validateEmailInput() {
  const emailInput = email.value;
  const feedbackElement = document.getElementById("emailFeedback");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(emailInput)) {
    feedbackElement.textContent = ""; // Email is valid
  } else {
    feedbackElement.textContent = "Please enter a valid email address.";
  }
}
