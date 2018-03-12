"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize_1 = __importDefault(require("Sequelize"));
var initCourseModel_1 = require("./initCourseModel");
var dbURL = "postgres://postgres:postgres@localhost:"
    + "5432/complete-typescript-course";
var options = { benchmark: true, logging: console.log };
var sequelize = new Sequelize_1.default(dbURL, options);
exports.CourseModel = initCourseModel_1.initCourseModel(sequelize);
//# sourceMappingURL=model.js.map