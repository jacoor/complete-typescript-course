"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
var findAllCourses_1 = require("../queries/findAllCourses");
var _ = __importStar(require("lodash"));
var onError_1 = require("./onError");
var onSuccess_1 = require("./onSuccess");
function apiGetAllCourses(req, res) {
    findAllCourses_1.findAllCourses()
        .then(_.partial(onSuccess_1.onSuccess, res))
        .catch(_.partial(onError_1.onError, res, "findAllCourses failed"));
}
exports.apiGetAllCourses = apiGetAllCourses;
;
//# sourceMappingURL=apiGetAllCourses.js.map