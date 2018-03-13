"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var apiGetAllCourses_1 = require("./apiGetAllCourses");
var apiGetCourseDetail_1 = require("./apiGetCourseDetail");
function initRestApi(app) {
    // defining routes
    app.route("/api/courses").get(apiGetAllCourses_1.apiGetAllCourses);
    app.route("/api/courses/:id").get(apiGetCourseDetail_1.apiGetCourseDetail);
}
exports.initRestApi = initRestApi;
//# sourceMappingURL=api.js.map