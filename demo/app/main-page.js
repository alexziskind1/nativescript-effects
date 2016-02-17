var observable_1 = require("data/observable");
var tnsfx = require('nativescript-effects');
var MainPageController = (function (_super) {
    __extends(MainPageController, _super);
    function MainPageController() {
        _super.call(this);
        this.counter = 42;
        this.set("message", "number of taps");
    }
    MainPageController.prototype.pageLoaded = function (args) {
        var _this = this;
        this.page = args.object;
        this.page.bindingContext = this;
        this.lblTitle = this.page.getViewById('lblTitle');
        this.btnTap = this.page.getViewById('btnTap');
        this.lblCounter = this.page.getViewById('lblCounter');
        this.lblTitle.slideDown(1000, -50)
            .then(function () {
            _this.btnTap.fadeIn(5000)
                .then(function () {
                _this.lblTitle.slideUp(200, -50);
                _this.btnTap.spring(2000, {
                    translate: {
                        x: 0,
                        y: -50
                    },
                    scale: {
                        x: 3.0,
                        y: 0.5
                    },
                    delay: 0,
                    dampingRatio: 0.3,
                    velocity: 2.0,
                    options: null
                });
            });
        });
    };
    MainPageController.prototype.randomLocNum = function () {
        return Math.floor(Math.random() * 100) + 1;
    };
    MainPageController.prototype.randomScaleNum = function () {
        return Math.floor(Math.random() * 30) / 10 + 1;
    };
    MainPageController.prototype.tapAction = function () {
        this.counter++;
        this.set("message", this.counter + " taps");
        this.lblCounter.hide();
        /*
        this.btnTap.spring(2000, {
            scale:{ x: this.randomScaleNum(), y: this.randomScaleNum() },
                    delay: 0,
                    dampingRatio: 0.6,
                    velocity: 2.5,
                    options: null
        });
        
        this.lblCounter.spring(5000, {
                    translate:{ x: this.randomLocNum(), y: this.randomLocNum() },
                    delay: 0,
                    dampingRatio: 0.3,
                    velocity: 6.0,
                    options: null});
                    */
    };
    return MainPageController;
})(observable_1.Observable);
var mpc = new MainPageController();
exports.pageLoaded = function (args) { return mpc.pageLoaded(args); };
exports.tapAction = function () { return mpc.tapAction(); };
