import CoffeeMachine from './coffeeMachine';
import AirConditioner from './airConditioner';
import CommonDevice from './commonDevice';
import  ICommonDevice  from './ICommonDevice';

  class House<T extends ICommonDevice> {
  protected deviceList: Array<T> = []; 
  constructor(protected name: string) {
    this.name = name;
  }

  getHouseName(): string {
    return this.name;
  }

  setHouseName(value: string) {
    if (typeof value === 'string') {
      this.name = value;
    }
  }

  protected _isUnique(name: string): boolean {
    for (let device of this.deviceList) {
      if(device.getName() === name) {
        return false
      }
    }
    return true;
  }

  protected _isInstanceOf(device: T): boolean {
    return device instanceof CoffeeMachine || device instanceof AirConditioner;
  }

  addDevice(device: T): void {
    if (this._isUnique(device.getName())) {
      this.deviceList.push(device);
    }
  }

  getDevices(): Array<T> {
    return this.deviceList;
  }

  getDeviceByName(name: string): T {
    return this.deviceList.find(device => device.getName() === name);
  }

  onAll(): void {
    this.deviceList.forEach(device => {
      device.on();
  });
  }

  offAll(): void {
    this.deviceList.forEach(device => {
      device.off();
  });
  }

  deleteAllDevices(): void {
    this.deviceList = [];
  }

  deleteDeviceByName(name: string):void {
    this.deviceList = this.deviceList.filter(device => device.getName() !== name);
  }
}

export default House;
