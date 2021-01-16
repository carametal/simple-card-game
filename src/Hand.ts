import Card from "./Card";

export default class Hand {
  private cards: Array<Card>;
  static NUM_OF_PLAY_CARD_AT_ONE_TIME = 1;

  public constructor(numOfCards: number) {
    this.cards = [...Array(numOfCards)].map((_, i) => new Card(i + 1));
  }

  public getCards() : Array<Card>{
    return this.cards;
  }

  public playCard(cardNumber: number) : Card {
    const index = this.cards.findIndex(c => c.number === cardNumber);
    if(index == -1){
      throw new Error('手札にないカードです。もう一度入力してください');
    }
    const playCards = this.cards.splice(index, Hand.NUM_OF_PLAY_CARD_AT_ONE_TIME);
    return playCards[0];
  }
}