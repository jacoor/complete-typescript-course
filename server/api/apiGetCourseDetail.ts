import { Request, Response } from "express";
import _ from "lodash";
import { onError } from "./onError";
import { onSuccess } from "./onSuccess";
import { findCourseDetail } from "../queries/findCourseDetail";

export function apiGetCourseDetail(req: Request, res: Response){
  const courseId = parseInt(req.params.id);

  findCourseDetail(courseId)
    .then(_.partial(onSuccess, res))
    .catch(_.partial(
      onError, res, "Could not find course detail for given id "));

};
