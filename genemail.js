const usedNumbers = new Set(); // Track used numbers efficiently
let minNumber = 500;

function generateUniqueNumber() {
    let randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * 1000000) + minNumber; // Generates a large range of numbers
    } while (usedNumbers.has(randomNumber)); // Ensures uniqueness
    usedNumbers.add(randomNumber);
    return randomNumber;
}

document.querySelector('.generate-button').addEventListener('click', function() {
    const emailCounter = generateUniqueNumber();
    const email = 'ryliecohn+' + emailCounter + '@zohomail.com';
    document.querySelector('.email-input').value = email;
    alert("Generated email: " + email);
});

document.querySelector('.copy-button').addEventListener('click', function() {
    const emailInput = document.querySelector('.email-input');
    emailInput.select();
    emailInput.setSelectionRange(0, 99999);
    document.execCommand('copy');
    a
});

document.querySelector('.check-button').addEventListener('click', function() {
    const email = document.querySelector('.email-input').value;
    if (email) {
        alert("Checking emails for: " + email);
        // Implement email checking logic here
        
        
        
    } else {
        alert("Please generate an email first.");
    }
});

