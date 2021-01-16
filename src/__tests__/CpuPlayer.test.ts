import Card from "../Card";
import CpuPlayer from "../CpuPlayer";
import Hand from "../Hand";

const NUM_OF_CARDS = 7;
const HAND = new Hand(NUM_OF_CARDS);

test('make cpu player', () => {
  expect(() => new CpuPlayer(NUM_OF_CARDS)).not.toThrow();
});

test('get hand', () => {
  const cpuPlayer = new CpuPlayer(NUM_OF_CARDS);
  expect(HAND).toStrictEqual(cpuPlayer.getHand());
});

test('play card', () => {
  const cpuPlayer = new CpuPlayer(NUM_OF_CARDS);
  const card = cpuPlayer.playCard();
  expect(NUM_OF_CARDS - 1).toBe(cpuPlayer.getHand().getCards().length)
  expect(cpuPlayer.getHand().getCards()).not.toContain(card);
});
