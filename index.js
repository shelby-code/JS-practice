const input = document.querySelector('#input');
const button = document.querySelector('#button');

button.addEventListener('click', function (event){
    if(input.validity.typeMismatch){
        input.setCustomValidity('please enter a valid email');
        input.style.border = "2px red solid";
        
    } else{
        input.setCustomValidity('');
    }
});

