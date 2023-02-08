const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}


function checkRequired(inputarr){
    let isRequired = true
    inputarr.forEach(input=>{
        if(input.value.trim()==''){
            showError(input, `${input.name} is required`);
            isRequired = false;
        }
    })
    return isRequired
}

function checkLength(input, min, max){
    if(input.value.length<min){
        showError(input, `${input.name} must be atleast ${min} character`)
    }
    else if (input.value.length>max){
        showError(input, `${input.name} must be less than ${max} character`)
    }
}

function checkPasswordMatch(pass1, pass2){
    if(pass1.value !== pass2.value){
        showError(pass2, 'Passwords do not match');
    }
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    if(checkRequired([username, email, password, password2])){
        checkLength(username, 3, 15)
        checkLength(password, 6, 12)
        checkPasswordMatch(password, password2)
    }
});