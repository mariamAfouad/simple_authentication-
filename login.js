const form = document.querySelector(".loginForm");  
 //I can’t run addEventListener() on form because form is not a single element — it’s something else.”
 //"Find the first element in the HTML that has the class loginForm, and store it in the variable form."
const emailInput =document.getElementById("email");  //Get specific input fields and the error message placeholder using their id
const passwordInput =document.getElementById("password");
// passwordInput.value --> gets the typed password
const errorMessage = document.getElementById("errorMessage");

form.addEventListener("submit", function(event) { //When the user submits the form (by clicking the LOGIN button), run this function.
  event.preventDefault(); // don't reload the page ,,let js handle it instead.....This keeps the user on the same page while you check the input.
//the whole form box

const email = emailInput.value .trim();  //trim..remove extra spaces from beg and end 
const password = passwordInput.value;   //give what user typed

  if (email === "" || password === "") {
    errorMessage.textContent = "Please fill in all fields.";
    return;
  }  //show error message if the either input is empty

if (!email.includes("@")){
 errorMessage.textContent = "Please enter a valid email address.";
    return;   
}
  if (password.length < 6) {
    errorMessage.textContent = "Password must be at least 6 characters.";
    return;
  }

  //If all checks passed — no error! Clear any previous error message.
 errorMessage.textContent = "";


 
 //Converts the string back into a JavaScript array of user objects like this:[{fullName: "Mariam",email:"mariam@2304.com",password:"123456"}]
  const users = JSON.parse(localStorage.getItem("users")) || [];   // tries to get a string of saved users from your browser's storage — the same data you saved during sign-up

  //Check if there's a user that matches the credentials
  const foundUser = users.find(user => user.email == email && user.password == password);

  if (foundUser) {
    errorMessage.textContent = "";
    alert(`Welcome back, ${foundUser.fullName}!`);
    //redirect the user to another page after successful login (like a dashboard or homepage)
    window.location.href = "dashboard.html ";  // automatically take user to home page
  } else {
    errorMessage.textContent = "Incorrect email or password.";
  }








});


