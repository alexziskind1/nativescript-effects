import common = require("./tns-effects-common");
import {View} from "ui/core/view";

global.moduleMerge(common, exports);

export class ViewEffects {
    private _view: View;
    
    constructor(view: View) {
        this._view = view;
    }
    
    public test(s: number = 4) {
        
    }
    
    public nativeSpring(animation): Promise<void> {
        var aTrans = {x: 0, y: 0};
        var aScale = {x: 1, y: 1};
        
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
        
        return new Promise((resolve,reject) => {
               try { 
                   UIView.animateWithDurationDelayUsingSpringWithDampingInitialSpringVelocityOptionsAnimationsCompletion(
                        animation.duration / 1000,
                        animation.delay /1000,
                        animation.dampingRatio,
                        animation.velocity,
                        animation.options,
                        () => {
                            this._view.translateX = aTrans.x;
                            this._view.translateY = aTrans.y;
                            this._view.scaleX = aScale.x;
                            this._view.scaleY = aScale.y;
                        },
                        resolve
                   );
               }
               catch (ex) {
                   reject();   
               }
        });
    }
}