// 5. Dark Mode
function setupDarkModeToggle(buttonId) {
  const btn = document.getElementById(buttonId);
  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
  });
  if (localStorage.getItem("theme") === "dark") document.body.classList.add("dark");
}

// 6. Time Greeting
function greetUser(name) {
  const hour = new Date().getHours();
  let greet = "Hello";
  if (hour < 12) greet = "Good morning";
  else if (hour < 18) greet = "Good afternoon";
  else greet = "Good evening";
  showToast(`${greet}, ${name}!`);
}

// 7. Live Preview
function enableLivePreview(inputId, previewId) {
  const input = document.getElementById(inputId);
  const preview = document.getElementById(previewId);
  input.addEventListener("input", () => preview.textContent = input.value);
}

// 8. Render user list below search bar
function renderUserList(users) {
  const list = document.getElementById("userList");
  if (!list) return;

  list.innerHTML = "";
  users.forEach(user => {
    const li = document.createElement("li");
    li.textContent = `${user.fullName} (${user.email})`;
    list.appendChild(li);
  });
}

// 9. Enable live search
function setupSearchInput() {
  const searchInput = document.getElementById("searchInput");
  const users = JSON.parse(localStorage.getItem("users")) || [];

  renderUserList(users);

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.toLowerCase();
      const filtered = users.filter(user =>
        user.fullName.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query)
      );
      renderUserList(filtered);
    });
  }
}