import { Common } from './effects.common';
import { AnimationDefinition } from '@nativescript/core';
import { View } from '@nativescript/core/ui';

export class Effects extends Common {
    private _view: View;

    constructor(view: View) {
        super();
        this._view = view;
    }

    public nativeSpring(animation): Promise<void> {
        // this is where the native android spring animation will be implemeted 
        let def: AnimationDefinition = {
            scale: { x: animation.scale.x, y: animation.scale.y },
            translate: { x: animation.translate.x, y: animation.translate.y },
            delay: animation.delay,
            duration: animation.duration,
            curve: 'spring'
        };
        return this._view.animate(def);
    }
}

View.prototype.spring = function (duration, animation) {
    if (duration === void 0) { duration = Effects.defaultDuration; }

    const msDuration = Effects.getMsValue(duration);
    if (!animation) {
        animation = {
            translate: {
                x: 0,
                y: -100
            },
            scale: {
                x: 2,
                y: 2
            },
            duration: msDuration,
            delay: 0,
            dampingRatio: 0.3,
            velocity: 2.0,
            options: null
        };
    }
    else {
        animation.duration = msDuration;
    }


    const fx = new Effects(this);
    return fx.nativeSpring(animation);
};
