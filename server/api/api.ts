import {Application} from "express";
import { findAllCourses } from "../queries/findAllCourses";
import { apiGetAllCourses } from "./apiGetAllCourses";
import { apiGetCourseDetail } from "./apiGetCourseDetail";

export function initRestApi(app:Application){

  // defining routes
  app.route("/api/courses").get(apiGetAllCourses);
  app.route("/api/courses/:id").get(apiGetCourseDetail);
}
