"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
var _ = __importStar(require("lodash"));
var updateLesson_1 = require("../queries/updateLesson");
var onSuccess_1 = require("./onSuccess");
var databaseErrorHandler_1 = require("./databaseErrorHandler");
var onError_1 = require("./onError");
function apiPatchLesson(req, res) {
    var lessonId = req.params.id;
    updateLesson_1.updateLesson(lessonId, req.body)
        .then(_.partial(onSuccess_1.onSuccess, res))
        .catch(_.partial(databaseErrorHandler_1.databaseErrorHandler, res))
        .catch(_.partial(onError_1.onError, res, "Could not update lesson."));
}
exports.apiPatchLesson = apiPatchLesson;
//# sourceMappingURL=apiPatchLesson.js.map