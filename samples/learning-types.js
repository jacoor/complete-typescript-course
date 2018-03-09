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
var personWithOptionalName = {
    lastname: "Doe",
};
console.log(personWithOptionalName);
//# sourceMappingURL=learning-types.js.map