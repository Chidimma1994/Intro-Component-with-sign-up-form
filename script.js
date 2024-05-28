const form = document.getElementById('form');
const button = document.getElementById('button');
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const iconError = document.querySelector('.icon-error');
const iconErrorOne = document.querySelector('.icon-error-one');
const iconErrorTwo = document.querySelector('.icon-error-two');
const iconErrorThree = document.querySelector('.icon-error-three');
const eyeIcon = document.querySelector('.visibility');


// console.log(password);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fName = firstName.value;
    const lName = lastName.value;
    const emailVal = email.value;
    const passwordVal = password.value;

    // console.log(fName, lName, emailVal, passwordVal);
    if (fName === '') {
        setError(firstName, 'First name cannot be empty');
        iconError.style.visibility = "visible";
    } else {
        setSuccess(firstName);
        iconError.style.visibility = "hidden";
    }

    if (lName === '') {
        setError(lastName, 'Last name cannot be empty');
        iconErrorOne.style.visibility = "visible";
    } else {
        setSuccess(lastName);
        iconErrorOne.style.visibility = "hidden";
    }

    if(emailVal === '') {
        setError(email, 'Email cannot be empty');
        iconErrorTwo.style.visibility = "visible";
    } else if (!isValidEmail(emailVal)) {
        setError(email, 'Looks like this is not an email');
        iconErrorTwo.style.visibility = "visible";
    } else {
        setSuccess(email);
        iconErrorTwo.style.visibility = "hidden";
    }

    if(passwordVal === '') {
        setError(password, 'Password cannot be empty');
        iconErrorThree.style.visibility = "visible";
        eyeIcon.style.visibility = "hidden";
    } else if (passwordVal.length < 8 ) {
        setError(password, 'Password must be at least 8 character.');
        iconErrorThree.style.visibility = "visible";
        eyeIcon.style.visibility = "hidden";
    } else {
        setSuccess(password);
        iconErrorThree.style.visibility = "hidden";
        eyeIcon.style.visibility = "visible";
    }

    // console.log(emailVal)
         
});

eyeIcon.addEventListener("click", () => {
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
})


const setError = (element, message) => {
    const containerInput = element.parentElement;
    const errorDisplay = containerInput.querySelector('.error');

    errorDisplay.innerText = message;
    containerInput.classList.add('error');
    containerInput.classList.remove('success')
};

const setSuccess = element => {
    const containerInput = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    containerInput.classList.add('success');
    containerInput.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
  