class Game {
  static START_MESSAGE: string = 'シンプルなカードゲームです。\n'
    + '大きい数を出した方が多い方が勝ちです。';
  start(): void {
    console.log(Game.START_MESSAGE);
  }
}

export default Game;