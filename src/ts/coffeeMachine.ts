import CommonDevice from './commonDevice';

export class CoffeeMachine extends CommonDevice {

  protected modes: string[]  = ['espresso', 'cappuchino', 'americano'];
  protected currentMode: number = 0;
  protected ready: boolean = false;

  constructor(protected name: string, protected power: number) {
    super(name);
    this.power = power;
    
  }

  get mode(): string {
    return this.modes[this.currentMode];
  }

  nextMode(): void {
    if (this.currentMode === this.modes.length - 1) {
      this.currentMode = 0;
    } else {
      this.currentMode++;
    }
  }

  previousMode(): void {
    if (this.currentMode === 0) {
      this.currentMode = this.modes.length - 1;
    } else {
      this.currentMode--;
    }
  }

  makeCoffee(): Promise<void>  {
    if (this.state) {
      return  new Promise((resolve, reject) => {
        const makeTime = 20 * this.power;
        setTimeout(() => {
          resolve();
        }, makeTime);
      }).then(() => {
        this.ready = true;
        console.log(`Your ${this.modes[this.currentMode]} is ready`)
      });
    }
  }

  get coffeeReady(): boolean {
    return this.ready;
  }
}

export default  CoffeeMachine;
