import Card from "./Card";
import Hand from "./Hand";
import Player from "./Player";

export default class UserPlayer implements Player {
  private hand: Hand;

  public constructor(numOfCards: number) {
    this.hand = new Hand(numOfCards);
  }

  public getHand() : Hand {
    return this.hand;
  }

  public playCard(cardNumber: number): Card {
    return this.hand.playCard(cardNumber);
  }
}