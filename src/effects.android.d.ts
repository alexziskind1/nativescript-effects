import { Common } from './effects.common';
import {View} from '@nativescript/core/ui';
export declare class Effects extends Common {
    private _view;
    constructor(view: View);
    nativeSpring(animation: any): Promise<void>;
}
