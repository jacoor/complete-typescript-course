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
var onError_1 = require("./onError");
var onSuccess_1 = require("./onSuccess");
var databaseErrorHandler_1 = require("./databaseErrorHandler");
var deleteLesson_1 = require("../queries/deleteLesson");
var hri = require("human-readable-ids").hri;
function apiDeleteLesson(req, res) {
    var lessonId = req.params.id;
    deleteLesson_1.deleteLesson(lessonId)
        .then(_.partial(onSuccess_1.onSuccess, res))
        .catch(_.partial(databaseErrorHandler_1.databaseErrorHandler, res))
        .catch(_.partial(onError_1.onError, res, "Could not delete lesson " + lessonId));
}
exports.apiDeleteLesson = apiDeleteLesson;
;
//# sourceMappingURL=apiDeleteLesson.js.map