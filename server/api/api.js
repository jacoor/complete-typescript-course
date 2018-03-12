"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var apiGetAllCourses_1 = require("./apiGetAllCourses");
function initRestApi(app) {
    // defining routes
    app.route("/api/courses").get(apiGetAllCourses_1.apiGetAllCourses);
}
exports.initRestApi = initRestApi;
//# sourceMappingURL=api.js.map