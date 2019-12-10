import   ICommonDevice  from './ICommonDevice';

  class CommonDevice implements ICommonDevice{
  protected state: boolean = false;
  constructor(protected name: string) {
  }

  getName(): string {
    return this.name;
  }

  setName(value: string) {
      this.name = value;
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
