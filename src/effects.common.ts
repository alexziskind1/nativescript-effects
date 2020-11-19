
import { Observable, Enums } from '@nativescript/core';
import { View } from '@nativescript/core/ui';
import { isDefined, isNumber, isString } from '@nativescript/core/utils/types';

export class Common extends Observable {
    public static defaultDuration = 400;
    public static defaultSlideDistance = -100;
    public static defaultFloatDirection = 'up';
    public static presetDirections = {
        'up': { x: 0, y: 100 },
        'down': { x: 0, y: -100 },
        'left': { x: 100, y: 0 },
        'right': { x: -100, y: 0 }
    };
    public static presetDurations = {
        'fast': 200,
        'slow': 600
    };
    public static getMsValue(duration) {
        if (isString(duration)) {
            if (isDefined(Common.presetDurations[duration])) {
                return this.presetDurations[duration];
            }
        }
        else if (isNumber(duration)) {
            return duration;
        }
        else {
            return this.defaultDuration;
        }
    }
}

View.prototype.fadeIn = function(duration) {
    if (duration === void 0) { duration = Common.defaultDuration; }
    const msDuration = Common.getMsValue(duration);
    this.visibility = Enums.Visibility.visible;
    return this.animate({
        opacity: 1,
        duration: msDuration
    });
};


View.prototype.fadeOut = function(duration) {
    if (duration === void 0) { duration = Common.defaultDuration; }
    const msDuration = Common.getMsValue(duration);
    return this.animate({
        opacity: 0,
        duration: msDuration
    });
};

View.prototype.fadeTo = function(duration, opacity) {
    if (duration === void 0) { duration = Common.defaultDuration; }
    if (opacity === void 0) { opacity = 1; }
    const msDuration = Common.getMsValue(duration);
    this.visibility = Enums.Visibility.visible;
    return this.animate({
        opacity: opacity,
        duration: msDuration
    });
};

View.prototype.fadeToggle = function(duration) {
    if (duration === void 0) { duration = Common.defaultDuration; }
    if (this.opacity > 0) {
        return this.fadeOut(duration);
    }
    else {
        return this.fadeIn(duration);
    }
};

//.floatIn( [duration ]  )
//.floatIn( options )
View.prototype.floatIn = function(duration, direction) {
    if (duration === void 0) { duration = Common.defaultDuration; }
    if (direction === void 0) { direction = Common.defaultFloatDirection; }
    const self = this;
    const msDuration = Common.getMsValue(duration);
    this.visibility = Enums.Visibility.visible;
    let dir = Common.presetDirections[direction];
    if (!dir) {
        dir = Common.presetDirections['up'];
    }

    const promiseSetup = self.animate({
        translate: { x: dir.x, y: dir.y },
        opacity: 0,
        duration: 1
    });

    return promiseSetup.then(function() {
        return self.animate({
            translate: { x: 0, y: 0 },
            opacity: 1,
            duration: msDuration
        });
    });
};



View.prototype.floatOut = function(duration, direction) {
    if (duration === void 0) { duration = Common.defaultDuration; }
    if (direction === void 0) { direction = Common.defaultFloatDirection; }
    const msDuration = Common.getMsValue(duration);
    let dir = Common.presetDirections[direction];
    if (!dir) {
        dir = Common.presetDirections['down'];
    }
    return this.animate({
        translate: { x: dir.x, y: dir.y },
        opacity: 0,
        duration: msDuration
    });
};


//.hide()
//.hide( [duration ] )
//.hide( options )
View.prototype.hide = function(duration) {
    if (duration === void 0) { duration = 1; }
    this.visibility = Enums.Visibility.collapse;
    return this.fadeOut(duration);
};

View.prototype.show = function(duration) {
    if (duration === void 0) { duration = 1; }
    this.visibility = Enums.Visibility.visible;
    return this.fadeIn(duration);
};

View.prototype.toggle = function(duration) {
    if (duration === void 0) { duration = 1; }
    if (this.visibility === Enums.Visibility.collapse) {
        return this.show(duration);
    }
    else {
        return this.hide(duration);
    }
};

//.slideDown( [duration ]  )
//.slideDown( options )
View.prototype.slideDown = function(duration, distance) {
    if (duration === void 0) { duration = Common.defaultDuration; }
    if (distance === void 0) { distance = Common.defaultSlideDistance; }
    const self = this;

    const msDuration = Common.getMsValue(duration);
    this.visibility = Enums.Visibility.visible;

    this.translateY = distance;
    this.opacity = 0;

    const promiseSetup = self.animate({
        translate: { x: 0, y: distance },
        opacity: 0,
        duration: 1
    });

    return promiseSetup.then(function() {
        return self.animate({
            translate: { x: 0, y: 0 },
            opacity: 1,
            duration: msDuration
        });
    });
};

View.prototype.slideUp = function(duration, distance) {
    if (duration === void 0) { duration = Common.defaultDuration; }
    if (distance === void 0) { distance = Common.defaultSlideDistance; }

    const msDuration = Common.getMsValue(duration);
    return this.animate({
        translate: { x: 0, y: distance },
        opacity: 0,
        duration: msDuration
    });
};

View.prototype.slideToggle = function(duration, distance) {
    if (duration === void 0) { duration = Common.defaultDuration; }
    if (distance === void 0) { distance = Common.defaultSlideDistance; }

    if (this.opacity > 0) {
        return this.slideUp(duration, distance);
    }
    else {
        return this.slideDown(duration, distance);
    }
};

View.prototype.shake = function() {
    const view = this;
    return new Promise(function(resolve, reject) {
        view.animate({ translate: { x: -20, y: 0 }, duration: 60, curve: Enums.AnimationCurve.linear })
            .then(function() { return view.animate({ translate: { x: 20, y: 0 }, duration: 60, curve: Enums.AnimationCurve.linear }); })
            .then(function() { return view.animate({ translate: { x: -20, y: 0 }, duration: 60, curve: Enums.AnimationCurve.linear }); })
            .then(function() { return view.animate({ translate: { x: 20, y: 0 }, duration: 60, curve: Enums.AnimationCurve.linear }); })
            .then(function() { return view.animate({ translate: { x: -10, y: 0 }, duration: 60, curve: Enums.AnimationCurve.linear }); })
            .then(function() { return view.animate({ translate: { x: 10, y: 0 }, duration: 60, curve: Enums.AnimationCurve.linear }); })
            .then(function() { return view.animate({ translate: { x: -5, y: 0 }, duration: 60, curve: Enums.AnimationCurve.linear }); })
            .then(function() { return view.animate({ translate: { x: 5, y: 0 }, duration: 60, curve: Enums.AnimationCurve.linear }); })
            .then(function() { return view.animate({ translate: { x: 0, y: 0 }, duration: 60, curve: Enums.AnimationCurve.linear }); })
            .then(function() {
                return resolve(view);
            });
    });
};
