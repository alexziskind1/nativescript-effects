import { NativeScriptEffects } from "./effects.common";
import { View, AnimationDefinition } from "@nativescript/core";

export * from "./effects.common";

View.prototype.spring = function (duration?: number, animation?: any) {
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

  let def: AnimationDefinition = {
    scale: { x: animation.scale.x, y: animation.scale.y },
    translate: { x: animation.translate.x, y: animation.translate.y },
    delay: animation.delay,
    duration: animation.duration,
    curve: "spring",
  };
  return this.animate(def);
};
