var Effects = require("nativescript-effects").Effects;
var effects = new Effects();

describe("greet function", function() {
    it("exists", function() {
        expect(effects.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(effects.greet()).toEqual("Hello, NS");
    });
});