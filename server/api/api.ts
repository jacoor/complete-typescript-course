import {Application} from "express";
import { findAllCourses } from "../queries/findAllCourses";
import { apiGetAllCourses } from "./apiGetAllCourses";
import { apiGetCourseDetail } from "./apiGetCourseDetail";
import { apiCreateLesson } from "./apiCreateLesson";
import { apiPatchLesson } from "./apiPatchLesson";
import { apiDeleteLesson } from "./apiDeleteLesson";

export function initRestApi(app:Application){

  // defining routes
  app.route("/api/courses").get(apiGetAllCourses);
  app.route("/api/courses/:id").get(apiGetCourseDetail);

  //post calls
  app.route("/api/lesson").post(apiCreateLesson);

  //update lesson
  app.route("/api/lesson/:id").patch(apiPatchLesson);

  // delete lesson
  app.route("/api/lesson/:id").delete(apiDeleteLesson);
}
