export interface Blogs {
  data: Blog[];
}

export interface Blog {
  id: number;
  title: string;
  description: string;
  image: string;
  publish_date: Date;
  categories: Category[];
  author: string;
}

export interface Category {
  id: number;
  title: string;
  text_color: string;
  background_color: string;
}
