/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_view_model_1 = require("./main-view-model");
var lblTitle;
var btnTap;
var lblCounter;
// Event handler for Page "navigatingTo" event attached in main-page.xml
function loaded(args) {
    /*
    This gets a reference this page’s <Page> UI component. You can
    view the API reference of the Page to see what’s available at
    https://docs.nativescript.org/api-reference/classes/_ui_page_.page.html
    */
    var page = args.object;
    /*
    A page’s bindingContext is an object that should be used to perform
    data binding between XML markup and TypeScript code. Properties
    on the bindingContext can be accessed using the {{ }} syntax in XML.
    In this example, the {{ message }} and {{ onTap }} bindings are resolved
    against the object returned by createViewModel().

    You can learn more about data binding in NativeScript at
    https://docs.nativescript.org/core-concepts/data-binding.
    */
    page.bindingContext = new main_view_model_1.HelloWorldModel();
    lblTitle = page.getViewById('lblTitle');
    btnTap = page.getViewById('btnTap');
    lblCounter = page.getViewById('lblCounter');
    btnTap.opacity = 0.0;
    btnTap.on('tap', function () {
        lblCounter.slideToggle(500);
    });
    lblTitle.slideDown(1000, -50)
        .then(function () {
        btnTap.fadeIn(5000)
            .then(function () {
            lblTitle.slideUp(200, -50);
            btnTap.spring(2000, {
                translate: {
                    x: 0,
                    y: -5
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
}
exports.loaded = loaded;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0VBSUU7OztBQU1GLHFEQUFvRDtBQUdwRCxJQUFJLFFBQWUsQ0FBQztBQUNwQixJQUFJLE1BQWMsQ0FBQztBQUNuQixJQUFJLFVBQWlCLENBQUM7QUFFdEIsd0VBQXdFO0FBQ3hFLGdCQUF1QixJQUFlO0lBQ2xDOzs7O01BSUU7SUFDRixJQUFJLElBQUksR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBRTdCOzs7Ozs7Ozs7TUFTRTtJQUNGLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxpQ0FBZSxFQUFFLENBQUM7SUFFNUMsUUFBUSxHQUFVLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDL0MsTUFBTSxHQUFXLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDNUMsVUFBVSxHQUFVLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7SUFFbkQsTUFBTSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7SUFFckIsTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUU7UUFDYixVQUFVLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLENBQUMsQ0FBQyxDQUFDO0lBRUgsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUM7U0FDeEIsSUFBSSxDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7YUFDZCxJQUFJLENBQUM7WUFDRixRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzNCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO2dCQUNoQixTQUFTLEVBQUU7b0JBQ1AsQ0FBQyxFQUFFLENBQUM7b0JBQ0osQ0FBQyxFQUFFLENBQUMsQ0FBQztpQkFDUjtnQkFDRCxLQUFLLEVBQUU7b0JBQ0gsQ0FBQyxFQUFFLEdBQUc7b0JBQ04sQ0FBQyxFQUFFLEdBQUc7aUJBQ1Q7Z0JBQ0QsS0FBSyxFQUFFLENBQUM7Z0JBQ1IsWUFBWSxFQUFFLEdBQUc7Z0JBQ2pCLFFBQVEsRUFBRSxHQUFHO2dCQUNiLE9BQU8sRUFBRSxJQUFJO2FBQ2hCLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQyxDQUNBLENBQUM7QUFFVixDQUFDO0FBckRELHdCQXFEQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5JbiBOYXRpdmVTY3JpcHQsIGEgZmlsZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgYW4gWE1MIGZpbGUgaXMga25vd24gYXNcbmEgY29kZS1iZWhpbmQgZmlsZS4gVGhlIGNvZGUtYmVoaW5kIGlzIGEgZ3JlYXQgcGxhY2UgdG8gcGxhY2UgeW91ciB2aWV3XG5sb2dpYywgYW5kIHRvIHNldCB1cCB5b3VyIHBhZ2XigJlzIGRhdGEgYmluZGluZy5cbiovXG5cbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICd1aS9idXR0b24nO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tICd1aS9sYWJlbCc7XG5pbXBvcnQgeyBIZWxsb1dvcmxkTW9kZWwgfSBmcm9tICcuL21haW4tdmlldy1tb2RlbCc7XG5cblxudmFyIGxibFRpdGxlOiBMYWJlbDtcbnZhciBidG5UYXA6IEJ1dHRvbjtcbnZhciBsYmxDb3VudGVyOiBMYWJlbDtcblxuLy8gRXZlbnQgaGFuZGxlciBmb3IgUGFnZSBcIm5hdmlnYXRpbmdUb1wiIGV2ZW50IGF0dGFjaGVkIGluIG1haW4tcGFnZS54bWxcbmV4cG9ydCBmdW5jdGlvbiBsb2FkZWQoYXJnczogRXZlbnREYXRhKSB7XG4gICAgLypcbiAgICBUaGlzIGdldHMgYSByZWZlcmVuY2UgdGhpcyBwYWdl4oCZcyA8UGFnZT4gVUkgY29tcG9uZW50LiBZb3UgY2FuXG4gICAgdmlldyB0aGUgQVBJIHJlZmVyZW5jZSBvZiB0aGUgUGFnZSB0byBzZWUgd2hhdOKAmXMgYXZhaWxhYmxlIGF0XG4gICAgaHR0cHM6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvYXBpLXJlZmVyZW5jZS9jbGFzc2VzL191aV9wYWdlXy5wYWdlLmh0bWxcbiAgICAqL1xuICAgIGxldCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG5cbiAgICAvKlxuICAgIEEgcGFnZeKAmXMgYmluZGluZ0NvbnRleHQgaXMgYW4gb2JqZWN0IHRoYXQgc2hvdWxkIGJlIHVzZWQgdG8gcGVyZm9ybVxuICAgIGRhdGEgYmluZGluZyBiZXR3ZWVuIFhNTCBtYXJrdXAgYW5kIFR5cGVTY3JpcHQgY29kZS4gUHJvcGVydGllc1xuICAgIG9uIHRoZSBiaW5kaW5nQ29udGV4dCBjYW4gYmUgYWNjZXNzZWQgdXNpbmcgdGhlIHt7IH19IHN5bnRheCBpbiBYTUwuXG4gICAgSW4gdGhpcyBleGFtcGxlLCB0aGUge3sgbWVzc2FnZSB9fSBhbmQge3sgb25UYXAgfX0gYmluZGluZ3MgYXJlIHJlc29sdmVkXG4gICAgYWdhaW5zdCB0aGUgb2JqZWN0IHJldHVybmVkIGJ5IGNyZWF0ZVZpZXdNb2RlbCgpLlxuXG4gICAgWW91IGNhbiBsZWFybiBtb3JlIGFib3V0IGRhdGEgYmluZGluZyBpbiBOYXRpdmVTY3JpcHQgYXRcbiAgICBodHRwczovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy9jb3JlLWNvbmNlcHRzL2RhdGEtYmluZGluZy5cbiAgICAqL1xuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgSGVsbG9Xb3JsZE1vZGVsKCk7XG5cbiAgICBsYmxUaXRsZSA9IDxMYWJlbD5wYWdlLmdldFZpZXdCeUlkKCdsYmxUaXRsZScpO1xuICAgIGJ0blRhcCA9IDxCdXR0b24+cGFnZS5nZXRWaWV3QnlJZCgnYnRuVGFwJyk7XG4gICAgbGJsQ291bnRlciA9IDxMYWJlbD5wYWdlLmdldFZpZXdCeUlkKCdsYmxDb3VudGVyJyk7XG5cbiAgICBidG5UYXAub3BhY2l0eSA9IDAuMDtcblxuICAgIGJ0blRhcC5vbigndGFwJywgKCkgPT4ge1xuICAgICAgICBsYmxDb3VudGVyLnNsaWRlVG9nZ2xlKDUwMCk7XG4gICAgfSk7XG5cbiAgICBsYmxUaXRsZS5zbGlkZURvd24oMTAwMCwgLTUwKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBidG5UYXAuZmFkZUluKDUwMDApXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsYmxUaXRsZS5zbGlkZVVwKDIwMCwgLTUwKTtcbiAgICAgICAgICAgICAgICAgICAgYnRuVGFwLnNwcmluZygyMDAwLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IC01XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAzLjAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogMC41XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYW1waW5nUmF0aW86IDAuMyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlbG9jaXR5OiAyLjAsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBudWxsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgICk7XG5cbn0iXX0=