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
function apiGetAllCourses(req, res) {
    findAllCourses_1.findAllCourses()
        .then(function () {
        // error thrown here, inside promise chain,
        // will not be caught by middleware
        throw new Error("Error in promise chain!");
    })
        .then(function (results) {
        res.status(200).json({ results: results });
    })
        .catch(_.partial(onError_1.onError, res, "findAllCourses failed"));
}
exports.apiGetAllCourses = apiGetAllCourses;
;
//# sourceMappingURL=apiGetAllCourses.js.map