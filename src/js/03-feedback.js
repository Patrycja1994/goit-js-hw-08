
 import throttle from "lodash.throttle";

 const feedbackForm = document.querySelector(".feedback-form");

 const emailInput = document.querySelector("input");
 const messageInput = document.querySelector("textarea");
 const submitButton = document.querySelector("button");


function saveData(){
    const data = {
        message: messageInput.value,
        email: emailInput.value,
     }; 

    localStorage.setItem("feedback-form-state", JSON.stringify(data));
};

const trottleData = throttle(saveData, 500);

feedbackForm.addEventListener('input', trottleData);

if (localStorage === "") {
    emailInput.value = JSON.parse(localStorage.getItem("feedback-form-state")).email;
    messageInput.value = JSON.parse(localStorage.getItem("feedback-form-state")).message;
}

feedbackForm.addEventListener('submit', handlesubmit);

function handlesubmit(e) {
    e.preventDefault();
    const {
        elements: {message, email}
    } = e.currentTarget;

    if (message.value === "" || email.value === "") {
        return alert ("Fill all fields!")
    } else {
        const result = {message: message.value, email: email.value};
        console.log(result);
        localStorage.removeItem("feedback-form-state");
    }
    
}