"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var api_1 = require("./api/api");
var apiErrorHandler_1 = require("./api/apiErrorHandler");
// defining express application
var app = express_1.default();
api_1.initRestApi(app);
//handling errors using middleware
app.use(apiErrorHandler_1.apiErrorHandler);
app.listen(8090, function () {
    console.log("Server is running");
});
//# sourceMappingURL=server.js.map