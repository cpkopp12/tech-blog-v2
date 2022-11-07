const signUpFormEl = document.querySelector('#signUpForm');
const loginFormEl = document.querySelector('#loginForm');


async function signUpFormHandler(event) {
    
    event.preventDefault();
    //get user input from form
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    //check that none are empty
    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        })
        
        if (response.ok) {
            console.log('success');
        } else {
            alert(response.statusText)
        }
    }
};

async function loginFormHandler(event) {
    event.preventDefault();

    //get user input from form
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
    //check inputs not empty
    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
}







signUpFormEl.addEventListener('submit', signUpFormHandler);
loginFormEl.addEventListener('submit', loginFormHandler);