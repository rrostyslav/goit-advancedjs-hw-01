const form = document.querySelector('.feedback-form');

const emailInput = form.elements.email;
const messageInput = form.elements.message;

const LOCAL_STORAGE_KEY = 'feedback-form-state';

let formData = { email: '', message: '' };
const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);

if (savedData) {
  formData = JSON.parse(savedData);
  emailInput.value = formData.email || '';
  messageInput.value = formData.message || '';
}

form.addEventListener('input', event => {
  const { name, value } = event.target;

  formData[name] = value.trim();

  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(LOCAL_STORAGE_KEY);
  form.reset();
  formData = { email: '', message: '' };
});