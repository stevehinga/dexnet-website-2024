function sendForm() {
    const form = document.getElementById('myForm');
    const formData = new FormData(form);
    const messageElement = document.getElementById('message');
  
    messageElement.textContent = 'Sending...';
  
    fetch('contact.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.text())
    .then(data => {
      document.getElementById('message').textContent = data;
      if (data === "Email sent successfully!") {
        window.location.reload();
      }
    })
    .catch(error => {
      console.error('Error:', error);
      document.getElementById('message').textContent = 'An error occurred';
    });
  }
  
  document.getElementById('mySubmit').addEventListener('click', sendForm);