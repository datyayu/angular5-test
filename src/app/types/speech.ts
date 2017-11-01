export type Speech = {
  id?: string;
  title: string;
  text: string;
  author: string;
  keywords: string;
  date?: {
    day: number;
    month: number;
    year: number;
  };
}
