"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var commonDevice_1 = require("./commonDevice");
var AirConditioner = /** @class */ (function (_super) {
    __extends(AirConditioner, _super);
    function AirConditioner(name, minTemperature, maxTemperature, step) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.minTemperature = minTemperature;
        _this.maxTemperature = maxTemperature;
        _this.step = step;
        _this.currentTemperature = 0;
        _this.minTemperature = minTemperature;
        _this.maxTemperature = maxTemperature;
        _this.step = step;
        return _this;
    }
    AirConditioner.prototype.increaseTemperature = function () {
        if (this.currentTemperature + this.step > this.maxTemperature) {
            this.currentTemperature = this.maxTemperature;
        }
        else {
            this.currentTemperature += this.step;
        }
    };
    AirConditioner.prototype.decreaseTemperature = function () {
        if (this.currentTemperature - this.step < this.minTemperature) {
            this.currentTemperature = this.minTemperature;
        }
        else {
            this.currentTemperature -= this.step;
        }
    };
    AirConditioner.prototype.getCurTemperature = function () {
        return this.currentTemperature;
    };
    return AirConditioner;
}(commonDevice_1["default"]));
exports.AirConditioner = AirConditioner;
exports["default"] = AirConditioner;
