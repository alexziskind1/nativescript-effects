//nativescript-effects

var viewModule = require("ui/core/view");
var typesModule = require("utils/types");
var definition = require("./tns-effects");
var enums = require("ui/enums");

var Effects = {
    defaultDuration : 400,
    defaultSlideDistance: -100,
    defaultFloatDirection: 'up',
    presetDirections: {
        'up': {x: 0, y: 100},
        'down': {x: 0, y: -100},
        'left': {x: 100, y: 0},
        'right': {x: -100, y: 0}
    },
    presetDurations: {
        'fast' : 200,
        'slow' : 600
    },
    getMsValue: function(duration) {
        if (typesModule.isString(duration)) {
            if (typesModule.isDefined(Effects.presetDurations[duration])) {
                return Effects.presetDurations[duration];
            }
        } 
        else if (typesModule.isNumber(duration)) {
            return duration;
        }
        else {
            return this.defaultDuration;
        }
    }
};
exports.ViewEffects = Effects;

viewModule.View.prototype.fadeIn = function(duration) {
    if (duration === void 0) { duration = Effects.defaultDuration; }
    var msDuration = Effects.getMsValue(duration);
    return this.animate({
        opacity: 1,
        duration: msDuration
    });
};

viewModule.View.prototype.fadeOut = function(duration) {
    if (duration === void 0) { duration = Effects.defaultDuration; }
	var msDuration = Effects.getMsValue(duration);
    return this.animate({
        opacity: 0,
        duration: msDuration
    });
};

viewModule.View.prototype.fadeTo = function(duration, opacity) {
    if (duration === void 0) { duration = Effects.defaultDuration; }
    if (opacity === void 0) { opacity = 1; }
    var msDuration = Effects.getMsValue(duration);
    return this.animate({
        opacity: opacity,
        duration: msDuration
    });
};

viewModule.View.prototype.fadeToggle = function(duration) {
    if (duration === void 0) { duration = Effects.defaultDuration; }
    if (this.opacity > 0) {
        return this.fadeOut(duration);
    }
    else {
        return this.fadeIn(duration);
    }
};

//.floatIn( [duration ]  )
//.floatIn( options )
viewModule.View.prototype.floatIn = function(duration, direction) {
    if (duration === void 0) { duration = Effects.defaultDuration; }
    if (direction === void 0) { direction = Effects.defaultFloatDirection; }
    var self = this;
    var msDuration = Effects.getMsValue(duration);
    var dir = Effects.presetDirections[direction];
    if (!dir) {
        dir = Effects.presetDirections['up'];
    }

    var promiseSetup = self.animate({
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



viewModule.View.prototype.floatOut = function(duration, direction) {
    if (duration === void 0) { duration = Effects.defaultDuration; }
    if (direction === void 0) { direction = Effects.defaultFloatDirection; }
    var msDuration = Effects.getMsValue(duration);
    var dir = Effects.presetDirections[direction];
    if (!dir) {
        dir = Effects.presetDirections['down'];
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
viewModule.View.prototype.hide = function(duration) {
    if (duration === void 0) { duration = 1; }
    this.visibility = enums.Visibility.collapse;
    return this.fadeOut(duration);
};

viewModule.View.prototype.show = function(duration) {
    if (duration === void 0) { duration = 1; }
    this.visibility = enums.Visibility.visible;
    return this.fadeIn(duration);
};

viewModule.View.prototype.toggle = function(duration) {
    if (duration === void 0) { duration = 1; }
    if (this.visibility === enums.Visibility.collapse) {
        return this.show(duration);
    }
    else {
        return this.hide(duration);
    }
};

//.slideDown( [duration ]  )
//.slideDown( options )
viewModule.View.prototype.slideDown = function(duration, distance) {
    if (duration === void 0) { duration = Effects.defaultDuration; }
    if (distance === void 0) { distance = Effects.defaultSlideDistance; }
    var self = this;
    
    var msDuration = Effects.getMsValue(duration);
    
    this.translateY = distance;
    this.opacity = 0;
    
    var promiseSetup = self.animate({
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

viewModule.View.prototype.slideUp = function(duration, distance) {
    if (duration === void 0) { duration = Effects.defaultDuration; }
    if (distance === void 0) { distance = Effects.defaultSlideDistance; }
    
    var msDuration = Effects.getMsValue(duration);
    return this.animate({ 
        translate: { x: 0, y: distance }, 
        opacity: 0,
        duration: msDuration
    });
};

viewModule.View.prototype.slideToggle = function(duration, distance) {
    if (duration === void 0) { duration = Effects.defaultDuration; }
    if (distance === void 0) { distance = Effects.defaultSlideDistance; }
    
    if (this.opacity > 0) {
        return this.slideUp(duration, distance);
    }
    else {
        return this.slideDown(duration, distance);
    }
};

viewModule.View.prototype.spring = function(duration, animation) {
    if (duration === void 0) { duration = Effects.defaultDuration; }
    
    var msDuration = Effects.getMsValue(duration);
    if (!animation) {
        animation = {
                translate: {
                    x: 0,
                    y: -100
                },
                scale: {
                    x: 2,
                    y: 2
                },
                duration: msDuration,
                delay: 0,
                dampingRatio: 0.3,
                velocity: 2.0,
                options: null
            };
    }
    else {
        animation.duration = msDuration;
    }
    
    var fx = new definition.ViewEffects(this);
    return fx.nativeSpring(animation);
}