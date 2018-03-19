import { CourseModel } from "../model/model";
import {
  createCourseSummaries,
  CourseSummary } from "../../shared/model/course-summary";
import Bluebird = require("bluebird");

export function findAllCourses(): Bluebird<CourseSummary[]>{
  return CourseModel.findAll({
    order: ["seqNo"],
  })
  .then(dbModel => createCourseSummaries(dbModel))
}
