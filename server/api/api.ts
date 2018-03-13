import {Application} from "express";
import { findAllCourses } from "../queries/findAllCourses";
import { apiGetAllCourses } from "./apiGetAllCourses";
import { apiGetCourseDetail } from "./apiGetCourseDetail";
import { apiCreateLesson } from "./apiCreateLesson";

export function initRestApi(app:Application){

  // defining routes
  app.route("/api/courses").get(apiGetAllCourses);
  app.route("/api/courses/:id").get(apiGetCourseDetail);

  //post calls
  app.route("/api/lesson").post(apiCreateLesson);
}
