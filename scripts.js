var imageFound = true; // Check if an NFT image is found by the camera

// Picks a random card
function getRandomCard(nftID) {
    var cards = [nftID+"card1",nftID+"card2",nftID+"card3"];
    var randomNo = Math.floor(Math.random() * cards.length);
    return cards[randomNo];
}

// Sets a random card as visible
function displayRandomCard(nftID) {
    var randomCardId = getRandomCard(nftID);
    var randomCard = document.getElementById(randomCardId);
    if (randomCard) {
        randomCard.setAttribute("visible", true);
    }
}

// Event listener for marker found
document.querySelector('a-nft').addEventListener('markerFound', function (event) {
    var nftID = $(this).attr('id');
    if (imageFound) {
        displayRandomCard(nftID);
        imageFound = false; // Update flag after first time
    }
    
    
});

// Event listener for marker lost
document.querySelector('a-nft').addEventListener('markerLost', function (event) {
    var nftID = $(this).attr('id');
    $('a-text[id^="'+nftID+'"]').attr("visible", false);

    imageFound = true; // Reset flag when marker is lost
});


    
