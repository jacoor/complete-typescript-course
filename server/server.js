"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var findAllCourses_1 = require("./queries/findAllCourses");
var express_1 = __importDefault(require("express"));
// defining express application
var app = express_1.default();
// defining routes
app.route("/api/courses").get(function (req, resp) {
    findAllCourses_1.findAllCourses().then(function (results) {
        resp.status(200).json({ results: results });
    });
});
app.listen(8090, function () {
    console.log("Server is running");
});
//# sourceMappingURL=server.js.map