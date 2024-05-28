function login() {
    const email = document.getElementById('email_id').value;
    const password = document.getElementById('password').value;

    if (validateEmail(email) && validatePassword(password)) {
        alert('Login successful!');
        // Add actual login logic here
    } else {
        alert('Invalid email or password.');
    }
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePassword(password) {
    return password.length >= 8;
}

function togglePasswordVisibility(id, button) {
    const input = document.getElementById(id);
    const icon = button.querySelector('i');
    if (input.type === "password") {
        input.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        input.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}
