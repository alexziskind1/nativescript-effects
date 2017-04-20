
/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { Button } from 'ui/button';
import { Label } from 'ui/label';
import { View } from 'ui/core/view';
import { ViewBase } from 'ui/core/view-base';
import { HelloWorldModel } from './main-view-model';


var lblTitle: Label;
var btnTap: Button;
var lblCounter: View;

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
    /*
    This gets a reference this page’s <Page> UI component. You can
    view the API reference of the Page to see what’s available at
    https://docs.nativescript.org/api-reference/classes/_ui_page_.page.html
    */
    let page = <Page>args.object;

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
    lblCounter = <View>page.getViewById('lblCounter');

    let dsf: ViewBase;
    lblCounter.animate
    btnTap.on('tap', () => {
        lblCounter.sli
    });
}
var a = 0;