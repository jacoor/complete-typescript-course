"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
console.log("section 2.");
var message = "Hello world";
var counter = 1.2;
var messageRead = true;
console.log(message);
var person = {
    firstName: "Kobe",
    lastName: "Bryant",
};
var personWithTypes = {
    firstName: "Kobe",
    lastName: "Bryant",
};
//person.address = "alamaszkara"; //error, no address on type "person";
//notes"
// both "person" and personWithTypes have type defined, therefore adding new type is not possible.
var personWithAnyData = {
    firstName: "Kobe",
    lastName: "Bryant",
};
personWithAnyData.address = "some address data"; // this one works as personWithAnyData has type "Any";
var personFromType = {
    firstName: "Kobe",
    lastName: "Bryant",
};
;
var personWithOptionalName = {
    lastName: "Doe",
};
var personWithOptionalName2 = {
    lastName: "Doe",
};
console.log(personWithOptionalName);
console.log(personWithOptionalName2);
var personWithAddress = {
    name: {
        lastName: "Smith",
    },
};
console.log(personWithAddress);
// in typescript and in js functions are valid variables
function createHelloMessage(name) {
    return "Hello, my name  is " + name;
}
var hello = createHelloMessage;
console.log(hello("Jacek"));
// console.log(hello({firstName:"Jacek"})); // thats bad.
function safeCreateHelloMessage(name, extra) {
    // this function will not accept object as name
    return "Hello, my name  is " + name;
}
// console.log(safeCreateHelloMessage({firstName:"Jacek"})); // fails, due to wrong type.
// actually fails means that the program will compile and run (sic!) however compiler will error out.
var message1 = safeCreateHelloMessage("Bill");
console.log(message1);
var creator = safeCreateHelloMessage;
var message3 = creator("Bill");
console.log(message3);
// using the interface
var creatorFromInterface = safeCreateHelloMessage;
var message4 = creator("Bill 4");
console.log(message4);
// arrays strong typing and tuples
var persons = ["Kobe", "John", "Shaq"];
var counters = [1, 2, 3];
//won't work
//counters = persons;
var tuple = ["string", 1];
var tuple1 = ["name", 1];
var tuple3 = ["ala", "ma", "kota"];
// enums
// 0 - Guard, 1 - Forward, 2 - Center
// using player from previous example
var PlayerPosition;
(function (PlayerPosition) {
    PlayerPosition[PlayerPosition["Guard"] = 0] = "Guard";
    PlayerPosition[PlayerPosition["Forward"] = 1] = "Forward";
    PlayerPosition[PlayerPosition["Center"] = 2] = "Center";
})(PlayerPosition || (PlayerPosition = {}));
var kobe = ["Kobe", PlayerPosition["Guard"]]; //option 1.
var james = ["James", PlayerPosition.Forward]; //option 2.
var shaq = ["Shaq", PlayerPosition.Center];
var players = [kobe, james, shaq];
console.log(players);
// these two won't work, compiler cries an error. It probably works in old version of ts.
// to make it work "or" statement is necessary.
var kobe1 = {
    name: "Kobe",
    position: PlayerPosition["Guard"]
};
console.log(kobe1);
kobe1 = null;
kobe1 = undefined;
// control flow analysis in action
function createMessage(name) {
    if (name) {
        return "Hello, my name  is " + name;
    }
    // typescript control flow complains here that there is no return statement.
    // the reality is that the program returns undefined which is not what tsc expects.
    return "";
}
console.log(createMessage("Bob"));
var player = {
    firstName: "Magic",
    lastName: "Johnson",
    street: "Staples"
};
console.log(player);
var myVar;
myVar = 0;
myVar = "a";
myVar = {};
myVar = [];
myVar = null;
myVar = undefined;
myVar = {};
// you can assign variable with type Any to any other variable (which is not so obvious);
var myCounter = 0;
counter = myVar; // yea, and it's undefined!;
var str = "";
str = myVar; // and it's still any, ie object.
// implicit any compiler option
var playerWithoutType = {
    firstName: "Magic",
    lastName: "Johnson",
    street: "Staples"
};
// with NoImplicitAny tsc option compiler will automatically determine the type of playerWithoutType here as the
// json object above.
// more examples
// in this case tsc returns an error and automatically assigns any type to this variable "message";
function createAnyTypeMessage(message) {
}
// main takeaway: tsc in previous versions didn't throw an error if types were not defined,
// for backwards compatibility. Using the implicitAny option forces compiler to throw an error when
// the type on variable is not defined.
// how to handle 3rd party libraries? Defining types for those is simply impossible as those are often
// written in plain JS or simply are too big to fix.
// As an example lodash library is used
var _ = __importStar(require("lodash"));
var colors = ["Red", "Green", "Blue"];
console.log(_.first(colors));
// introducing "never" and "void" types
function throwError(message) {
    throw new Error("Message not available");
}
var errorMsg = throwError("doesn't work!");
console.log(errorMsg);
// let another_counter: number = message;  // doesnt work
var another_counter = 0;
// errorMsg  = another_counter;  // doesnt work as expected
// void return type -> functions that return nothing
function throwErrorVoid(message) {
    throw new Error("Message not available");
}
var testPerson = { firstName: "ala", lastName: "makota" };
var testPerson2 = testPerson;
var testPerson3 = testPerson;
// why? because ex1 has more properties than ex3 and ex1 also has all props
// of ext 3.
// other way around it will not work because of missing data in ext3.
//# sourceMappingURL=learning-types.js.map