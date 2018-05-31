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


var flipCard = function(cardId) {
  console.log("User flipped the " + cards[cardId].rank + ' of ' + cards[cardId].suit);
  console.log(cards[cardId].cardImage);
  cardsInPlay.push(cards[cardId]);
  if (cardsInPlay.length === 2) {
    //call compare function
    console.log(compareCards(cardsInPlay[0].rank,cardsInPlay[1].rank));
  }
}

var compareCards = function(card1, card2) {
  if (card1 === card2) {
    return "You found a match!";
  }
  return "No match, try again";
}

flipCard(0);
flipCard(1);
