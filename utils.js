// 8. User ID Generator
function generateUserID() {
  return "USER" + Date.now().toString().slice(-5);
}

// 9. Get User Count
function getUserCount() {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  return users.length;
}

// 10. Search Users
function searchUsers(term) {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  return users.filter(user => user.email.includes(term) || user.fullName.includes(term));
}

// 11. Password Reveal on Hover
function setupPasswordRevealOnHover(inputId) {
  const password = document.getElementById(inputId);
  password.addEventListener("mouseover", () => password.type = "text");
  password.addEventListener("mouseout", () => password.type = "password");
}

// 12. Date of Registration (used during signup)
function createUser(fullName, email, password) {
  return {
    id: generateUserID(),
    fullName,
    email,
    password,
    dateRegistered: new Date().toLocaleDateString()
  };
}

// Example for index.html integration:
// const newUser = createUser("Mariam", "mariam@example.com", "pass123");
// console.log(newUser);
