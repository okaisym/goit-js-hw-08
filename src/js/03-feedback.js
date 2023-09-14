
import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const emailInput = document.querySelector('[name="email"]');
const messageInput = document.querySelector('[name="message"]');

formEl.addEventListener('submit', onFormSubmit)
formEl.addEventListener('input', throttle(onFormInput, 500));

const savedData = 'feedback-form-state';

const formData = {
        email: '',
        message: '',  
    };

    processingTheForm();

    function onFormSubmit(e) {
        e.preventDefault();
        localStorage.removeItem(savedData);
        e.currentTarget.reset();
        console.log(formData)
    }

    function onFormInput(e) {
        formData[e.target.name] = e.target.value;
        localStorage.setItem(savedData, JSON.stringify(formData));
    }

    function processingTheForm() {
        const savedMessage = JSON.parse(localStorage.getItem(savedData));
        if (savedMessage === null) {
            return;
    }
    messageInput.value = savedMessage.message || ''; 
    emailInput.value = savedMessage.email || '';
    formData.email = savedMessage.message || '';
    formData.message = savedMessage.message || '';
    };
