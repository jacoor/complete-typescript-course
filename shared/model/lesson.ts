export interface Lesson {
  readonly id: string;
  readonly url: string;
  description: string;
  duration: string;
  seqNo: number;
  courseId: string;
  pro: boolean;
  tags?: string;
}
