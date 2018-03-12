import { findAllCourses } from "../queries/findAllCourses";

import { Request, Response } from "express";

export function apiGetAllCourses (req:Request, res:Response ){
  findAllCourses().then(results => {
    res.status(200).json({results});
  });
}
