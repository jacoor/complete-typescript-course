"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = __importDefault(require("lodash"));
var onError_1 = require("./onError");
var onSuccess_1 = require("./onSuccess");
var findCourseDetail_1 = require("../queries/findCourseDetail");
function apiGetCourseDetail(req, res) {
    var courseId = parseInt(req.params.id);
    findCourseDetail_1.findCourseDetail(courseId)
        .then(lodash_1.default.partial(onSuccess_1.onSuccess, res))
        .catch(lodash_1.default.partial(onError_1.onError, res, "Could not find course detail for given id "));
}
exports.apiGetCourseDetail = apiGetCourseDetail;
;
//# sourceMappingURL=apiGetCourseDetail.js.map