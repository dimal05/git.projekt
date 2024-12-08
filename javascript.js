document.addEventListener("DOMContentLoaded", function () {
// Validate Contact form
const validateContactForm = () => {
    const contactForm = document.querySelector(".contact-form form");
    if (!contactForm) return;

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); 
        const nameField = document.getElementById("name");
        const emailField = document.getElementById("email");
        const messageField = document.getElementById("message");

        let isValid = true;

        if (nameField.value.trim() === "") {
            alert("Please enter your name.");
            nameField.focus();
            isValid = false;
        }

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.(com|net|org|edu|gov|info|io|biz)$/;
        if (emailField.value.trim() === "") {
            alert("Please enter your email address.");
            emailField.focus();
            isValid = false;
        } else if (!emailPattern.test(emailField.value)) {
            alert("Please enter a valid email address.");
            emailField.focus();
            isValid = false;
        }

        if (messageField.value.trim() === "") {
            alert("Please enter your message.");
            messageField.focus();
            isValid = false;
        }

        if (isValid) {
            alert("Thank you for contacting us!");
            contactForm.submit();
        }
    });
};
  // Validate Login/Register Forms
  const validateLoginRegisterForms = () => {
    const loginForm = document.getElementById("LoginForm");
    const registerForm = document.getElementById("RegisterForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault(); 
            const username = loginForm.querySelector("input[type='text']");
            const password = loginForm.querySelector("input[type='password']");

            if (username.value.trim() === "") {
                alert("Please enter your username.");
                username.focus();
                return;
            }

            if (password.value.trim() === "") {
                alert("Please enter your password.");
                password.focus();
                return;
            }
            if (password.value.trim().length < 8) {
              alert("Password must be at least 8 characters long.");
              password.focus();
              return false;
            }

            alert("Login successful!");
            loginForm.submit();
        });
    }

    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const fullName = document.getElementById("nameid");
            const username = document.getElementById("userid");
            const email = document.getElementById("emailid");
            const password = document.getElementById("pass");

            let isValid = true;

            if (fullName.value.trim() === "") {
                alert("Please enter your full name.");
                fullName.focus();
                isValid = false;
            }

            if (username.value.trim() === "") {
                alert("Please enter your username.");
                username.focus();
                isValid = false;
            }

            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.(com|net|org|edu|gov|info|io|biz)$/;
            if (email.value.trim() === "") {
                alert("Please enter your email.");
                email.focus();
                isValid = false;
            } else if (!emailPattern.test(email.value)) {
                alert("Please enter a valid email address.");
                email.focus();
                isValid = false;
            }
            if (password.value.trim() === "") {
                alert("Please enter your password.");
                password.focus();
                isValid = false;
            }
            if (password.value.trim().length < 8) {
              alert("Password must be at least 8 characters long.");
              password.focus();
              return false;
            }

            if (isValid) {
                alert("Registration successful!");
                registerForm.submit();
            }
        });
    }
};
 // Initialize validation
 validateContactForm();
 validateLoginRegisterForms();
})