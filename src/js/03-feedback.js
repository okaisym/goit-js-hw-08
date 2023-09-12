import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const emailInput = document.querySelector('[name="email"]');
const messageInput = document.querySelector('[name="message"]');
const savedData = localStorage.getItem('feedback-form-state') || {};

const onInput = function () {
    const formData = {
        email: emailInput.value,
        message: messageInput.value,  
    };
    localStorage.setItem('feedback-form-state', data.value);
};

if (savedData) {
    emailInput.value = savedData.email || '';
    messageInput.value = savedData.message || '';
} else {
    emailInput.value = '';
    messageInput.value = '';
}

formEl.addEventListener('submit', throttle(onInput, 500));
formEl.addEventListener('submit', function () {
    console.log(formData)});

