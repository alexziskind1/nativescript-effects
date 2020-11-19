import { Common } from './effects.common';
import { View } from '@nativescript/core/ui';

declare module '@nativescript/core/ui' {
  interface View
  {
    fadeIn(duration?: string | number): Promise<void>;
    fadeOut(duration?: string | number): Promise<void>;
    fadeTo(duration?: string | number, opacity?: number): Promise<void>;
    fadeToggle(duration?: string | number): Promise<void>;

    floatIn(duration?: string | number, direction?: string): Promise<void>;
    floatOut(duration?: string | number, direction?: string): Promise<void>;

    show(duration?: string | number): Promise<void>;
    hide(duration?: string | number): Promise<void>;
    toggle(duration?: string | number): Promise<void>;

    slideDown(duration?: string | number, distance?: number): Promise<void>;
    slideUp(duration?: string | number, distance?: number): Promise<void>;
    slideToggle(duration?: string | number, distance?: number): Promise<void>;

    spring(duration?: string | number, animation?: any): Promise<void>;

    shake(): Promise<any>;
  }
}

export declare class Effects extends Common
{
  // define your typings manually
  // or..
  // take the ios or android .d.ts files and copy/paste them here
}
