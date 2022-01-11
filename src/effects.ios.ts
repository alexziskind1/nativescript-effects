import { AnimationDefinition, View } from "@nativescript/core";
import { NativeScriptEffects } from "./effects.common";

export * from "./effects.common";

View.prototype.spring = function (duration?: number, animation?: any) {
  return new Promise((resolve) => {
    if (duration === void 0) {
      duration = NativeScriptEffects.defaultDuration;
    }

    const msDuration = NativeScriptEffects.getMsValue(duration);
    if (!animation) {
      animation = {
        translate: {
          x: 0,
          y: -100,
        },
        scale: {
          x: 2,
          y: 2,
        },
        duration: msDuration,
        delay: 0,
        dampingRatio: 0.3,
        velocity: 2.0,
        options: null,
      };
    } else {
      animation.duration = msDuration;
    }

    const aTrans = { x: 0, y: 0 };
    const aScale = { x: 1, y: 1 };

    if (animation.translate) {
      if (animation.translate.x) aTrans.x = animation.translate.x;
      if (animation.translate.y) aTrans.y = animation.translate.y;
    }
    if (animation.scale) {
      if (animation.scale.x) aScale.x = animation.scale.x;
      if (animation.scale.y) aScale.y = animation.scale.y;
    }

    UIView.animateWithDurationDelayUsingSpringWithDampingInitialSpringVelocityOptionsAnimationsCompletion(
      animation.duration / 1000,
      animation.delay / 1000,
      animation.dampingRatio,
      animation.velocity,
      animation.options,
      () => {
        this._view.translateX = aTrans.x;
        this._view.translateY = aTrans.y;
        this._view.scaleX = aScale.x;
        this._view.scaleY = aScale.y;
      },
      () => {
        resolve();
      }
    );
  });
};
