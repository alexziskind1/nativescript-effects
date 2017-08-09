/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { EventData } from 'tns-core-modules/data/observable';
import { Page } from 'tns-core-modules/ui/page';
import { Button } from 'tns-core-modules/ui/button';
import { Label } from 'tns-core-modules/ui/label';
import { HelloWorldModel } from './main-view-model';


let lblTitle: Label;
let btnTap: Button;
let lblCounter: Label;

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
    /*
    This gets a reference this page’s <Page> UI component. You can
    view the API reference of the Page to see what’s available at
    https://docs.nativescript.org/api-reference/classes/_ui_page_.page.html
    */
    const page = <Page>args.object;

    /*
    A page’s bindingContext is an object that should be used to perform
    data binding between XML markup and TypeScript code. Properties
    on the bindingContext can be accessed using the {{ }} syntax in XML.
    In this example, the {{ message }} and {{ onTap }} bindings are resolved
    against the object returned by createViewModel().

    You can learn more about data binding in NativeScript at
    https://docs.nativescript.org/core-concepts/data-binding.
    */
    page.bindingContext = new HelloWorldModel();

    lblTitle = <Label>page.getViewById('lblTitle');
    btnTap = <Button>page.getViewById('btnTap');
    lblCounter = <Label>page.getViewById('lblCounter');

    btnTap.opacity = 0;

    btnTap.on('tap', () => {
        lblCounter.slideToggle(500);
    });

    lblTitle.slideDown(1000, -50)
        .then(() => {
            btnTap.fadeIn(5000)
                .then(() => {
                    lblTitle.slideUp(200, -50);
                    btnTap.spring(2000, {
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
