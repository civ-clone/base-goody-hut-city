"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _cityRegistry;
Object.defineProperty(exports, "__esModule", { value: true });
exports.City = void 0;
const CityRegistry_1 = require("@civ-clone/core-city/CityRegistry");
const RuleRegistry_1 = require("@civ-clone/core-rule/RuleRegistry");
const Action_1 = require("@civ-clone/core-goody-hut/Action");
const City_1 = require("@civ-clone/core-city/City");
class City extends Action_1.default {
    constructor(goodyHut, unit, cityRegistry = CityRegistry_1.instance) {
        super(goodyHut, unit);
        _cityRegistry.set(this, void 0);
        __classPrivateFieldSet(this, _cityRegistry, cityRegistry);
    }
    perform(ruleRegistry = RuleRegistry_1.instance) {
        const player = this.unit().player(), city = new City_1.default(player, this.goodyHut().tile(), player.civilization().getCityName(true), ruleRegistry);
        __classPrivateFieldGet(this, _cityRegistry).register(city);
    }
}
exports.City = City;
_cityRegistry = new WeakMap();
exports.default = City;
//# sourceMappingURL=City.js.map