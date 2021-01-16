import CpuPlayer from "./CpuPlayer";
import Round, { RoundResult } from "./Round";
import UserPlayer from "./UserPlayer";

const MESSAGE_INPUT_NUMBER_OF_PLAY_CARD: string = 'どのカードを出しますか？(出したいカードの数字を入力してください)';
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
      console.log(this.userPlayer.showHand());
      const input = readlineSync.question(MESSAGE_INPUT_NUMBER_OF_PLAY_CARD);
      const playerCard = this.userPlayer.playCard(Number(input));
      const cpuCard = this.cpuPlayer.playCard();
      console.log(`あなたのカード:${playerCard.number}`);
      console.log(`CPUのカード:${cpuCard.number}`);
      const roundResult = r.judge(playerCard, cpuCard);
      if(roundResult === RoundResult.Win){
        console.log('あなたの勝ちです!!');
      }
      else if(roundResult === RoundResult.Lose) {
        console.log('あなたの負けです...');
        r.setLose();
      }
      else if (roundResult === RoundResult.Draw) {
        console.log('引き分けです。');
      }else {
        throw new Error('未実装のRoundResultです。');
      }
      return r;
    });
  }

  showResult(): void {
    console.log('******************');
    console.log('試合終了。結果は...');
    const numOfRounds = this.rounds.length;
    const countWin = this.rounds.filter(r => r.getResult() === RoundResult.Win).length;
    const countLose = this.rounds.filter(r => r.getResult() === RoundResult.Lose).length;
    const countDraw = this.rounds.filter(r => r.getResult() === RoundResult.Draw).length;
    console.log(`${numOfRounds}戦 ${countWin}勝 ${countLose}敗 ${countDraw}分`);
    if (countWin > countLose) {
      console.log('あなたの勝ちです!!');
    }
    else if (countLose > countWin) {
      console.log('あなたの負けです...');
    }
    else {
      console.log('引き分けです。');
    }
  }
}

export default Game;