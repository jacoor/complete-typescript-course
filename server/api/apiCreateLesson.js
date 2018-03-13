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
var databaseErrorHandler_1 = require("./databaseErrorHandler");
var hri = require("human-readable-ids").hri;
function apiCreateLesson(req, res) {
    createLesson_1.createLesson(req.body)
        .then(_.partial(onSuccess_1.onSuccess, res))
        .catch(_.partial(databaseErrorHandler_1.databaseErrorHandler, res))
        .catch(_.partial(onError_1.onError, res, "Could not create lesson."));
}
exports.apiCreateLesson = apiCreateLesson;
;
// example curl calls left for future reference
// curl -d '{"url":"2", "description":"1", "duration":"1", "seqNo":"1", "courseId":"1", "pro":"false", "tags":"", "gitHubUrl":"2", "id":"9999999" }' -H "Content-Type: application/json" -X POST http://localhost:8090/api/lesson
// curl  -H "Content-Type: application/json" -X POST http://localhost:8090/api/lesson
//# sourceMappingURL=apiCreateLesson.js.map