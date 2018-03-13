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
var createLesson_1 = require("../queries/createLesson");
function apiCreateLesson(req, res) {
    console.log(req.data);
    createLesson_1.createLesson(req.body)
        .then(_.partial(onSuccess_1.onSuccess, res))
        .catch(_.partial(onError_1.onError, res, "Could not create lesson."));
}
exports.apiCreateLesson = apiCreateLesson;
;
//# sourceMappingURL=apiCreateLesson.js.map