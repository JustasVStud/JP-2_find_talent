
const form = document.querySelector('form');


const fullName = document.getElementById('name');
const fullNameError = document.getElementById('name_error');
const email = document.getElementById('email');
const emailError = document.getElementById('email_error')
const message = document.getElementById('message');
const messageError = document.getElementById('message_error');
 


email.addEventListener('input', (event) => {
    emailValid();
});

fullName.addEventListener('input', (event) => {
    fullNameValid();
});
message.addEventListener('input', (event) => {
    messageValid();
});

form.addEventListener('submit', (event) => {
    if(!email.validity.valid || !fullName.validity.valid || !message.validity.valid){
        event.preventDefault();
    }
    emailValid();
    fullNameValid();
    messageValid();
});


function emailValid(){
    if(email.validity.valid){
        email.classList.remove('input-alert');
        emailError.textContent = '';
        emailError.classList.remove('input-alert');
    } else {
        if(email.validity.valueMissing){
            emailError.textContent = 'This field is required';
        } else if(email.validity.typeMismatch){
            emailError.textContent = 'Must be a valid email';
        }
        if(!email.classList.contains('input-alert')){
            email.classList.add('input-alert');
        }
        if(!emailError.classList.contains('input-alert')){
            emailError.classList.add('input-alert');
        }
    }
}

function fullNameValid(){
    if(fullName.validity.valid){
        fullName.classList.remove('input-alert');
        fullNameError.textContent = '';
        fullNameError.classList.remove('input-alert');
    } else {
        fullNameError.textContent = 'This field is required';
        if(!fullName.classList.contains('input-alert')){
            fullName.classList.add('input-alert');
        }
        if(!fullNameError.classList.contains('input-alert')){
            fullNameError.classList.add('input-alert');
        }
    }
}


function messageValid(){
    if(message.validity.valid){
        message.classList.remove('input-alert');
        messageError.textContent = '';
        messageError.classList.remove('input-alert');
    } else {
        messageError.textContent = 'This field is required';
        if(!message.classList.contains('input-alert')){
            message.classList.add('input-alert');
        }
        if(!messageError.classList.contains('input-alert')){
            messageError.classList.add('input-alert');
        }
    }
}

