// get form and inputs
const form = document.querySelector(".signupForm"); // fixed: added dot for class
const fullNameInput = document.getElementById("fullName");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // stop page from refreshing

  const fullName = fullNameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  // Basic validation
  if (fullName === "" || email === "" || password === "" || confirmPassword === "") {
    alert("Please fill in all fields.");
    return;
  }

  if (!email.includes("@")) {
    alert("Please enter a valid email.");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  // to check if there's duplicate emails before allowing sign up
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Check if email already exists
  const emailExists = users.some(user => user.email === email);
  if (emailExists) {
    alert("This email is already registered.");
    return;
  }

  //save new user
  const newUser = {
    fullName,
    email,
    password 
  };

  users.push(newUser);  //add newusers to users array
  localStorage.setItem("users", JSON.stringify(users)); //save updated array to local storage
  alert("Account created successfully!");
  window.location.href = "dashboard.html"; //redirect to dashboard page
});

