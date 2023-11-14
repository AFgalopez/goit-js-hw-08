import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageTextarea = feedbackForm.querySelector('textarea[name="message"]');

feedbackForm.addEventListener('input', throttle(handleFormInput, 500));

window.addEventListener('load', () => {
  const storedData =
    JSON.parse(localStorage.getItem('feedback-form-state')) || {};

  emailInput.value = storedData.email || '';
  messageTextarea.value = storedData.message || '';
});

feedbackForm.addEventListener('submit', event => {
  event.preventDefault();

  const formData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageTextarea.value = '';
});

function handleFormInput() {
  const formData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
