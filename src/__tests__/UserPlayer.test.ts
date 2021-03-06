import Card from "../Card";
import Hand from "../Hand";
import UserPlayer from "../UserPlayer";

const NUM_OF_CARDS = 7;
const CARD_NUMBER_OF_PLAY = 4;
const CARD_OF_PLAY = new Card(CARD_NUMBER_OF_PLAY);
const HAND = new Hand(NUM_OF_CARDS);
const EXPECTED_NUMBER_ARRAY_OF_HAND = [...Array(NUM_OF_CARDS)].map((_, i) => i + 1);

test('make player', () => {
  expect(() => new UserPlayer(NUM_OF_CARDS)).not.toThrow();
});

test('get hand', () => {
  const player = new UserPlayer(NUM_OF_CARDS);
  expect(HAND).toStrictEqual(player.getHand());
});

test('show hand', () => {
  const player = new UserPlayer(NUM_OF_CARDS);
  expect(player.showHand()).toStrictEqual(EXPECTED_NUMBER_ARRAY_OF_HAND);
});

test('play card', () => {
  const player = new UserPlayer(NUM_OF_CARDS);
  const card = player.playCard(CARD_NUMBER_OF_PLAY);
  expect(CARD_OF_PLAY).toStrictEqual(card);
})