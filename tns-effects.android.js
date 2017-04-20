"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common = require("./tns-effects-common");
global.moduleMerge(common, exports);
var ViewEffects = (function () {
    function ViewEffects(view) {
        this._view = view;
    }
    ViewEffects.prototype.nativeSpring = function (animation) {
        //this is where the native android spring animation will be implemeted 
        return this._view.animate(animation);
    };
    return ViewEffects;
}());
exports.ViewEffects = ViewEffects;
