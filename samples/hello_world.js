"use strict";
var text = "Ala";
var sayHello = function (message) {
    console.log(message);
};
// very short version
var sayHelloShort = function (message) { console.log(message); };
sayHello(text);
sayHelloShort(text);
//another arrow function thing
var Person = /** @class */ (function () {
    function Person(name) {
        var _this = this;
        this.sayHi = function () {
            var _this = this;
            console.log("not timeoput ", this.name);
            setTimeout(function () {
                console.log("Hello, my name is " + _this.name);
            }, 1000);
        };
        this.sayHiArrow = function () {
            console.log("not timeoput ", _this.name);
            setTimeout(function () {
                console.log("Hello Arrow,\n\n\n\n\n              my name is " + _this.name);
            }, 1000);
        };
        this.name = name;
    }
    ;
    return Person;
}());
var person = new Person("Blob");
person.sayHi();
person.sayHiArrow();
// object destructuring
function buildPersonData(_a, address) {
    var firstName = _a.firstName, lastName = _a.lastName;
    if (address === void 0) { address = [""]; }
    return firstName + " " + lastName + " " + address;
}
var personData = {
    firstName: "Kobe",
    lastName: "Bryant",
    address: "Staples Center"
};
buildPersonData(personData);
var firstName = "Kobe", lastName = "Bryant";
var partialAddress = ["Street Name", "Street number", "Po box"];
var personData2 = {
    firstName: firstName,
    lastName: lastName
};
var fullAddress = partialAddress.concat(["Staples Center"]);
buildPersonData(personData2, fullAddress);
var fullAddress2 = partialAddress.concat(["Staples Center"]);
buildPersonData(personData2, fullAddress2);
//# sourceMappingURL=hello_world.js.map