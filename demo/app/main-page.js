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
    MainPageController.prototype.tapAction = function () {
        var _this = this;
        this.counter++;
        this.lblCounter.fadeTo(150, 0.2)
            .then(function () {
            _this.set("message", _this.counter + " taps");
            _this.lblCounter.fadeIn();
        });
    };
    return MainPageController;
})(observable_1.Observable);
var mpc = new MainPageController();
exports.pageLoaded = function (args) { return mpc.pageLoaded(args); };
exports.tapAction = function () { return mpc.tapAction(); };
