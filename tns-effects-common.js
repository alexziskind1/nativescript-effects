//nativescript-effects

var viewModule = require("ui/core/view");
var typesModule = require("utils/types");
var definition = require("./tns-effects");


var Effects = {
    defaultDuration : 400,
    defaultSlideDistance: -100,
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

viewModule.View.prototype.fadeIn = function(duration = Effects.defaultDuration) {
    var msDuration = Effects.getMsValue(duration);
    return this.animate({
        opacity: 1,
        duration: msDuration
    });
};

viewModule.View.prototype.fadeOut = function(duration = Effects.defaultDuration) {
	var msDuration = Effects.getMsValue(duration);
    return this.animate({
        opacity: 0,
        duration: msDuration
    });
};

viewModule.View.prototype.fadeTo = function(duration = Effects.defaultDuration, opacity = 1) {
    var msDuration = Effects.getMsValue(duration);
    return this.animate({
        opacity: opacity,
        duration: msDuration
    });
};

viewModule.View.prototype.fadeToggle = function(duration = Effects.defaultDuration) {
    if (this.opacity > 0) {
        this.fadeOut(duration);
    }
    else {
        this.fadeIn(duration);
    }
};

//.hide()
//.hide( [duration ] )
//.hide( options )
//.hide( duration [, easing ] )
viewModule.View.prototype.hide = function(duration = 1) {
    this.fadeOut(duration);
};

viewModule.View.prototype.show = function(duration = 1) {
    this.fadeIn(duration);
};

viewModule.View.prototype.toggle = function(duration = 1) {
    this.fadeToggle(duration);
};

//.slideDown( [duration ]  )
//.slideDown( options )
viewModule.View.prototype.slideDown = function(duration = Effects.defaultDuration, distance = Effects.defaultSlideDistance) {
    var msDuration = Effects.getMsValue(duration);
    this.translateY = distance;
    this.opacity = 0;
    return this.animate({ 
        translate: { x: 0, y: 0 }, 
        opacity: 1,
        duration: msDuration 
    });
};

viewModule.View.prototype.slideUp = function(duration = Effects.defaultDuration, distance = Effects.defaultSlideDistance) {
    var msDuration = Effects.getMsValue(duration);
    return this.animate({ 
        translate: { x: 0, y: distance }, 
        opacity: 0,
        duration: msDuration
    });
};

viewModule.View.prototype.slideToggle = function(duration = Effects.defaultDuration, distance = Effects.defaultSlideDistance) {
    if (this.opacity > 0) {
        this.slideUp(duration, distance);
    }
    else {
        this.slideDown(duration, distance);
    }
};

viewModule.View.prototype.spring = function(duration = Effects.defaultDuration, animation = null) {
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