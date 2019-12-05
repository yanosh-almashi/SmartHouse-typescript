"use strict";
exports.__esModule = true;
var CommonDevice = /** @class */ (function () {
    function CommonDevice(name) {
        this.name = name;
        this.state = false;
        this.name = name;
        this.state = false;
    }
    CommonDevice.prototype.getName = function () {
        return this.name;
    };
    CommonDevice.prototype.setName = function (value) {
        if (typeof value === "string") {
            this.name = value;
        }
    };
    CommonDevice.prototype.on = function () {
        this.state = true;
    };
    CommonDevice.prototype.off = function () {
        this.state = false;
    };
    CommonDevice.prototype.getState = function () {
        return this.state;
    };
    return CommonDevice;
}());
exports["default"] = CommonDevice;
