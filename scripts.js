var imageFound = true; // Check if an NFT image is found by the camera

// Picks a random card
function getRandomCard() {
    var cards = ["card1", "card2", "card3"];
    var randomNo = Math.floor(Math.random() * cards.length);
    return cards[randomNo];
}

// Function to display a random card
function displayRandomCard() {
    var randomCardId = getRandomCard();
    var randomCard = document.getElementById(randomCardId);
    if (randomCard) {
        // Hide all cards first
        document.querySelectorAll('[id^="card"]').forEach(card => {
            card.setAttribute("visible", false);
        });
        // Then display the random card
        randomCard.setAttribute("visible", true);
    }
}

// Event listener for marker found
document.querySelector('a-nft').addEventListener('markerFound', function (event) {
    if (imageFound) {
        displayRandomCard();
        imageFound = false; // Update flag after first time
    }
});

// Event listener for marker lost
document.querySelector('a-nft').addEventListener('markerLost', function (event) {
    imageFound = true; // Reset flag when marker is lost
});