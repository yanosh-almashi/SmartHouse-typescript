import CommonDevice from './commonDevice';

class CoffeeMachine extends CommonDevice {
  protected modes: string[] = ['espresso', 'cappuchino', 'americano'];

  protected currentMode = 0;

  protected ready = false;

  constructor(protected name: string, protected power: number) {
    super(name);
  }

  getMode(): string {
    if (this.getState()) {
      return this.modes[this.currentMode];
    }
  }

  nextMode(): void {
    if (this.getState()) {
      if (this.currentMode === this.modes.length - 1) {
        this.currentMode = 0;
      } else {
        this.currentMode++;
      }
    }
  }

  previousMode(): void {
    if (this.getState()) {
      if (this.currentMode === 0) {
        this.currentMode = this.modes.length - 1;
      } else {
        this.currentMode--;
      }
    }
  }

  makeCoffee(): Promise<void> {
    if (this.getState()) {
      return new Promise((resolve) => {
        const makeTime = 20 * this.power;
        setTimeout(() => {
          resolve();
        }, makeTime);
      }).then(() => {
        this.ready = true;
        console.log(`Your ${this.modes[this.currentMode]} is ready`);
      });
    }
  }
}

export default CoffeeMachine;
