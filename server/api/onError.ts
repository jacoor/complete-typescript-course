import { Response } from "express";


// this is a reusable error handler used in .catch in promise chain.
// check apiGetAllCourses for more information.
export function onError(res:Response, message:string, err:any){
  console.error("Promise chain error", message, err);
  res.status(500).send();
};
