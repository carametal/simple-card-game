import UserPlayer from "./UserPlayer";

class Game {
  private userPlayer: UserPlayer;

  public constructor(numOfCards: number) {
    this.userPlayer = new UserPlayer(numOfCards);
  }

  start(): void {
    console.log('未実装です。');
  }
}

export default Game;