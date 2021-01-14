import Settings from "../Settings";

const settings = new Settings();

const NUM_OF_CARDS_TOO_BIGGER = 11;
const NUM_OF_CARDS_TOO_SMALLER = 2;
const NUM_OF_CARDS_NORMAL = 8;

test('set num of cards', () => {
    const settings = new Settings();
    settings.setNumOfCards(NUM_OF_CARDS_NORMAL);
    expect(NUM_OF_CARDS_NORMAL).toBe(settings.getNumOfCards());
});

test('set num of card too bigger', () => {
    const settings = new Settings();
    expect(() => {
        settings.setNumOfCards(NUM_OF_CARDS_TOO_BIGGER);
    }).toThrow();
});

test('set num of card too smaller', () => {
    const settings = new Settings();
    expect(() => {
        settings.setNumOfCards(NUM_OF_CARDS_TOO_SMALLER);
    }).toThrow();
});