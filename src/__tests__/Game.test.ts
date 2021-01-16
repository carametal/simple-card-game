import Game from "../Game";

const spyLog = jest.spyOn(console, 'log');
spyLog.mockImplementation(x => x);
const NUM_OF_CARDS = 8;

test('make game', () => {
  expect(() => new Game(NUM_OF_CARDS)).not.toThrow();
});