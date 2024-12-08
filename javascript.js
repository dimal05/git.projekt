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
 // Initialize validation
 validateContactForm();

})