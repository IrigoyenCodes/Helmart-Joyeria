// Load footer into all pages
document.addEventListener('DOMContentLoaded', function() {
    // Load footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            // Insert footer at the end of the body
            document.body.insertAdjacentHTML('beforeend', data);
        })
        .catch(error => {
            console.error('Error loading footer:', error);
        });
});
