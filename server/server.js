"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize_1 = __importDefault(require("Sequelize"));
// import {Sequelize} from "sequelize";
var dbURL = "postgres://postgres:postgres@localhost:"
    + "5432/complete-typescript-course";
var sequelize = new Sequelize_1.default(dbURL);
var CourseModel = sequelize.define("Course", {
    description: Sequelize_1.default.STRING,
    url: Sequelize_1.default.STRING,
    longDescription: Sequelize_1.default.TEXT,
    iconUrl: Sequelize_1.default.STRING,
    courseListIcon: Sequelize_1.default.STRING,
    seqNo: Sequelize_1.default.INTEGER,
    comingSoon: Sequelize_1.default.BOOLEAN,
    isNew: Sequelize_1.default.BOOLEAN,
    isOngoing: Sequelize_1.default.BOOLEAN,
});
var result = CourseModel.findAll()
    .then(function (results) { return console.log(JSON.stringify(results)); });
//# sourceMappingURL=server.js.map