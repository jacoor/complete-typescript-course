"use strict";
// examples of object oriented programming in ts.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Editor;
(function (Editor) {
    Editor[Editor["MARVEL"] = 0] = "MARVEL";
    Editor[Editor["DC"] = 1] = "DC";
})(Editor || (Editor = {}));
// interesting thing is that objects can also implement interface
var batman = {
    name: "BatMan"
};
var SuperHero = /** @class */ (function () {
    // at this point there is no initializer so compiler complains.
    // the trick is to use constructor method
    // the commented out code and constructor function is rather verbose
    // so there is a shorthand version
    // name:string;
    // editor: Editor;
    // creationYear: number;
    // constructor(
    // name:string,
    // editor: Editor,
    // creationYear: number){
    //   this.name = name;
    //   this.editor = editor;
    //   this.creationYear = creationYear;
    // }
    // Shorthand constructor version with private/protected class variables.
    // Interesting is constructor still allows to set those w/o complaining.
    // Other way is to set those variables to readonly.
    // Even more interesting is private and protected. All can be used in
    // this declaration and set up in constructor!
    // Note: since the constructor method is not redeclared in FlyingHero
    // private variable creationYear is set on the object and printed
    // out in introduceSelf method of FlyingHero. However, other methods
    // of FlyingHero have no access to it. That's a bug.
    function SuperHero(name, _editor, creationYear) {
        this.name = name;
        this._editor = _editor;
        this.creationYear = creationYear;
        this.creationYear = creationYear;
    }
    Object.defineProperty(SuperHero.prototype, "editor", {
        // getters example
        get: function () {
            return Editor[this._editor];
        },
        //setters example
        set: function (editorName) {
            this._editor = Editor[editorName]; //type casting example
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuperHero.prototype, "introduction", {
        get: function () {
            return "\n      Super hero\n      " + this.name + "\n      " + this.editor + "\n      " + this.creationYear;
        },
        enumerable: true,
        configurable: true
    });
    return SuperHero;
}());
;
// inheritance example along with interface
var FlyingHero = /** @class */ (function (_super) {
    __extends(FlyingHero, _super);
    function FlyingHero() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FlyingHero.prototype.fly = function (message) {
        console.log(message);
    };
    return FlyingHero;
}(SuperHero));
var greenLantern = new FlyingHero("Silver Age Green Lantern", Editor.DC, 1958);
console.log(greenLantern.introduction);
var superman = new FlyingHero("Superman", Editor.MARVEL, 1938);
superman.editor = "DC";
console.log("Superman", superman);
console.log(superman.introduction);
superman.fly("Up and away!");
// the below .hasOwnProperty was not sugested by autocomplete.
// how to fix? It's only atom problem.
console.log(superman.hasOwnProperty("name"));
//# sourceMappingURL=object-oriented.js.map