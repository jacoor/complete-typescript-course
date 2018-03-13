import { LessonModel } from "../model/model";


export function deleteLesson(id:number){
  // No validation on purpose.
  // Open question: where should the validation be done?
  // Here, or in the API files?
  return LessonModel.destroy({
    where: {id}
  });
}
