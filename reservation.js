const numberInput = document.getElementById('numberInput');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const fnameInput = document.getElementById('fnameInput');
const lnameInput = document.getElementById('lnameInput');
const dateInput = document.getElementById('dateInput');

function formValidation(e){
    e.preventDefault();
    if(fnameInput.value.length == 0){
        alert("First Name field must not be empty!");
    }
    else if(numberInput.value.length == 0){
        alert("Number field must not be empty!");
    }
    else if(emailInput.value.length == 0){
        alert("Email field must not be empty!");
    }
    else if(passwordInput.value.length == 0){
        alert("Password field must not be empty!");
    }
    else if(dateInput.value.length == 0){
        alert("Date field must not be empty!");
    }
    else if(!emailInput.value.endsWith("@gmail.com")){
        alert("Email field must end with '@gmail.com'!");
    }
    else{
        var flag=0;
        for(let i=0; i<numberInput.value.length; i++){
            if(numberInput.value[i]<'0' || numberInput.value[i]>'9') flag=1;
        }
        if(flag==1){
            alert("Phone Number field must consist of numbers only!");
        }
        else{
            alert("Successfully submitted!");
            location.reload();
        }
    }
}


