class Card {
  constructor(point, suit) {
    this.point = point;
    this.suit = suit;
  }
  getImageURL() {
    return `images/${this.point}_of_${this.suit}.png`;
  }
}

let myCard = new Card(5, "diamonds");
console.log(myCard);
