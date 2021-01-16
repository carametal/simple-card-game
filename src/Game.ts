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

  public start(): void {
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
      }
      else if (roundResult === RoundResult.Draw) {
        console.log('引き分けです。');
      }else {
        throw new Error('未実装のRoundResultです。');
      }
      return r;
    });
  }

  public showResult(): void {
    console.log('******************');
    console.log('試合終了。結果は...');
    this.printGameResult();
  }

  private printGameResult(): void {
    const numOfRounds = this.rounds.length;
    const numOfWins = this.countWins();
    const numOfLosses = this.countLosses();
    const numOfDraws = this.countDraws();
    console.log(`${numOfRounds}戦 ${numOfWins}勝 ${numOfLosses}敗 ${numOfDraws}分`);
    if (numOfWins > numOfLosses) {
      console.log('あなたの勝ちです!!');
    }
    else if (numOfLosses > numOfWins) {
      console.log('あなたの負けです...');
    }
    else {
      console.log('引き分けです。');
    }
  }

  private countWins(): number {
    return this.rounds.filter(r => r.getResult() === RoundResult.Win).length;
  }

  private countLosses(): number {
    return this.rounds.filter(r => r.getResult() === RoundResult.Lose).length;
  }

  private countDraws(): number {
    return this.rounds.filter(r => r.getResult() === RoundResult.Draw).length
  }
}

export default Game;