var imageFound = false; // Check if an NFT image is found by the camera

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

// When marker is found, grabs a random card from the specified marker group.
$('a-nft').on('markerFound', function () {
    var nftID = $(this).attr('id');
    if (!imageFound) {
        
        displayRandomCard(nftID);
        imageFound = true; 
    }
    
    
});

// When marker is lost, resets all visible attributes and image found variable.
$('a-nft').on('markerLost', function () {
    var nftID = $(this).attr('id');
    $('a-text[id^="'+nftID+'"]').attr("visible", false);
    imageFound = false; 
});


    
