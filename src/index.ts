import Game from "./Game";

const readlineSync = require('readline-sync');

const START_MESSAGE: string = 'シンプルなカードゲームです。\n'
  + '大きい数を出した方が多い方が勝ちです。';

const MESSAGE_INPUT_NUMBER_OF_CARD: string = 'ゲームに使用する枚数を入力してください。(3~10)'

console.log(START_MESSAGE);
const input = readlineSync.question(MESSAGE_INPUT_NUMBER_OF_CARD);
const game = new Game(+input);
console.log(`1から${input}までの${input}枚のカードでゲームを開始します。`);
game.start();
game.showResult();