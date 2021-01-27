class Card {
  constructor(point, suit) {
    this.point = point;
    this.suit = suit;
  }
}
class Hand {
  constructor() {
    this.cards = [];
  }
  addCard(card) {
    this.hand.push(card);
  }
  addPoints() {
    let getPoints = 0;
    this.hand.map((card) => {
      if (card.point >= 16) {
        card.point = 16;
      }
      return (getPoints += card.point);
    });
    return getPoints;
  }
}
var myHand = new Hand();
myHand.addCard(new Card(5, "diamonds"));
myHand.addCard(new Card(13, "spades"));
console.log(myHand);
console.log(myHand.addPoints());
