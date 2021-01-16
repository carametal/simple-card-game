import Card from "../Card";
import Hand from "../Hand";

const NUM_OF_CARDS = 7;
const CARD_NUMBER_OF_PLAY = 4;

test('make hand', () => {
  const hand = new Hand(NUM_OF_CARDS);
  expect(NUM_OF_CARDS).toBe(hand.getCards().length);
  const cards = [...Array(NUM_OF_CARDS)].map((_, i) => new Card(i+1));
  expect(cards).toStrictEqual(hand.getCards());
});

test('play a card', () => {
  const hand = new Hand(NUM_OF_CARDS);
  const card = hand.playCard(CARD_NUMBER_OF_PLAY);
  const expectingCard = new Card(CARD_NUMBER_OF_PLAY);
  expect(expectingCard).toStrictEqual(card);
  expect(NUM_OF_CARDS - 1).toBe(hand.getCards().length);
});