export const RoundResult = {
  Win: 'win',
  Lose: 'lose',
  Draw: 'draw'
}

export default class Round {
  private result!: string;

  setWin(): void {
    this.result = RoundResult.Win;
  }

  setLose(): void {
    this.result = RoundResult.Lose;
  }

  setDraw(): void {
    this.result = RoundResult.Draw;
  }

  getResult(): string {
    return this.result;
  }
}