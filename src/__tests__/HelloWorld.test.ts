import HelloWorld from '../HelloWorld';

const helloWorld = new HelloWorld();

test('print', () => {
  expect(helloWorld.print()).toBe('Hello,World.');
});