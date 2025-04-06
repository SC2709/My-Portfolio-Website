
// Step 1: First Get the form using its ID , where in ContactP.html I have give form id as [contactform]
const form = document.getElementById('contactForm');

// Step 2: Added an event listener for when the form is submitted and then only process starts.As in ContactP.html for button I have given id as [submit]
form.addEventListener('submit', function(event) {
  event.preventDefault(); // This stops the form from refreshing the page while submit the data

  // Step 3: Get values from form fields , this contact,email1,address,feedback are id that i have assigned in ContactP.html in label and input tag for each input point.
  const contactNo = document.getElementById('contact').value;
  const email = document.getElementById('email1').value;
  const address = document.getElementById('address').value;
  const feedback = document.getElementById('feedback').value;

  // Step 4: Create a JSON object (this stores data like specific easy to read data)
  const formData = {
    contactNo: contactNo,
    email: email,
    address: address,
    feedback: feedback
  };

  // Step 5: Show the data in console (We can see the data in browser by right click on Contact page portfolio website after inserting data , then go to console option you can see data in JSON format).
  console.log("Form Data in JSON format:");
  console.log(JSON.stringify(formData, null, 2));
});
