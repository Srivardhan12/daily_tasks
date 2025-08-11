document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  console.log("Username:", username);
  console.log("Email:", email);
  console.log("Password:", password);
});
