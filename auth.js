// 1. Remember Me
function handleRememberMe() {
  const savedEmail = localStorage.getItem("rememberedEmail");
  if (savedEmail) {
    document.getElementById("email").value = savedEmail;
    document.getElementById("rememberMe").checked = true;
  }

  document.querySelector(".loginForm")?.addEventListener("submit", function () {
    const email = document.getElementById("email").value;
    const remember = document.getElementById("rememberMe").checked;
    if (remember) localStorage.setItem("rememberedEmail", email);
    else localStorage.removeItem("rememberedEmail");
  });
}

// 2. Password Strength
function attachPasswordStrengthChecker(passwordInputId, outputId) {
  const input = document.getElementById(passwordInputId);
  const output = document.getElementById(outputId);
  input.addEventListener("input", () => {
    const val = input.value;
    if (val.length < 6) output.textContent = "Weak";
    else if (/[A-Z]/.test(val) && /[0-9]/.test(val) && /\W/.test(val)) output.textContent = "Strong";
    else output.textContent = "Medium";
  });
}

// 3. Toast
function showToast(msg) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.classList.add("show"), 10);
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 500);
  }, 3000);
}

// 4. Auto Logout
function enableAutoLogout(minutes) {
  let timer;
  function reset() {
    clearTimeout(timer);
    timer = setTimeout(() => {
      alert("Logged out due to inactivity");
      window.location.href = "login.html";
    }, minutes * 60 * 1000);
  }
  ["click", "mousemove", "keydown"].forEach(e => window.addEventListener(e, reset));
  reset();
}

// Call from index.html if needed:
// handleRememberMe();
// attachPasswordStrengthChecker("password", "strengthMsg");
// enableAutoLogout(5);