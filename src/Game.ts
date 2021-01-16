import Config from "./Config";
import UserPlayer from "./UserPlayer";

class Game {
  private settings: Config = new Config();
  private userPlayer: UserPlayer;

  public constructor(numOfCards: number) {
    this.userPlayer = new UserPlayer(numOfCards);
  }

  start(): void {
    console.log('未実装です。');
  }
}

export default Game;