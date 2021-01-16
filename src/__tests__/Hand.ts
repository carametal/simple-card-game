import Card from "../Card";
import Hand from "../Hand";

const NUM_OF_CARDS = 7;

test('make hand', () => {
  const hand = new Hand(NUM_OF_CARDS);
  expect(NUM_OF_CARDS).toBe(hand.getCards().length);
  const cards = [...Array(NUM_OF_CARDS)].map((_, i) => new Card(i+1));
  expect(cards).toStrictEqual(hand.getCards());
});