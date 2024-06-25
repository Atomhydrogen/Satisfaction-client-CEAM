document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('survey-form');
    const thankYouMessage = document.getElementById('thank-you-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Here you can handle form submission, like sending the data to a server
        
        // Display the thank you message
        form.classList.add('hidden');
        thankYouMessage.classList.remove('hidden');
    });
});
