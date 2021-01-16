import Round from "../Round";

const STRING_WIN = 'win';

test('make round', () => {
  expect(() => new Round()).not.toThrow();
});

test('set & get result', () => {
  const round = new Round();
  round.setResult(STRING_WIN);
  expect(round.getResult()).toBe(STRING_WIN);
});