import { NativeScriptEffects } from "./effects.common";
import { View } from "@nativescript/core";

declare module "@nativescript/core" {
  export declare class View extends ViewExtendedAnimations {
    fadeIn(duration?: number): Promise<void>;
    fadeOut(duration?: number): Promise<void>;
    fadeTo(duration?: number, opacity?: number): Promise<void>;
    fadeToggle(duration?: number): Promise<void>;

    floatIn(duration?: number, direction?: string): Promise<void>;
    floatOut(duration?: number, direction?: string): Promise<void>;

    show(duration?: number): Promise<void>;
    hide(duration?: number): Promise<void>;
    toggle(duration?: number): Promise<void>;

    slideDown(duration?: number, distance?: number): Promise<void>;
    slideUp(duration?: number, distance?: number): Promise<void>;
    slideToggle(duration?: number, distance?: number): Promise<void>;

    spring(duration?: number, animation?: any): Promise<void>;

    shake(): Promise<any>;
  }
}

export * from "./effects.common";
