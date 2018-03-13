"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var apiGetAllCourses_1 = require("./apiGetAllCourses");
var apiGetCourseDetail_1 = require("./apiGetCourseDetail");
var apiCreateLesson_1 = require("./apiCreateLesson");
var apiPatchLesson_1 = require("./apiPatchLesson");
var apiDeleteLesson_1 = require("./apiDeleteLesson");
function initRestApi(app) {
    // defining routes
    app.route("/api/courses").get(apiGetAllCourses_1.apiGetAllCourses);
    app.route("/api/courses/:id").get(apiGetCourseDetail_1.apiGetCourseDetail);
    //post calls
    app.route("/api/lesson").post(apiCreateLesson_1.apiCreateLesson);
    //update lesson
    app.route("/api/lesson/:id").patch(apiPatchLesson_1.apiPatchLesson);
    // delete lesson
    app.route("/api/lesson/:id").delete(apiDeleteLesson_1.apiDeleteLesson);
}
exports.initRestApi = initRestApi;
//# sourceMappingURL=api.js.map