"use strict";
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
console.log(hello({ firstName: "Jacek" })); // thats bad.
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
//# sourceMappingURL=learning-types.js.map