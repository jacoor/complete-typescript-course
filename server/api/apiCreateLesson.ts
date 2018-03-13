import { Request, Response } from "express";

import * as _ from "lodash";
import { onError } from "./onError";
import { onSuccess } from "./onSuccess";
import { createLesson } from "../queries/createLesson";
import { debug } from "util";
import { databaseErrorHandler } from "./databaseErrorHandler";

const hri = require("human-readable-ids").hri

export function apiCreateLesson (req:Request, res:Response ){
  createLesson(req.body)
  .then(_.partial(onSuccess, res))
  .catch(_.partial(databaseErrorHandler, res))
  .catch(_.partial(onError, res, "Could not create lesson."));
};



// example curl calls left for future reference
// curl -d '{"url":"2", "description":"1", "duration":"1", "seqNo":"1", "courseId":"1", "pro":"false", "tags":"", "gitHubUrl":"2", "id":"9999999" }' -H "Content-Type: application/json" -X POST http://localhost:8090/api/lesson
// curl  -H "Content-Type: application/json" -X POST http://localhost:8090/api/lesson
