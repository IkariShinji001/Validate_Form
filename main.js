var username = document.querySelector('#username');
var email = document.querySelector('#email');
var password = document.querySelector('#password');
var confirmPassword = document.querySelector('#confirm-password');
var form = document.querySelector('form');

function showError(input, message){
    let parent = input.parentElement;
    let small = parent.querySelector('small');

    parent.classList.add('error');
    small.innerText = message;
}

function showSuccess(input, message){
    let parent = input.parentElement;
    let small = parent.querySelector('small');

    parent.classList.remove('error');
    small.innerText = '';
}

function CheckMatchPassword(passwordInput, confirmPasswordInput){
    if(passwordInput.value !== confirmPasswordInput.value)
    {
        showError(confirmPasswordInput,'Mật khẩu không trùng khớp');
    }

}

function checkEmptyError(listInput){
    let isEmptyError = false;
    listInput.forEach(input => {
        input.value = input.value.trim();

        if(input.value == '')
        {
            isEmptyError = true;
            showError(input, 'Không được để trống');
        }else{
            showSuccess(input); 
        }
    });
    return isEmptyError;

}

function checkEmailError(input){
    const regexEmail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    input.value = input.value.trim();

    let isEmailError = !regexEmail.test(input.value);
    if(regexEmail.test(input.value)){
        showSuccess(input);
    }else{
        showError(input, 'Email không khả dụng');
    }

    return isEmailError;
}

function checkLengthError(input, min, max){
    input.value = input.value.trim();

    if(input.value.length < min)
    {
        showError(input, `Phải có ít nhất ${min} ký tự`);
        return true;
    }

    if(input.value.length > max)
    {
        showError(input, `Phải có ít nhất ${max} ký tự`);
        return true;
    }

    showSuccess(input)
    return false;
}
form.addEventListener('submit', function(e) {
    e.preventDefault();
    let isEmptyError = checkEmptyError([username, email, password, confirmPassword]);
    let isEmailError = checkEmailError(email);
    let isUsernameLengthError = checkLengthError(username, 3, 20);
    let isPasswordLengthError = checkLengthError(password,3, 20);
    let isMatchError = CheckMatchPassword(password, confirmPassword)

    if(isEmptyError || isEmailError || isUsernameLengthError || isPasswordLengthError ||isMatchError ){
        s
    }
})


