users_info =  []

const form = document.querySelector("form"),
  firstnameField = form.querySelector(".first_name-field"),
  firstnameInput = firstnameField.querySelector(".first_name"),
  lastnameField = form.querySelector(".last_name-field"),
  lastnameInput = lastnameField.querySelector(".last_name"),
  emailField = form.querySelector(".email-field"),
  emailInput = emailField.querySelector(".email"),
  usernameField = form.querySelector(".username-field"),
  usernameInput = usernameField.querySelector(".username"),
  usertypeField = form.querySelector(".usertype-field"),
  usertypeInput = usertypeField.querySelector(".usertype"),
  accountbalanceField = form.querySelector(".account_balance-field"),
  accountbalanceInput = accountbalanceField.querySelector(".account_balance"),
  passField = form.querySelector(".create-password"),
  passInput = passField.querySelector(".password"),
  cPassField = form.querySelector(".confirm-password"),
  cPassInput = cPassField.querySelector(".cPassword");

// First Name Validation
function checkFirstName() {
  const firstnamePattern = /^[A-Za-z]{2,50}$/;
  if (!firstnameInput.value.match(firstnamePattern)) {
    return firstnameField.classList.add("invalid"); //adding invalid class if first name value do not mathced with firstnamePattern
  }
  firstnameField.classList.remove("invalid"); //removing invalid class if first name value matched with firstnamePattern
}

// Last Name Validation
function checkLastName() {
  const lastnamePattern = /^[A-Za-z]{2,50}$/;
  if (!lastnameInput.value.match(lastnamePattern)) {
    return lastnameField.classList.add("invalid"); //adding invalid class if last name value do not mathced with lastnamePattern
  }
  lastnameField.classList.remove("invalid"); //removing invalid class if last name value matched with lastnamePattern
}

// Email Validation
function checkEmail() {
  const emaiPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailInput.value.match(emaiPattern)) {
    return emailField.classList.add("invalid"); //adding invalid class if email value do not mathced with email pattern
  }
  emailField.classList.remove("invalid"); //removing invalid class if email value matched with emaiPattern
}

// Username Validation
function createUsername() {
  const usernamePattern = /^[A-Za-z0-9]{2,15}$/;

  if (!usernameInput.value.match(usernamePattern)) {
    return usernameField.classList.add("invalid"); //adding invalid class if username input value do not match with usernamePattern
  }
  usernameField.classList.remove("invalid"); //removing invalid class if username input value matched with usernamePattern
}

// Usertype Validation
function checkUserType() { 
  if (usertypeInput.value56) {
    return usertypeField.classList.add("invalid"); //adding invalid class if usertype input value is not chosen
  }
  usertypeField.classList.remove("invalid"); //removing invalid class if usertype input value is chosen
}

// Account Balance Validation
function checkAccountBalance() { 
  if (accountbalanceInput.value < 0 || accountbalanceInput.value == "") {
    return accountbalanceField.classList.add("invalid"); //adding invalid class if account balance input value is negative
  }
  accountbalanceField.classList.remove("invalid"); //removing invalid class if account balance input value is positive
}

// Hide and show password
const eyeIcons = document.querySelectorAll(".show-hide");

eyeIcons.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    const pInput = eyeIcon.parentElement.querySelector("input"); //getting parent element of eye icon and selecting the password input
    if (pInput.type === "password") {
      eyeIcon.classList.replace("bx-hide", "bx-show");
      return (pInput.type = "text");
    }
    eyeIcon.classList.replace("bx-show", "bx-hide");
    pInput.type = "password";
  });
});

// Password Validation
function createPass() {
  const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;

  if (!passInput.value.match(passPattern)) {
    return passField.classList.add("invalid"); //adding invalid class if password input value do not match with passPattern
  }
  passField.classList.remove("invalid"); //removing invalid class if password input value matched with passPattern
}

// Confirm Password Validation
function confirmPass() {
  if (passInput.value !== cPassInput.value || cPassInput.value === "") {
    return cPassField.classList.add("invalid");
  }
  cPassField.classList.remove("invalid");
}

// Calling Funtion on Form Submit
form.addEventListener("submit", (e) => {
  e.preventDefault(); //preventing form submitting
  checkFirstName();
  checkLastName();
  createUsername();
  checkUserType();
  checkAccountBalance();
  checkEmail();
  createPass();
  confirmPass();

  //calling function on key up
  firstnameInput.addEventListener("keyup", checkFirstName);
  lastnameInput.addEventListener("keyup", checkLastName);
  emailInput.addEventListener("keyup", checkEmail);
  usernameInput.addEventListener("keyup", createUsername);
  usertypeInput.addEventListener("keyup", checkUserType);
  accountbalanceInput.addEventListener("keyup", checkAccountBalance);
  passInput.addEventListener("keyup", createPass);
  cPassInput.addEventListener("keyup", confirmPass);

  if (
    !firstnameField.classList.contains("invalid") &&
    !lastnameField.classList.contains("invalid") &&
    !usernameField.classList.contains("invalid") &&
    !usertypeField.classList.contains("invalid") &&
    !accountbalanceField.classList.contains("invalid") &&
    !emailField.classList.contains("invalid") &&
    !passField.classList.contains("invalid") &&
    !cPassField.classList.contains("invalid")
  ) {
    location.href = form.getAttribute("action");
  }
});
