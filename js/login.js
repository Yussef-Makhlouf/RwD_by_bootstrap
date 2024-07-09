document.getElementById('login-btn').addEventListener('click', function(event) {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let valid = true;

    if (!validateEmail(email)) {
        document.getElementById('email').classList.add('is-invalid');
        valid = false;
    } else {
        document.getElementById('email').classList.remove('is-invalid');
    }

    if (password.length < 8) {
        document.getElementById('password').classList.add('is-invalid');
        valid = false;
    } else {
        document.getElementById('password').classList.remove('is-invalid');
    }

    if (valid) {
        alert('Successfully logging in...');
    } else {
        // Form is invalid, show error messages
        event.preventDefault();
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}