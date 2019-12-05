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
var CoffeeMachine = /** @class */ (function (_super) {
    __extends(CoffeeMachine, _super);
    function CoffeeMachine(name, power) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.power = power;
        _this.modes = ['espresso', 'cappuchino', 'americano'];
        _this.currentMode = 0;
        _this.ready = false;
        _this.power = power;
        return _this;
    }
    CoffeeMachine.prototype.getMode = function () {
        return this.modes[this.currentMode];
    };
    CoffeeMachine.prototype.nextMode = function () {
        if (this.currentMode === this.modes.length - 1) {
            this.currentMode = 0;
        }
        else {
            this.currentMode++;
        }
    };
    CoffeeMachine.prototype.previousMode = function () {
        if (this.currentMode === 0) {
            this.currentMode = this.modes.length - 1;
        }
        else {
            this.currentMode--;
        }
    };
    CoffeeMachine.prototype.makeCoffee = function () {
        var _this = this;
        if (this.state) {
            return new Promise(function (resolve) {
                var makeTime = 20 * _this.power;
                setTimeout(function () {
                    resolve();
                }, makeTime);
            }).then(function () {
                _this.ready = true;
                console.log("Your " + _this.modes[_this.currentMode] + " is ready");
            });
        }
    };
    CoffeeMachine.prototype.getCoffeeReady = function () {
        return this.ready;
    };
    return CoffeeMachine;
}(commonDevice_1["default"]));
exports.CoffeeMachine = CoffeeMachine;
exports["default"] = CoffeeMachine;
