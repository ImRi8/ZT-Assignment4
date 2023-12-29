document.getElementById('username').addEventListener('input', function() {
    document.getElementById('username-error').textContent = ''; // Clear the username error message on input change
});

document.getElementById('password').addEventListener('input', function() {
    document.getElementById('password-error').textContent = ''; // Clear the password error message on input change
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Email format validation using a regular expression
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isEmailValid = emailRegex.test(username);

    // Check if the password is "abc@123"
    let isPasswordValid = password === 'SmartServTest@123';

    if (isEmailValid && isPasswordValid) {
        window.location.href = 'dashboard.html';
    } else {
        if (!isEmailValid) {
            document.getElementById('username-error').textContent = 'Please enter a valid email address.';
        }
        if (!isPasswordValid) {
            document.getElementById('password-error').textContent = 'Incorrect password. Please enter valid password.';
        }
    }
});
