import Round, { RoundResult } from "../Round";

test('make round', () => {
  expect(() => new Round()).not.toThrow();
});

test('set win & get win', () => {
  const round = new Round();
  round.setWin();
  expect(round.getResult()).toBe(RoundResult.Win);
});

test('set lose & set lose', () => {
  const round = new Round();
  round.setLose();
  expect(round.getResult()).toBe(RoundResult.Lose);
})

test('set draw & set draw', () => {
  const round = new Round();
  round.setDraw();
  expect(round.getResult()).toBe(RoundResult.Draw);
})