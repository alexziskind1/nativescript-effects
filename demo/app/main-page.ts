import {EventData, Observable} from "data/observable";
import {Label, Button} from "ui";
import pageModule = require('ui/page');
import viewModule = require("ui/core/view");
var tnsfx = require('nativescript-effects');


class MainPageController extends Observable {
    private page: pageModule.Page;
    private counter: number = 42;
    private lblTitle: Label;
    private btnTap: Button;
    private lblCounter: Label;
    
    constructor() {
        super();
        this.set("message", "number of taps");
    }
    
    public pageLoaded(args: EventData) {
        this.page = <pageModule.Page>args.object;
        this.page.bindingContext = this;
        
        this.lblTitle = <Label>this.page.getViewById('lblTitle');
        this.btnTap = <Button>this.page.getViewById('btnTap');
        this.lblCounter = <Label>this.page.getViewById('lblCounter');
        
        this.lblTitle.slideDown(1000, -50)
        .then(()=> {
            this.btnTap.fadeIn(5000)
            .then(()=>{
                this.lblTitle.slideUp(200, -50);
                this.btnTap.spring(2000, {
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
            }
        );
    }
    
    private randomLocNum() {
        return Math.floor(Math.random() * 100) + 1;
    }
    private randomScaleNum() {
        return Math.floor(Math.random() * 30) / 10 + 1;
    }
    
    public tapAction() {
        this.counter++;
        this.set("message", `${this.counter} taps`);
        
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
    }
}

var mpc = new MainPageController();
export var pageLoaded = args=>mpc.pageLoaded(args);
export var tapAction = ()=>mpc.tapAction();