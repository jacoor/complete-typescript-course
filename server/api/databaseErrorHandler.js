"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hri = require("human-readable-ids").hri;
function databaseErrorHandler(res, err) {
    var id = hri.random();
    console.error("Database error occured", id, err);
    res.status(500).send(JSON.stringify({
        code: "ERR-002",
        message: "Creation of lesson failed " + id
    }));
}
exports.databaseErrorHandler = databaseErrorHandler;
//# sourceMappingURL=databaseErrorHandler.js.map