"use strict";
exports.__esModule = true;
var Collections = require("typescript-collections");
var coffeeMachine_1 = require("./coffeeMachine");
var airConditioner_1 = require("./airConditioner");
var House = /** @class */ (function () {
    function House(name) {
        this.name = name;
        this.deviceList = new Collections.Dictionary();
        this.name = name;
    }
    House.prototype.getHouseName = function () {
        return this.name;
    };
    House.prototype.setHouseName = function (value) {
        if (typeof value === 'string') {
            this.name = value;
        }
    };
    // protected _isUnique(name: string): boolean {
    //   return !this.deviceList.has(name);
    // }
    House.prototype._isInstanceOf = function (device) {
        return device instanceof coffeeMachine_1["default"] || device instanceof airConditioner_1["default"];
    };
    House.prototype.addDevice = function (device) {
        if (this._isUnique(device.getName())) {
            this.deviceList.set(device.getName(), device);
        }
        else
            console.log("name's already taken");
    };
    House.prototype.getDevices = function () {
        return this.deviceList;
    };
    House.prototype.getDeviceByName = function (name) {
        return this.deviceList.get(name);
    };
    House.prototype.onAll = function () {
        for (var _i = 0, _a = this.deviceList.values(); _i < _a.length; _i++) {
            var value = _a[_i];
            value.on();
        }
    };
    House.prototype.offAll = function () {
        for (var _i = 0, _a = this.deviceList.values(); _i < _a.length; _i++) {
            var value = _a[_i];
            value.off();
        }
    };
    House.prototype.deleteAllDevices = function () {
        this.deviceList.clear();
    };
    House.prototype.deleteDeviceByName = function (name) {
        this.deviceList["delete"](name);
    };
    return House;
}());
exports["default"] = House;
