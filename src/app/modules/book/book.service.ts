import { IBook } from "./book.interface";
import Book from "./book.model";

export const createBookInDB = async (book: IBook) => {
  const createdBook = new Book(book);
  return await createdBook.save();
};

export const getAllBooksFromDB = async () => {
  return await Book.find();
};

export const getBookByIdFromDB = async (id: string) => {
  const book = await Book.findById(id);
  return book;
};
