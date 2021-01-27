class Deck {
  constructor(point, suit) {
    this.point = point;
    this.suit = suit;
  }
}

class cardDeck extends Deck {
  constructor() {
    this.deck = [];
    this.points = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11", //Jack
      "12", //Queen
      "13", //King
      "14", //Ace
      "15", //Little Joker
      "16", //Big Joker
    ];
    this.suit = ["heats", "diamonds", "clubs", "spades"];
    this.hand = [];
  }
}
