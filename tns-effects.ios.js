"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common = require("./tns-effects-common");
global.moduleMerge(common, exports);
var ViewEffects = (function () {
    function ViewEffects(view) {
        this._view = view;
    }
    ViewEffects.prototype.test = function (s) {
        if (s === void 0) { s = 4; }
    };
    ViewEffects.prototype.nativeSpring = function (animation) {
        var _this = this;
        var aTrans = { x: 0, y: 0 };
        var aScale = { x: 1, y: 1 };
        if (animation.translate) {
            if (animation.translate.x)
                aTrans.x = animation.translate.x;
            if (animation.translate.y)
                aTrans.y = animation.translate.y;
        }
        if (animation.scale) {
            if (animation.scale.x)
                aScale.x = animation.scale.x;
            if (animation.scale.y)
                aScale.y = animation.scale.y;
        }
        return new Promise(function (resolve, reject) {
            try {
                UIView.animateWithDurationDelayUsingSpringWithDampingInitialSpringVelocityOptionsAnimationsCompletion(animation.duration / 1000, animation.delay / 1000, animation.dampingRatio, animation.velocity, animation.options, function () {
                    _this._view.translateX = aTrans.x;
                    _this._view.translateY = aTrans.y;
                    _this._view.scaleX = aScale.x;
                    _this._view.scaleY = aScale.y;
                }, resolve);
            }
            catch (ex) {
                reject();
            }
        });
    };
    return ViewEffects;
}());
exports.ViewEffects = ViewEffects;
