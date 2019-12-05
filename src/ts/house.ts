import CoffeeMachine from './coffeeMachine';
import AirConditioner from './airConditioner';

export class House {
  protected deviceList = new Map<string, Object>();
  constructor(protected name: string) {
    this.name = name;
    this.deviceList = new Map<string, Object>();
  }

  get houseName(): string {
    return this.name;
  }

  set houseName(value: string) {
    if (typeof value === 'string') {
      this.name = value;
    }
  }

  protected _isUnique(name: string): boolean {
    return !this.deviceList.has(name);
  }

  protected _isInstanceOf(device: Object): boolean {
    return device instanceof CoffeeMachine || device instanceof AirConditioner;
  }

  addDevice(device: Object): void {
    if (this._isUnique(device.name) && this._isInstanceOf(device)) {
      this.deviceList.set(device.name, device);
    } else console.log(`name's already taken`);
  }

  get devices(): Map<string, Object> {
    return this.deviceList;
  }

  getDeviceByName(name: string): Object {
    return this.deviceList.get(name);
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
    this.deviceList.delete(name);
  }
}

export default House;
