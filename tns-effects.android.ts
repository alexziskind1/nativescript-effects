import common = require("./tns-effects-common");
import { View } from "ui/core/view";
import { AnimationDefinition } from 'ui/animation';

global.moduleMerge(common, exports);

export class ViewEffects {
    private _view: View;

    constructor(view: View) {
        this._view = view;
    }

    public nativeSpring(animation): Promise<void> {
        //this is where the native android spring animation will be implemeted 
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