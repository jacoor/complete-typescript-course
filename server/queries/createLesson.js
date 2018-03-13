"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../model/model");
function createLesson(props) {
    // No validation on purpose.
    // Open question: where should the validation be done?
    // Here, or in the API files?
    return model_1.LessonModel.create(props);
}
exports.createLesson = createLesson;
//# sourceMappingURL=createLesson.js.map