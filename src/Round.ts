export default class Round {
  private result!: string;

  setResult(str: string): void {
    this.result = str;
  }

  getResult(): string {
    return this.result;
  }
}