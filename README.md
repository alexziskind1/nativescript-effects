# NativeScript Effects

A NativeScript plugin that adds commonly used animation effects to views. This includes the nativescript-animation-spring as one of the effects so no need to get that plugin if you get this one.

## Installation

```
$ npm install nativescript-effects --save
```

This command automatically installs the necessary files, as well as stores nativescript-effects as a dependency in your project's `package.json` file.


## Usage

To use the animation effects plugin you must first `require()` its module. After you `require()` the module you have access to its APIs.

In the demo app, this require line is added to the `app.ts` file, but you can also add it to a single code behind file where you will use the effects.

``` js
var tnsfx = require('nativescript-effects');
```

### TypeScript
To avoid type checking errors, you must additionally configure TypeScript to recognize the method extensions to `View`. Simply add the following line to `references.d.ts` in the root of your project:
```typescript
/// <reference path="./node_modules/nativescript-effects/tns-effects.d.ts" />
```

Then get a reference to the view you want to animate and call one of the functions listed below. This view can be any child of the NativeScript View class such as Button, Label, etc.

```js
var myLabel = page.getViewById('lblMessage');
myLabel.fadeIn()
       .then(function(){
           myLabel.fadeOut(10000);
       });

```

## API

All extensions listed below return a Promise that will call it's ```then``` function once finished successfully.

----
## .fadeIn([duration])
Description: *Display the view by fading it to opaque.*

**duration** (default: 400)
Type: Number or String <br/>
A string or number determining how long the animation will run. Number is milliseconds. String is a constant value 'fast' or 'slow'.

----
## .fadeOut([duration])
Description: *Hide the view by fading it to transparent.*

**duration** (default: 400)
Type: Number or String <br/>
A string or number determining how long the animation will run. Number is milliseconds. String is a constant value 'fast' or 'slow'.


----
## .fadeTo([duration], [opacity])
Description: *Gradually adjust the opacity of the view.*

**duration** (default: 400)
Type: Number or String <br/>
A string or number determining how long the animation will run. Number is milliseconds. String is a constant value 'fast' or 'slow'.

**opacity** (default: 1)
Type: Number <br/>
A number between 0.0 and 1.0

----
## .fadeToggle([duration])
Description: *Display or hide the view by animating its opacity.*

**duration** (default: 400)
Type: Number or String <br/>
A string or number determining how long the animation will run. Number is milliseconds. String is a constant value 'fast' or 'slow'.

----
## .floatIn([duration], [direction])
Description: *Display the view with a sliding motion in a certain direction.*

**duration** (default: 400)
Type: Number or String <br/>
A string or number determining how long the animation will run. Number is milliseconds. String is a constant value 'fast' or 'slow'.

**direction** (default: 'up')
Type: String <br/>
A constant representing the direction to float. Can be 'up', 'down', 'left', 'right'

----
## .floatOut([duration], [direction])
Description: *Hide the view with a sliding motion in a certain direction.*


**duration** (default: 400)
Type: Number or String <br/>
A string or number determining how long the animation will run. Number is milliseconds. String is a constant value 'fast' or 'slow'.

**direction** (default: 'down')
Type: String <br/>
A constant representing the direction to float. Can be 'up', 'down', 'left', 'right'


----
## .hide([duration])
Description: *Hide the view.*

**duration** (default: 1)
Type: Number or String <br/>
A string or number determining how long the animation will run. Number is milliseconds. String is a constant value 'fast' or 'slow'.

----
## .shake()
Description: *Shake the view back and forth a few times, like a headshake "no"*


----
## .show([duration])
Description: *Display the view.*

**duration** (default: 1)
Type: Number or String <br/>
A string or number determining how long the animation will run. Number is milliseconds. String is a constant value 'fast' or 'slow'.


----
## .slideDown([duration], [distance])
Description: *Display the view with a sliding motion.*

**duration** (default: 400)
Type: Number or String <br/>
A string or number determining how long the animation will run. Number is milliseconds. String is a constant value 'fast' or 'slow'.

**distance** (default: -100)
Type: Number <br/>
A number determining how many points the view will slide.


----
## .slideUp([duration], [distance])
Description: *Hide the view with a sliding motion.*

**duration** (default: 400)
Type: Number or String <br/>
A string or number determining how long the animation will run. Number is milliseconds. String is a constant value 'fast' or 'slow'.

**distance** (default: -100)
Type: Number <br/>
A number determining how many points the view will slide.


----
## .slideToggle([duration])
Description: *Slide down or slide up the view based on current slide state.*

**duration** (default: 400)
Type: Number or String <br/>
A string or number determining how long the animation will run. Number is milliseconds. String is a constant value 'fast' or 'slow'.


----
## .spring([duration], [animation]) <- currently iOS only
Description: *Moves the view with a spring like bouncing motion.*

**duration** (default: 400)
Type: Number or String <br/>
A string or number determining how long the animation will run. Number is milliseconds. String is a constant value 'fast' or 'slow'.

**animation** (default: see default object below)
Type: Object <br/>
An animation definition object as described in the "Spring Animation" section below.

Default animation:
```js
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
```

###Spring Animation options

- translate: x and y distance translate animation
- scale: x and y scale animation
- delay: decimal (in ms)
- dampingRatio: float
- velocity: float
- options: object (UIViewAnimationOptions)


The full set of options is documented on the [Apple developer site](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIView_Class/#//apple_ref/occ/clm/UIView/animateWithDuration:delay:usingSpringWithDamping:initialSpringVelocity:options:animations:completion:). Modifying these options gives a different spring-like effect. Here is an example function call for the screenshot above (although it looks much smoother on the emulator or the actual device since the GIF is not 60 frames per second).

###Example Usage
``` js
myView.spring(10000, {
            translate: {
                x: 0,
                y: -100
            },
            scale: {
                x: 2,
                y: 2
            },
            delay: 0,
            dampingRatio: 0.3,
            velocity: 2.0,
            options: null,
        });
```


----
## .toggle([duration])
Description: *Display or hide the view.*

**duration** (default: 400)
Type: Number or String <br/>
A string or number determining how long the animation will run. Number is milliseconds. String is a constant value 'fast' or 'slow'.





