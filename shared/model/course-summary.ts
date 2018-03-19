import { Lesson } from "./lesson";

// type could be used here, however since this is object type
// interface is recommended.
export interface CourseSummary {
  readonly id: string;
  description: string;
  readonly url: string;
  seqNo: number;
  iconUrl: string;
  courseListIcon: string;
}
// mapping function.
// Descrtucturizes the object from db into the one it returns.
// Expects anym, but with certain attributes.
export function createCourseSummary({
  id, url, description, iconUrl, courseListIcon, seqNo
}:any):CourseSummary{
  return {id, url, description, iconUrl, courseListIcon, seqNo}
}

export function createCourseSummaries(data:any[]):CourseSummary[]{
  return data.map(createCourseSummary);
}
