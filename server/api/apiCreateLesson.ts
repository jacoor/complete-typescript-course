import { Request, Response } from "express";

import * as _ from "lodash";
import { onError } from "./onError";
import { onSuccess } from "./onSuccess";
import { createLesson } from "../queries/createLesson";

export function apiCreateLesson (req:Request, res:Response ){
  console.log(req.data);
  createLesson(req.body)
  .then(_.partial(onSuccess, res))
  .catch(_.partial(onError, res, "Could not create lesson."));
};
