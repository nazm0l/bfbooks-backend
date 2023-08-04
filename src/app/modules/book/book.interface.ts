export interface IBook {
  id: number;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  description: string;
  price: number;
  cover: string;
  rating?: number;
  tags?: string[];
  reviews?: string[];
}
