import { Common } from './effects.common';
import * as viewModule from 'tns-core-modules/ui/core/view';
export declare class Effects extends Common {
    private _view;
    constructor(view: viewModule.View);
    nativeSpring(animation: any): Promise<any>;
}
