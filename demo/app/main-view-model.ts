import { Button, Label, Observable, Page } from "@nativescript/core";

export class HelloWorldModel extends Observable {
  private _counter: number;
  private _message: string;

  constructor(private page: Page) {
    super();

    // Initialize default values.
    this._counter = 42;
    this.updateMessage();
  }

  get message(): string {
    return this._message;
  }

  set message(value: string) {
    if (this._message !== value) {
      this._message = value;
      this.notifyPropertyChange("message", value);
    }
  }

  loaded(args) {
    const lblTitle = <Label>this.page.getViewById("lblTitle");
    const btnTap = <Button>this.page.getViewById("btnTap");
    lblTitle.slideDown(1000, -50).then(() => {
      btnTap.fadeIn(5000).then(() => {
        lblTitle.slideUp(200, -50);
        btnTap.spring(2000, {
          translate: {
            x: 0,
            y: -50,
          },
          scale: {
            x: 3.0,
            y: 0.5,
          },
          delay: 0,
          dampingRatio: 0.3,
          velocity: 2.0,
          options: null,
        });
      });
    });
  }

  public onTap(args) {
    this._counter--;
    this.updateMessage();
    args.object.shake();
  }

  private updateMessage() {
    if (this._counter <= 0) {
      this.message =
        "Hoorraaay! You unlocked the NativeScript clicker achievement!";
    } else {
      this.message = `${this._counter} taps left`;
    }
  }
}
