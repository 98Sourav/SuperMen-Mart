  // contact form validation
  document.getElementById("reach").addEventListener("submit", function(e) {
   
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value.trim();

      switch (true) {
        case (name === ""):
          alert("Please enter your name.");
          break;
        case (email === ""):
          alert("Please enter your email.");
          break;
      
        case (subject === ""):
          alert("Please select a subject.");
          break;
        case (message === ""):
          alert("Please enter your message.");
          break;
        default:
          alert("Form submitted successfully!");
          document.getElementById("reach").reset();
      }
    });


// Toggle nav-menu
function myFunction() {
var x = document.getElementById("menu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// form data
document.getElementById("my-form").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent the default form submission

   const formData = new FormData(this);

    fetch("form.php", {
      method: "POST",
      body: formData
    })
    .then(response => response.text())
    .then(data => {

      console.log("Response from PHP:", data); // Debug
      
      document.getElementById("response").innerText = data;

      // Show the server response in an alert
      alert(data);

      // Redirect only if registration was successful
      if (data.includes("Registration successful")) {
        setTimeout(() => {
          window.location.href = "login.html";
        }, 2000);
      }
    })
    .catch(error => {
      document.getElementById("response").innerText = "Error: " + error;
      alert("Something went wrong. Please try again.");
    });
  });