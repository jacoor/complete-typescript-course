"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// this is a reusable error handler used in .catch in promise chain.
// check apiGetAllCourses for more information.
function onError(res, message, err) {
    console.error("Promise chain error", message, err);
    res.status(500).send();
}
exports.onError = onError;
;
//# sourceMappingURL=onError.js.map