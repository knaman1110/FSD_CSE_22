const form = document.getElementById("loginForm");

form.addEventListener("submit", function (event) {
  event.preventDefault(); 

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const correctEmail = "admin@gmail.com";
  const correctPassword = "123456";

  const result = document.getElementById("result");

  if (email === correctEmail && password === correctPassword) {
    result.textContent = "Login Successful";
    result.style.color = "green";
  } else {
    result.textContent = "Invalid Email or Password";
    // result.style.color = "red";
    alert("Invalid Password");
  }
});