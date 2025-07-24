  document.getElementById("reach").addEventListener("submit", function (e) {
   
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