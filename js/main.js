/* Bonuses: Add reset button to the HTML and set up an event
in the JavaScript file so the user can reset the game after playing.

Extra challenge, consider how to keep track of and display the user's
score.

My challenge: how to tell the user if they found a match without using
the console or those godawful alerts.
*/

// Creates an array of card object literals
var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: 'queen',
    suit: 'diamonds',
    cardImage: 'images/queen-of-diamonds.png'
  },
  {
    rank: 'king',
    suit: 'hearts',
    cardImage: 'images/king-of-hearts.png'
  },
  {
    rank: 'king',
    suit: 'diamonds',
    cardImage: 'images/king-of-diamonds.png'
  }
];
var cardsInPlay = [];

// compares two cards to see if they match
var compareCards = function(card1, card2) {
  if (card1 === card2) {
    return "You found a match!";
  }
  return "No match, try again";
}

// flips a card and adds it to the cards in play
var flipCard = function() {
  var cardId = this.getAttribute('data-id');
  console.log("User flipped the " + cards[cardId].rank + ' of ' + cards[cardId].suit);
  this.setAttribute('src', cards[cardId].cardImage);
  cardsInPlay.push(cards[cardId]);
  if (cardsInPlay.length === 2) {
    //call compare function
    console.log(compareCards(cardsInPlay[0].rank,cardsInPlay[1].rank));
  }
}

var createBoard = function() {
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
}
createBoard();
