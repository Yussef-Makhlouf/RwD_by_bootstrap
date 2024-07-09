document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    let valid = true;

    if (firstName === "") {
      showError("firstNameError", "First Name is required.");
      valid = false;
    }

    if (lastName === "") {
      showError("lastNameError", "Last Name is required.");
      valid = false;
    }

    if (email === "") {
      showError("emailError", "Email is required.");
      valid = false;
    } else if (!validateEmail(email)) {
      showError("emailError", "Please enter a valid email address.");
      valid = false;
    }

    if (password === "") {
      showError("passwordError", "Password is required.");
      valid = false;
    } else if (password.length < 8) {
      showError(
        "passwordError",
        "Password must be at least 8 characters long."
      )
      valid = false;
    }

    if (valid) {
      alert("Form submitted successfully!");
    } else {
      // Form is invalid, show error messages
      event.preventDefault();
    }
  });

function showError(id, message) {
  document.getElementById(id).textContent = message;
}

function clearErrors() {
  document.getElementById("firstNameError").textContent = "";
  document.getElementById("lastNameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";
}
clearErrors();

function validateEmail(email) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(email);
}
