class Card {
  constructor(point, suit) {
    this.point = point;
    this.suit = suit;
  }
  myCard() {
    return `${this.point} ${this.suit}`;
  }
}

let myCard = new Card(5, "diamonds");
console.log(myCard);
