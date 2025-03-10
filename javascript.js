  // Ensures hyperlinks open new browser tab
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        window.open(link.href, '_blank');
        e.preventDefault();
      });
    });
  });

  // Form Validity
const form = document.getElementById('contactForm');

  form.addEventListener('submit', function(event) {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      let errorMessage = '';

// I have been told to use .trim() for form validation in previous clases to make sure the string spaces are removed
      if (!name.trim()) {
          errorMessage += 'Name is required.\n';
      }

      if (!email.trim()) {
          errorMessage += 'Email is required.\n';
      } else if (!email.includes('@')) {
          errorMessage += 'Email must include an "@" symbol.\n';
      }

      if (!message.trim()) {
          errorMessage += 'Message is required.';
      }

      if (errorMessage.length > 0) {
          event.preventDefault(); // Prevent form submission
          alert(errorMessage);
      }
  });
