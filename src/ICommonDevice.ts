interface ICommonDevice {
  getName(): string;

  setName(name: string): void;

  getState(): boolean;

  on(): void;

  off(): void;
}

export default ICommonDevice;
