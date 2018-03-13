"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../model/model");
function deleteLesson(id) {
    // No validation on purpose.
    // Open question: where should the validation be done?
    // Here, or in the API files?
    return model_1.LessonModel.destroy({
        where: { id: id }
    });
}
exports.deleteLesson = deleteLesson;
//# sourceMappingURL=deleteLesson.js.map