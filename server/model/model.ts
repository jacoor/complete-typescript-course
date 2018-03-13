import ORM from "Sequelize";
import {Sequelize, LoggingOptions} from "sequelize";
import { initCourseModel } from "./initCourseModel";
import { initLessonModel } from "./initLessonModel";

const dbURL = "postgres://postgres:postgres@localhost:"
  + "5432/complete-typescript-course";

const options:LoggingOptions = {benchmark:true, logging: console.log};

const sequelize = new ORM(dbURL, options);

export const CourseModel = initCourseModel(sequelize);

export const LessonModel = initLessonModel(sequelize);

// bidirectional relation definition
CourseModel.hasMany(LessonModel, {foreignKey:"courseId"});
LessonModel.belongsTo(CourseModel, {foreignKey:"courseId"});
