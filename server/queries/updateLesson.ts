import { LessonModel } from "../model/model";


export function updateLesson(id: number, props: any){
  return LessonModel.update(
    props,
    {
      where:{
        id:id
      }
    }
  );
}
