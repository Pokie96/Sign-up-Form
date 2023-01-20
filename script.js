const firstPass = document.getElementById('password');
const secondPass = document.getElementById('confirmPassword');
const submitBtn = document.getElementById('submit');
const alertMessage = document.querySelector(".alertMessage");
const form = document.querySelector('.form')

console.log(alertMessage)
console.log(form);

function getValue(input){
    let inputValue = input.value
    return inputValue;
}

function checkPass(a, b){
    if(a !== b){
        form.setAttribute("onsubmit", "return false");
        alertMessage.style.visibility = "visible";
        firstPass.style.borderColor = "red";
        secondPass.style.borderColor = "red";
    }else{
        form.setAttribute("onsubmit", "return true");
    }
}

function preventSubmit(event){
    event.preventDefault();
}

submitBtn.addEventListener('click', ()=> {
    let firstPassValue = getValue(firstPass);
    let secondPassValue = getValue(secondPass);
    checkPass(firstPassValue, secondPassValue);
})

