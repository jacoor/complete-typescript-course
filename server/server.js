"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("./model/model");
model_1.CourseModel.findAll()
    .then(function (results) { return console.log(JSON.stringify(results)); });
//# sourceMappingURL=server.js.map