import Card from "./Card";

export const RoundResult = {
  Win: 'win',
  Lose: 'lose',
  Draw: 'draw'
}

export default class Round {
  private result!: string;

  public setWin(): void {
    this.result = RoundResult.Win;
  }

  public setLose(): void {
    this.result = RoundResult.Lose;
  }

  public setDraw(): void {
    this.result = RoundResult.Draw;
  }

  public getResult(): string {
    return this.result;
  }

  judge(playerCard: Card, cpuCard: Card): string {
    if(playerCard.number > cpuCard.number) {
      return RoundResult.Win
    } else if (cpuCard.number > playerCard.number) {
      return RoundResult.Lose;
    } else {
      return RoundResult.Draw;
    }
  }
}