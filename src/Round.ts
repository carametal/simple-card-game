import Card from "./Card";

export const RoundResult = {
  Win: 'win',
  Lose: 'lose',
  Draw: 'draw'
}

export default class Round {
  private result!: string;

  judge(playerCard: Card, cpuCard: Card): string {
    if(playerCard.number > cpuCard.number) {
      this.setWin();
      return RoundResult.Win
    } else if (cpuCard.number > playerCard.number) {
      this.setLose();
      return RoundResult.Lose;
    } else {
      this.setDraw();
      return RoundResult.Draw;
    }
  }

  private setWin(): void {
    this.result = RoundResult.Win;
  }

  private setLose(): void {
    this.result = RoundResult.Lose;
  }

  private setDraw(): void {
    this.result = RoundResult.Draw;
  }

  public getResult(): string {
    return this.result;
  }
}