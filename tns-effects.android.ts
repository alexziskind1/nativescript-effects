import common = require("./tns-effects-common");
import {View} from "ui/core/view";

global.moduleMerge(common, exports);

export class ViewEffects {
    private _view: View;
    
    constructor(view: View) {
        this._view = view;
    }
    
    public nativeSpring(animation): Promise<void> {
        //this is where the native android spring animation will be implemeted 
        return this._view.animate(animation);
    }
}