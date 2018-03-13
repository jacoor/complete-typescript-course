import { LessonModel } from "../model/model";


export function createLesson(props: any){
  // No validation on purpose.
  // Open question: where should the validation be done?
  // Here, or in the API files?
  return LessonModel.create(props);
}
