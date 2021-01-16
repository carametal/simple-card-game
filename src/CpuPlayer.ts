import Card from "./Card";
import Hand from "./Hand";

export default class CpuPlayer {
  private hand: Hand;

  public constructor(numOfCards: number) {
    this.hand = new Hand(numOfCards);
  }

  public getHand(): Hand {
    return this.hand;
  }

  public playCard(): Card {
    return this.playCardRamdom();
  }

  private playCardRamdom(): Card {
    const numOfCards = this.getHand().getCards().length;
    const index = Math.floor(Math.random()*numOfCards);
    const card = this.hand.getCards()[index];
    return this.hand.playCard(card.number);
  }
}