document.getElementById('outageForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  let isValid = true;

  // Name validation: Only letters allowed
  const nameInput = document.getElementById('name');
  const nameError = document.getElementById('nameError');
  if (!/^[A-Za-z\s]+$/.test(nameInput.value)) {
      nameError.textContent = 'Name can only contain letters.';
      nameError.style.color = 'red';
      isValid = false;
  } else {
      nameError.textContent = ''; // Clear error
  }

  // Phone validation: Must be a 10-digit number
  const phoneInput = document.getElementById('phone');
  const phoneError = document.getElementById('phoneError');
  if (!/^\d{10}$/.test(phoneInput.value)) {
      phoneError.textContent = 'Phone number must be exactly 10 digits.';
      phoneError.style.color = 'red';
      isValid = false;
  } else {
      phoneError.textContent = ''; // Clear error
  }

  // Email validation: Must contain "@" and "."
  const emailInput = document.getElementById('email');
  const emailError = document.getElementById('emailError');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
      emailError.textContent = 'Please enter a valid email address.';
      emailError.style.color = 'red';
      isValid = false;
  } else {
      emailError.textContent = ''; // Clear error
  }

  // If form is valid, you can submit it (for now, we'll just log a message)
  if (isValid) {
      alert('Form submitted successfully!');
  }
});
