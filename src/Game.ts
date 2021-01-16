import CpuPlayer from "./CpuPlayer";
import Round from "./Round";
import UserPlayer from "./UserPlayer";

const MESSAGE_INPUT_NUMBER_OF_CARD: string = 'ゲームに使用する枚数を入力してください。(3~10)'
const readlineSync = require('readline-sync');

class Game {
  private userPlayer: UserPlayer;
  private cpuPlayer: CpuPlayer;
  private rounds: Array<Round>;

  public constructor(numOfCards: number) {
    this.userPlayer = new UserPlayer(numOfCards);
    this.cpuPlayer = new CpuPlayer(numOfCards);
    this.rounds = [...Array(numOfCards)].map(_ => new Round());
  }

  start(): void {
    this.rounds = this.rounds.map((r, i) => {
      const numOfRound = i + 1;
      console.log(numOfRound + '回戦');
      console.log('どのカードを出しますか？(出したいカードの数字を入力してください)');
      console.log(this.userPlayer.getHand());
      const input = readlineSync.question(MESSAGE_INPUT_NUMBER_OF_CARD);
      const yourCard = this.userPlayer.playCard(Number(input));
      const cpuCard = this.cpuPlayer.playCard();
      if(yourCard > cpuCard){
        r.setWin();
      }
      else if(yourCard === cpuCard) {
        r.setLose();
      }
      else {
      }
        r.setDraw();
      return r;
    });
  }
}

export default Game;