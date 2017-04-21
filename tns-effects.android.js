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
        var def = {
            scale: { x: animation.scale.x, y: animation.scale.y },
            translate: { x: animation.translate.x, y: animation.translate.y },
            delay: animation.delay,
            duration: animation.duration,
            curve: 'spring'
        };
        return this._view.animate(def);
    };
    return ViewEffects;
}());
exports.ViewEffects = ViewEffects;
