import Hand from "./Hand";

export default interface Player {
  getHand(): Hand;
}