"use strict";
// decorators examples
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var LoggingLevel;
(function (LoggingLevel) {
    LoggingLevel[LoggingLevel["INFO"] = 0] = "INFO";
    LoggingLevel[LoggingLevel["WARNING"] = 1] = "WARNING";
    LoggingLevel[LoggingLevel["DEBUG"] = 2] = "DEBUG";
    LoggingLevel[LoggingLevel["TRACE"] = 3] = "TRACE";
})(LoggingLevel || (LoggingLevel = {}));
var loggingLevel = LoggingLevel.DEBUG;
function LogMethod(level) {
    return function (target, propertyKey, descriptor) {
        // console.log("target: ", target);
        // console.log("propertyKey: ", propertyKey);
        // console.log("descriptor: ", descriptor);
        // console.log(descriptor.value);
        var originalFunction = descriptor.value;
        // descriptor.value is the function that is decorated
        // (saveData in this case).
        // The function is completely overwritable so you can create completely
        // different function.
        descriptor.value = function () {
            // important. Don't use arrow function to overwrite descriptor.value
            // because it will destroy reference to "this".
            // Instead, use old way with function(...args:any) as defined above.
            // This is actually rare case where arrow function should be avoided.
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            // Adding logging functionality
            if (level <= loggingLevel) {
                console.log(">> " + propertyKey + " " + JSON.stringify(args));
            }
            originalFunction.apply(this, args);
        };
    };
}
var Database = /** @class */ (function () {
    function Database() {
        this.name = "CTCDB";
    }
    Database.prototype.saveData = function (data) {
        console.log("Saving data to database: " + this.name + "  " + JSON.stringify(data));
    };
    __decorate([
        LogMethod(LoggingLevel.DEBUG)
    ], Database.prototype, "saveData", null);
    return Database;
}());
var db = new Database();
db.saveData({ "message": "Saving the data!" });
//# sourceMappingURL=decorators.js.map