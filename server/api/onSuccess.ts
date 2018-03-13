import { Response } from "express";

export function onSuccess(res: Response, data:any){
  return res.status(200).json({"payload": data});
}
