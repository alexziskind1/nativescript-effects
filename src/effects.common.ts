import {
  CoreTypes,
  Utils,
  View,
  AnimationDefinition,
} from "@nativescript/core";

type FloatDirection = "up" | "down" | "left" | "right";
export class NativeScriptEffects {
  static defaultDuration = 400;
  static defaultSlideDistance = -100;
  static defaultFloatDirection: FloatDirection = "up";
  static presetDirections = {
    up: { x: 0, y: 100 },
    down: { x: 0, y: -100 },
    left: { x: 100, y: 0 },
    right: { x: -100, y: 0 },
  };
  static presetDurations = {
    fast: 200,
    slow: 600,
  };
  static getMsValue(duration) {
    if (Utils.isString(duration)) {
      if (Utils.isDefined(NativeScriptEffects.presetDurations[duration])) {
        return this.presetDurations[duration];
      }
    } else if (Utils.isNumber(duration)) {
      return duration;
    } else {
      return this.defaultDuration;
    }
  }
  static fadeIn(duration: number): AnimationDefinition {
    if (duration === void 0) {
      duration = NativeScriptEffects.defaultDuration;
    }
    return {
      opacity: 1,
      duration: NativeScriptEffects.getMsValue(duration),
    };
  }
  static fadeOut(duration: number): AnimationDefinition {
    if (duration === void 0) {
      duration = NativeScriptEffects.defaultDuration;
    }
    return {
      opacity: 0,
      duration: NativeScriptEffects.getMsValue(duration),
    };
  }
  static fadeTo(
    duration: number,
    opacity: number
  ): AnimationDefinition {
    if (duration === void 0) {
      duration = NativeScriptEffects.defaultDuration;
    }
    if (opacity === void 0) {
      opacity = 1;
    }
    return {
      opacity: opacity,
      duration: NativeScriptEffects.getMsValue(duration),
    };
  }
  static fadeToggle(view: View, duration: number): AnimationDefinition {
    if (duration === void 0) {
      duration = NativeScriptEffects.defaultDuration;
    }
    if (view.opacity > 0) {
      return NativeScriptEffects.fadeOut(duration);
    } else {
      return NativeScriptEffects.fadeIn(duration);
    }
  }
  static floatIn(
    duration: number,
    direction: FloatDirection
  ): { start: AnimationDefinition; end: AnimationDefinition } {
    if (duration === void 0) {
      duration = NativeScriptEffects.defaultDuration;
    }
    if (direction === void 0) {
      direction = NativeScriptEffects.defaultFloatDirection;
    }

    let dir = NativeScriptEffects.presetDirections[direction];
    if (!dir) {
      dir = NativeScriptEffects.presetDirections["up"];
    }

    return {
      start: {
        translate: { x: dir.x, y: dir.y },
        opacity: 0,
        duration: 1,
      },
      end: {
        translate: { x: 0, y: 0 },
        opacity: 1,
        duration: NativeScriptEffects.getMsValue(duration),
      },
    };
  }
  static floatOut(
    duration: number,
    direction: FloatDirection
  ): AnimationDefinition {
    if (duration === void 0) {
      duration = NativeScriptEffects.defaultDuration;
    }
    if (direction === void 0) {
      direction = NativeScriptEffects.defaultFloatDirection;
    }
    let dir = NativeScriptEffects.presetDirections[direction];
    if (!dir) {
      dir = NativeScriptEffects.presetDirections["down"];
    }
    return {
      translate: { x: dir.x, y: dir.y },
      opacity: 0,
      duration: NativeScriptEffects.getMsValue(duration),
    };
  }
  static slideDown(
    duration: number,
    distance: number
  ): { start: AnimationDefinition; end: AnimationDefinition } {
    if (duration === void 0) {
      duration = NativeScriptEffects.defaultDuration;
    }
    if (distance === void 0) {
      distance = NativeScriptEffects.defaultSlideDistance;
    }

    return {
      start: {
        translate: { x: 0, y: distance },
        opacity: 0,
        duration: 1,
      },
      end: {
        translate: { x: 0, y: 0 },
        opacity: 1,
        duration: NativeScriptEffects.getMsValue(duration),
      },
    };
  }
  static slideUp(
    duration: number,
    distance: number
  ): AnimationDefinition {
    if (duration === void 0) {
      duration = NativeScriptEffects.defaultDuration;
    }
    if (distance === void 0) {
      distance = NativeScriptEffects.defaultSlideDistance;
    }

    return {
      translate: { x: 0, y: distance },
      opacity: 0,
      duration: NativeScriptEffects.getMsValue(duration),
    };
  }
  static shake(curve?: string): Array<AnimationDefinition> {
      curve = curve || CoreTypes.AnimationCurve.linear;
      return [
        {
            translate: { x: -20, y: 0 },
            duration: 60,
            curve
          },
          {
            translate: { x: 20, y: 0 },
            duration: 60,
            curve
          },
          {
            translate: { x: -20, y: 0 },
            duration: 60,
            curve
          },
          {
            translate: { x: 20, y: 0 },
            duration: 60,
            curve
          },
          {
            translate: { x: -10, y: 0 },
            duration: 60,
            curve
          },
          {
            translate: { x: 10, y: 0 },
            duration: 60,
            curve
          },
          {
            translate: { x: -5, y: 0 },
            duration: 60,
            curve
          },
          {
            translate: { x: 5, y: 0 },
            duration: 60,
            curve
          },
          {
            translate: { x: 0, y: 0 },
            duration: 60,
            curve
          }
      ];
  }
}

View.prototype.fadeIn = function (duration: number) {
  this.visibility = CoreTypes.Visibility.visible;
  return this.animate(NativeScriptEffects.fadeIn(duration));
};

View.prototype.fadeOut = function (duration: number) {
  return this.animate(NativeScriptEffects.fadeOut(duration));
};

View.prototype.fadeTo = function (duration: number, opacity: number) {
  this.visibility = CoreTypes.Visibility.visible;
  return this.animate(NativeScriptEffects.fadeTo(duration, opacity));
};

View.prototype.fadeToggle = function (duration: number) {
  return this.animate(NativeScriptEffects.fadeToggle(this, duration));
};

// .floatIn( [duration ]  )
// .floatIn( options )
View.prototype.floatIn = function (
  duration: number,
  direction: FloatDirection
) {
  this.visibility = CoreTypes.Visibility.visible;
  const options = NativeScriptEffects.floatIn(duration, direction);
  const self = this;

  return self.animate(options.start).then(function () {
    return self.animate(options.end);
  });
};

View.prototype.floatOut = function (
  duration: number,
  direction: FloatDirection
) {
  return this.animate(NativeScriptEffects.floatOut(duration, direction));
};

// .hide()
// .hide( [duration ] )
// .hide( options )
View.prototype.hide = function (duration) {
  if (duration === void 0) {
    duration = 1;
  }
  this.visibility = CoreTypes.Visibility.collapse;
  return this.fadeOut(duration);
};

View.prototype.show = function (duration) {
  if (duration === void 0) {
    duration = 1;
  }
  this.visibility = CoreTypes.Visibility.visible;
  return this.fadeIn(duration);
};

View.prototype.toggle = function (duration) {
  if (duration === void 0) {
    duration = 1;
  }
  if (this.visibility === CoreTypes.Visibility.collapse) {
    return this.show(duration);
  } else {
    return this.hide(duration);
  }
};

// .slideDown( [duration ]  )
// .slideDown( options )
View.prototype.slideDown = function (duration: number, distance: number) {
  const self = this;
  this.visibility = CoreTypes.Visibility.visible;
  this.translateY = distance;
  this.opacity = 0;
  const options = NativeScriptEffects.slideDown(duration, distance);

  return self.animate(options.start).then(function () {
    return self.animate(options.end);
  });
};

View.prototype.slideUp = function (duration: number, distance: number) {
  return this.animate(NativeScriptEffects.slideUp(duration, distance));
};

View.prototype.slideToggle = function (duration, distance) {
  if (duration === void 0) {
    duration = NativeScriptEffects.defaultDuration;
  }
  if (distance === void 0) {
    distance = NativeScriptEffects.defaultSlideDistance;
  }

  if (this.opacity > 0) {
    return this.slideUp(duration, distance);
  } else {
    return this.slideDown(duration, distance);
  }
};

View.prototype.shake = function () {
  const view = this;
  const options = NativeScriptEffects.shake();
  return new Promise(function (resolve, reject) {
    view
      .animate(options[0])
      .then(function () {
        return view.animate(options[1]);
      })
      .then(function () {
        return view.animate(options[2]);
      })
      .then(function () {
        return view.animate(options[3]);
      })
      .then(function () {
        return view.animate(options[4]);
      })
      .then(function () {
        return view.animate(options[5]);
      })
      .then(function () {
        return view.animate(options[6]);
      })
      .then(function () {
        return view.animate(options[7]);
      })
      .then(function () {
        return view.animate(options[8]);
      })
      .then(function () {
        return resolve(view);
      });
  });
};
