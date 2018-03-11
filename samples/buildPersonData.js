"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// how to avoid any on firstname/lastname dict?
// create a type with these data, ie persomType and use to replace the dict in question.
// type PersonType = {
//     firstName: string,
//     lastName: string
// }
// so the function signature will look like: 
// function buildPersonData2({firstName, lastName}:PersonType, ...address:any[]){
function buildPersonData2(_a) {
    var firstName = _a.firstName, lastName = _a.lastName;
    var address = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        address[_i - 1] = arguments[_i];
    }
    // ellipsis here works as **kwargs in python
    return firstName + " " + lastName + " " + address;
}
exports.buildPersonData2 = buildPersonData2;
exports.default = buildPersonData2;
//# sourceMappingURL=buildPersonData.js.map