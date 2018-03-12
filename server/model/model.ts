import ORM from "Sequelize";
import {Sequelize, LoggingOptions} from "sequelize";
import { initCourseModel } from "./initCourseModel";

const dbURL = "postgres://postgres:postgres@localhost:"
  + "5432/complete-typescript-course";

const options:LoggingOptions = {benchmark:true, logging: console.log};

const sequelize = new ORM(dbURL, options);

export const CourseModel = initCourseModel(sequelize);
