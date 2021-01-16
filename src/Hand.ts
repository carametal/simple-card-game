import Card from "./Card";

export default class Hand {
  private cards: Array<Card>;

  public constructor(numOfCards: number) {
    this.cards = [...Array(numOfCards)].map((_, i) => new Card(i + 1));
  }

  public getCards() : Array<Card>{
    return this.cards;
  }
}