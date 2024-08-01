function sendForm() {
  const form = document.getElementById('myForm');
  const formData = new FormData(form);
  const messageElement = document.getElementById('message');

  messageElement.textContent = 'Sending...';

  fetch('contact.php', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.text();
  })
  .then(data => {
    if (data === "Email sent successfully!") {
      messageElement.textContent = 'Your message has been sent!';
      // Optionally, redirect or show a success message
    } else {
      messageElement.textContent = 'An error occurred. Please try again later.';
      console.error('Error:', data);
    }
  })
  .catch(error => {
    console.error('Error:', error);
    messageElement.textContent = 'An error occurred';
  });
}