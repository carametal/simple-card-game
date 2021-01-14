export default class Settings {
    static ERROR_MESSAGES_NUM_OF_CARDS_IS_TOO_BIGGER: string = 
         'ゲームに利用できるカードは10枚までです。';

    static ERROR_MESSAGES_NUM_OF_CARDS_IS_TOO_SMALLER: string = 
         'ゲームに利用できるカードは10枚までです。';

    static DEFAULT_NUM_OF_CARDS: number = 5;

    private numOfCards: number = Settings.DEFAULT_NUM_OF_CARDS;

    public setNumOfCards(num: number): void {
        if(num > 10) {
            throw new Error(Settings.ERROR_MESSAGES_NUM_OF_CARDS_IS_TOO_BIGGER);
        }
        if(3 > num) {
            throw new Error(Settings.ERROR_MESSAGES_NUM_OF_CARDS_IS_TOO_SMALLER);
        }
        this.numOfCards = num;
    }

    public getNumOfCards(): number {
        return this.numOfCards;
    }
}