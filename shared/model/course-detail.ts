import { Lesson } from "./lesson";
import { CourseSummary } from "./course-summary";

// type could be used here, however since this is object type
// interface is recommended.
export interface CourseDetail extends CourseSummary {
  longDescription: string;
  comingSoon?: boolean;
  isNew?: boolean;  //optional
  isOngoing?: boolean;
  lessons: Lesson[];
  // readonly lessons: Lesson[],
  // note: lessons.push will work. Readonly here only means that reference
  // is immutable, the array itself can be modified.
  // Best way to prevent changes would be to use immutable.js or similar lib.
}
