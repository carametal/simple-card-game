import Card from "../Card";

const CARD_NUMBER = 6;

test('make card', () => {
  const card = new Card(CARD_NUMBER);
  expect(CARD_NUMBER).toBe(card.number);
})
