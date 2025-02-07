const form = document.querySelector('#form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const errorIcon = '<i class="fa-solid fa-circle-exclamation"></i>'

    const name = document.querySelector('#name');
    const inputBox = name.closest('.input-box');
    const nameValue = name.value;
    
    const erroSpan = inputBox.querySelector('.error');
    erroSpan.innerHTML = '';

    inputBox.classList.remove('invalid');
    inputBox.classList.add('valid');


    if(!nameIsValid(nameValue).isValid){
        erroSpan.innerHTML = `${errorIcon} ${nameIsValid(nameValue).errorMessage}`;
        inputBox.classList.add('invalid');
        inputBox.classList.remove('valid');
        return;
    }
})

function isEmpty(value){ 
    return value === '';
}



function nameIsValid(value) {
    const validator = {
        isValid: true,
        errorMessage: null
    };
    let isValid = true;
    errorMessage = '';
    

    if (isEmpty(value)){
        validator.isValid = false;
        validator.errorMessage = 'O campo é obrigatório';
        return validator;
    }

    const min = 3;

    if(value.length < 3 ){
        validator.isValid = false;
        validator.errorMessage = `O campo deve conter no mínimo ${min} caracteres.`;
        return validator;
    } 

    // validar se conter números com o regex e mostrar mensagem de erro.
    const regex = /^[a-zA-Z]/;
    if (!regex.test(value)){
        validator.isValid = false;
        validator.errorMessage = 'O campo deve conter apenas letras.';
        
    }
    return validator;

}





const passwordIcons = document.querySelectorAll('.password-icon');

passwordIcons.forEach(icon => {
    icon.addEventListener('click', function() {
        const input = this.parentElement.querySelector('.form-control');
        input.type = input.type === 'password' ? 'text' : 'password';
        this.classList.toggle('fa-eye');

    })
});


