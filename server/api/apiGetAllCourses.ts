import { findAllCourses } from "../queries/findAllCourses";

import { Request, Response } from "express";

import * as _ from "lodash";
import { onError } from "./onError";
import { onSuccess } from "./onSuccess";

export function apiGetAllCourses (
  req:Request, res:Response ){
  findAllCourses()
  // .then(()=>{
    // error thrown here, inside promise chain,
    // will not be caught by middleware
    // this error is being catch by .catch function at the end of this
    // response handling chain.
    // throw new Error("Error in promise chain!");
    // left for learning purposes.
  // })
  // refactoring of default success
  .then(_.partial(onSuccess, res))
  // a way to catch errors in response chain
  // version 1, pretty ugly and verbose, not preferred
  //.catch(err => onError(res, "findAllCourses", err));
  // version 2 using partials from lodash
  .catch(_.partial(onError, res, "findAllCourses failed"));
};
