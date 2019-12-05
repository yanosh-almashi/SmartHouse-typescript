import   ICommonDevice  from './ICommonDevice';

abstract  class CommonDevice implements ICommonDevice{
  protected state: boolean = false;
  constructor(protected name: string) {
    this.name = name;
    this.state = false;
  }

  getName(): string {
    return this.name;
  }

  setName(value: string) {
    if (typeof value === "string") {
      this.name = value;
    }
  }

  on(): void {
    this.state = true;
  }

  off(): void {
    this.state = false;
  }

  getState(): boolean {
    return this.state;
  }
}

export default CommonDevice;
