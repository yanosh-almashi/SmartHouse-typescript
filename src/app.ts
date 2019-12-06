import House from './house';
import CoffeeMachine from './coffeeMachine';
import AirConditioner from './airConditioner';


const house = new House('asd');

const coffeeMachine = new CoffeeMachine('afasf', 200);

const coffeeMachine1 = new CoffeeMachine('afa', 200);



house.addDevice(coffeeMachine);
house.addDevice(coffeeMachine1);

console.log(house.getDevices());

house.deleteDeviceByName('afa');


console.log(house.getDevices());

house.deleteAllDevices();

console.log(house.getDevices());

