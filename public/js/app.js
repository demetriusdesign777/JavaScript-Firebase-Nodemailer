// Declare Variables
var email = document.querySelector('.emailInput');
var form = document.querySelector('.form');
var messageDiv = document.querySelector('.messageDiv');
var messageP = document.querySelector('.messageDiv-p');

// Hide the message div when focusing on the email input
email.addEventListener("focus", function(e) {
    if(messageDiv.style.display == 'flex') {
        messageDiv.style.display = 'none';
    } 
});

// Form Validation
form.addEventListener('submit', function(e) {
    e.preventDefault();
    // Nodemailer function
    const mailSender = functions.httpsCallable('mailSender');
    mailSender({email: email.value}).then(() => {
        // Show message div
        showMessage();
        console.log("Email sent Successfully. Log to the Frontend console!");
    }).catch(() => {
        // Show error div
        errMessage();
    });

    form.reset();
});

function showMessage() {
    messageDiv.style.display = 'flex';
};

function errMessage() {
    messageP.style.color = '#b3365e';
    messageP.innerText = 'Error! Please try again.';
    messageDiv.style.display = 'flex';
    messageDiv.style.border = '2px solid #36b242';
}





