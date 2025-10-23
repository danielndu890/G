
let form = document.getElementById('form');
let fullname = document.getElementById('fullname');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');

let success2 = document.getElementById('success-message');




form.addEventListener('submit', (e) => {

    let message = []
    e.preventDefault();

    checkInputs();
   
    });


function checkInputs(){
    let nameValue = fullname.value.trim();
    let emailValue = email.value.trim();
    let subjectValue = subject.value.trim();
    let messageValue = message.value.trim();

  

    if(nameValue === ''){
        setError(fullname, 'Fullname is required');
    }else{
        setSuccess(fullname);
    }

    if(emailValue === ''){
        setError(email, 'Email is required');
    }else if(!isEmail(emailValue)){
         setError(email, 'Email is not valid'); 
    }else{
        setSuccess(email);
    }

    if(subjectValue === ''){
    setError(subject, 'Subject is required');
    } else{
        setSuccess(subject);
    }

    if(messageValue === ''){
     setError(message, 'Message is required'); 
    
    } else if(messageValue < 10) {
         setError(message, 'Message must be at least 10 characters long'); 
    }else{
        setSuccess(message);
    }

    if(success2){
        success2.textContent = 'Successfully sent'
    }

   
}

function setError(input, message){
    const formGroup = input.parentElement;
    const span = formGroup.querySelector('span');

    span.innerText = message;

    formGroup.className = 'form-group error';
}


function setSuccess(input){
const formGroup = input.parentElement;  
 formGroup.className = 'form-group success';
}

function isEmail(email){
return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);


}


