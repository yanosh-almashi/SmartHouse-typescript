import CommonDevice from './commonDevice';

export class AirConditioner extends CommonDevice {
  
  protected currentTemperature: number = 0;

  constructor(protected name: string, protected minTemperature: number, protected maxTemperature: number, protected step: number) {
    super(name);
    this.minTemperature = minTemperature;
    this.maxTemperature = maxTemperature;
    this.step = step
    
  }

  increaseTemperature(): void {
    if (this.currentTemperature + this.step > this.maxTemperature) {
      this.currentTemperature = this.maxTemperature;
    } else {
      this.currentTemperature += this.step;
    }
  }

  decreaseTemperature(): void {
    if (this.currentTemperature - this.step < this.minTemperature) {
      this.currentTemperature = this.minTemperature;
    } else {
      this.currentTemperature -= this.step;
    }
  }

  get curTemperature(): number {
    return this.currentTemperature;
  }
}

export default AirConditioner;
