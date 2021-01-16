import Card from "../Card";
import Round, { RoundResult } from "../Round";

test('make round', () => {
  expect(() => new Round()).not.toThrow();
});

test('judge win', () => {
  const round = new Round();
  const playerCard = new Card(6);
  const cpuCard = new Card(5);
  round.judge(playerCard, cpuCard);
  expect(round.getResult()).toBe(RoundResult.Win);
});

test('judge lose', () => {
  const round = new Round();
  const playerCard = new Card(8);
  const cpuCard = new Card(9);
  round.judge(playerCard, cpuCard);
  expect(round.getResult()).toBe(RoundResult.Lose);
});

test('judge draw', () => {
  const round = new Round();
  const playerCard = new Card(3);
  const cpuCard = new Card(3);
  round.judge(playerCard, cpuCard);
  expect(round.getResult()).toBe(RoundResult.Draw);
});