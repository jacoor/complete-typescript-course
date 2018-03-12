"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize_1 = __importDefault(require("Sequelize"));
function initCourseModel(sequelize) {
    return sequelize.define("Course", {
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
}
exports.initCourseModel = initCourseModel;
;
//# sourceMappingURL=initCourseModel.js.map