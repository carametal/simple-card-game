import Game from "../Game";

const spyLog = jest.spyOn(console, 'log');
spyLog.mockImplementation(x => x);

const game = new Game();
test('start', () => {
  game.start();
  expect(console.log).toBeCalled();
  expect(spyLog.mock.calls[0][0]).toBe(Game.START_MESSAGE);
  spyLog.mockReset();
  spyLog.mockRestore();
});