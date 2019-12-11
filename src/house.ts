import ICommonDevice from './ICommonDevice';

class House<T extends ICommonDevice> {
  protected deviceList: Array<T> = [];

  constructor(protected name: string) {}

  getHouseName(): string {
    return this.name;
  }

  setHouseName(value: string): void {
    this.name = value;
  }

  private isUnique(name: string): boolean {
    for (const device of this.deviceList) {
      if (device.getName() === name) {
        return false;
      }
    }
    return true;
  }

  addDevice(device: T): void {
    if (this.isUnique(device.getName())) {
      this.deviceList.push(device);
    }
  }

  getDevices(): Array<T> {
    return this.deviceList;
  }

  getDeviceByName(name: string): T {
    return this.deviceList.find((device) => device.getName() === name);
  }

  onAll(): void {
    this.deviceList.forEach((device) => {
      device.on();
    });
  }

  offAll(): void {
    this.deviceList.forEach((device) => {
      device.off();
    });
  }

  deleteAllDevices(): void {
    this.deviceList = [];
  }

  deleteDeviceByName(name: string): void {
    this.deviceList = this.deviceList.filter(
      (device) => device.getName() !== name,
    );
  }
}

export default House;
