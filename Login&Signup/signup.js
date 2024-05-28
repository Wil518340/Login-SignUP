window.onload = function() {
    document.getElementById('email_id').value = localStorage.getItem('email_id') || '';
    document.getElementById('full_name').value = localStorage.getItem('full_name') || '';
};

// Save input values to Local Storage
function saveInputValue(id) {
    const value = document.getElementById(id).value;
    localStorage.setItem(id, value);
}

function sendOTP() {
    let otp_val = Math.floor(100000 + Math.random() * 900000);
    const params = {
        from_name: document.getElementById("full_name").value,
        email_id: document.getElementById("email_id").value,
        verify: otp_val
    };

    emailjs.send('service_v7xm339', 'template_9kr8sum', params)
    .then(function(res) {
        alert("Verification code sent!");
        document.getElementById('otp-btn').addEventListener('click', () => {
            const otp_inp = document.getElementById('verify').value;
            if (otp_inp == otp_val) {
                alert("Email address verified!");
            } else {
                alert("Invalid verification code!");
            }
        });
    })
    .catch(function(error) {
        alert("Failed to send verification code. Please try again.");
    });
}

function validatePassword() {
    const password = document.getElementById("password").value;
    const confirm_password = document.getElementById("confirm_password").value;

    const errors = [];
    if (password.length < 8) errors.push("Password must be at least 8 characters long.");
    if (!/[A-Z]/.test(password)) errors.push("Password must contain at least one uppercase letter.");
    if (!/[a-z]/.test(password)) errors.push("Password must contain at least one lowercase letter.");
    if (!/[0-9]/.test(password)) errors.push("Password must contain at least one number.");
    if (!/[!@#$%^&*]/.test(password)) errors.push("Password must contain at least one special character.");
    if (password !== confirm_password) errors.push("Passwords do not match.");

    if (errors.length > 0) {
        alert(errors.join("\n"));
    } else {
        alert("Password is valid and confirmed!");
    }
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
