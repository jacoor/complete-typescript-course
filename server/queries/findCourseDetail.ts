import { CourseModel, LessonModel } from "../model/model";

import Bluebird = require("bluebird");

import { CourseDetail } from "../../shared/model/course-detail"
import { createCourseDetail } from "../../shared/model/createCourseDetail";

export function findCourseDetail(courseId:number):Bluebird<CourseDetail>{
  return CourseModel.findById(courseId, {
    include:[{
      model: LessonModel,
    }],
    // order: [[LessonModel, "seqNo"]]
  })
  .then(createCourseDetail)
};
