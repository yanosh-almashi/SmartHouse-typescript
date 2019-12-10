import CommonDevice from './commonDevice';

export class AirConditioner extends CommonDevice {
  
  protected currentTemperature: number = 20;

  constructor(protected name: string, protected minTemperature: number, protected maxTemperature: number, protected step: number) {
    super(name);
    
  }

  increaseTemperature(): void {
    if(this.getState()){
      if (this.currentTemperature + this.step > this.maxTemperature) {
        this.currentTemperature = this.maxTemperature;
      } else {
        this.currentTemperature += this.step;
      }
    }
  }

  decreaseTemperature(): void {
    if(this.getState()) {
      if (this.currentTemperature - this.step < this.minTemperature) {
        this.currentTemperature = this.minTemperature;
      } else {
        this.currentTemperature -= this.step;
      }
    }
  }

  getCurTemperature(): number {
    if(this.getState()) {
      return this.currentTemperature;
    }
   
  }
}

export default AirConditioner;
