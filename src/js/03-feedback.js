

 const feedbackForm = document.querySelector('.feedback-form');
 const emailInput = document.querySelector('input');
 const messageInput = document.querySelector('textarea');
 const submitButton = document.querySelector('button');

 const throttle = require('lodash.throttle');

function saveData() {
    const data = {
        message: messageInput.value,
        email: emailInput.value,
     }; 

    localStorage.setItem(`feedback-form-state`, JSON.stringify(data));
}

feedbackForm.addEventListener('input', throttle(saveData, 500));

if (localStorage !== null) {
    emailInput.value = JSON.parse(localStorage.getItem(`feedback-form-state`)).email;
    messageInput.value = JSON.parse(localStorage.getItem(`feedback-form-state`)).message;
}

feedbackForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: {message, email}
    } = event.currentTarget;

    if (message.value === "" || email.value === "") {
        return alert ('Fill all fields!');
    } 
        const result = {message: message.value, email: email.value};
        console.log(result);

        event.currentTarget.reset();
        localStorage.removeItem('feedback-form-state');
}

