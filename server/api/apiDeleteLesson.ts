import { Request, Response } from "express";

import * as _ from "lodash";
import { onError } from "./onError";
import { onSuccess } from "./onSuccess";
import { debug } from "util";
import { databaseErrorHandler } from "./databaseErrorHandler";
import { deleteLesson } from "../queries/deleteLesson";

const hri = require("human-readable-ids").hri

export function apiDeleteLesson (req:Request, res:Response ){
  const lessonId = req.params.id
  deleteLesson(lessonId)
  .then(_.partial(onSuccess, res))
  .catch(_.partial(databaseErrorHandler, res))
  .catch(_.partial(onError, res, `Could not delete lesson ${lessonId}`));
};
