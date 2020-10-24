import {CategoryInterface} from './category.interface';

export interface ArticleInterface {
  rubric: string;
  topic: string;
  id: string;
  description: string;
  dateOfPublication: string;
  categories: Array<CategoryInterface>;
  imgSrc: string;
  link?: string;
}
