export class CommonDevice {
  protected state: boolean = false;
  constructor(protected name: string) {
    this.name = name;
    this.state = false;
  }

  get deviceName(): string {
    return this.name;
  }

  set deviceName(value: string) {
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

  get deviceState(): boolean {
    return this.state;
  }
}

export default CommonDevice;
