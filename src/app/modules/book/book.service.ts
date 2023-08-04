import { IBook } from "./book.interface";
import Book from "./book.model";

export const createBookInDB = async (book: IBook) => {
  const createdBook = new Book(book);
  return await createdBook.save();
};
