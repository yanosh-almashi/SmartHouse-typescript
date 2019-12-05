import * as Collections from 'typescript-collections';
import CoffeeMachine from './coffeeMachine';
import AirConditioner from './airConditioner';
import CommonDevice from './commonDevice';
import  ICommonDevice  from './ICommonDevice';

  class House<T extends ICommonDevice> {
  protected deviceList = new Collections.Dictionary<string, T>();
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
    return !this.deviceList.containsKey(name);
  }

  protected _isInstanceOf(device: T): boolean {
    return device instanceof CoffeeMachine || device instanceof AirConditioner;
  }

  addDevice(device: T): void {
    if (this._isUnique(device.getName())) {
      this.deviceList.setValue(device.getName(), device);
    }
  }

  getDevices(): Collections.Dictionary<string, T> {
    return this.deviceList;
  }

  getDeviceByName(name: string): T {
    if (this.deviceList.containsKey(name)) {
      return this.deviceList.getValue(name);
    }
  }

  onAll(): void {
    for (const value of this.deviceList.values()) {
      value.on();
    }
  }

  offAll(): void {
    for (const value of this.deviceList.values()) {
      value.off();
    }
  }

  deleteAllDevices(): void {
    this.deviceList.clear();
  }

  deleteDeviceByName(name: string):void {
    this.deviceList.remove(name);
  }
}

export default House;
