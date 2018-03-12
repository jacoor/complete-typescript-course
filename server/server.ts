import { CourseModel } from "./model/model";

CourseModel.findAll()
  .then(results => console.log(JSON.stringify(results)));
