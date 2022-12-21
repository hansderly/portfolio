const form = document.getElementById('form');
const { email } = form.elements;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (email.value !== email.value.toLowerCase()) {
    const alertContainer = document.querySelector('.alert-container');
    const alertMessage = document.querySelector('#alertMessage');
    alertContainer.classList.remove('hide');
    alertMessage.textContent = 'Email is not valid, must be lowercase';
    return;
  }

  form.submit();
  form.reset();
});
