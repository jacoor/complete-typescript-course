"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var findAllCourses_1 = require("../queries/findAllCourses");
function apiGetAllCourses(req, res) {
    findAllCourses_1.findAllCourses().then(function (results) {
        res.status(200).json({ results: results });
    });
}
exports.apiGetAllCourses = apiGetAllCourses;
//# sourceMappingURL=apiGetAllCourses.js.map