document.addEventListener('DOMContentLoaded', function () {
    // Get references to elements
    const firstSet = document.getElementById('firstSet');
    const secondSet = document.getElementById('secondSet');
    const toggleButton = document.getElementById('toggleButton');

    // Add click event listener to the button
    toggleButton.addEventListener('click', function () {
        // Toggle visibility of the two sets of columns
        firstSet.classList.toggle('hidden');
        secondSet.classList.toggle('hidden');
    });
});
