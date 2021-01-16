import { DEFAULT_ECDH_CURVE } from "tls";
import Card from "./Card";
import Hand from "./Hand";

export default class UserPlayer {

  static DEFAULT_NUM_OF_CARDS = 5;
  private hand: Hand;

  public constructor(numOfCards: number) {
    this.hand = new Hand(numOfCards);
  }

  public getHand() : Hand {
    return this.hand;
  }

  public showHand() :Array<number> {
    const hand = this.hand;
    const numbers = hand.getCards().map(c => c.number);
    return numbers;
  }

  public playCard(cardNumber: number = UserPlayer.DEFAULT_NUM_OF_CARDS): Card {
    return this.hand.playCard(cardNumber);
  }
}