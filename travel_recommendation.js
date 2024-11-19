document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const cards = document.querySelectorAll('.card');

    function moveCarousel(direction) {
        // Hide current card
        cards[currentIndex].classList.remove('active');

        // Update index
        currentIndex += direction;

        // Wrap around if necessary
        if (currentIndex < 0) {
            currentIndex = cards.length - 1;
        } else if (currentIndex >= cards.length) {
            currentIndex = 0;
        }

        // Show new card
        cards[currentIndex].classList.add('active');
    }

    // Attach event listeners to buttons
    document.querySelector('.nav-button.left').addEventListener('click', () => moveCarousel(-1));
    document.querySelector('.nav-button.right').addEventListener('click', () => moveCarousel(1));
});