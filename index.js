// when you click on the "Send Message" button in Contact section, it replaces contact form with new text

const forms = document.getElementById("contact-form");
const button = document.getElementById("submit-btn");

function submitMessage(){
    forms.innerHTML = "<h2>Thank you for your interest. We will respond within 24 hours!</h2>";
}

button.addEventListener("click", submitMessage);