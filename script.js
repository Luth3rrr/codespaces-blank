
function validateForm() {
    // Get the form element
    var form = document.getElementById("signup-form");
  
    // Get the input elements
    var nameInput = form.elements.name;
    var emailInput = form.elements.email;
    var phoneInput = form.elements.phone;
  
    // Check if the name field is empty
    if (nameInput.value == "") {
      // If the name field is empty, show an error message
      alert("Please enter your name");
      return false;
    }
  
    // Check if the email field is empty
    if (emailInput.value == "") {
      // If the email field is empty, show an error message
      alert("Please enter your email address");
      return false;
    }
  }
    // Check if the phone field is empty
// Get the menu button element
var menuButton = document.getElementById("menu-button");

// Get the nav links element
var navLinks = document.querySelector("nav ul");

// Attach a click event listener to the menu button
menuButton.addEventListener("click", function() {
  // Toggle the "show" class on the nav links element
  navLinks.classList.toggle("show");
}); 
