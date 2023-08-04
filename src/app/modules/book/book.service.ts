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

export const updateBookByIdInDB = async (id: string, data: IBook) => {
  const book = await Book.findById(id);
  if (book) {
    book.title = data.title || book.title;
    book.author = data.author || book.author;
    book.genre = data.genre || book.genre;
    book.publicationDate = data.publicationDate || book.publicationDate;
    book.description = data.description || book.description;
    book.price = data.price || book.price;
    book.cover = data.cover || book.cover;
    book.rating = data.rating || book.rating;
    book.tags = data.tags || book.tags;
    book.reviews = data.reviews || book.reviews;
    const updatedBook = await Book.updateOne({ _id: id }, book);

    return updatedBook;
  }
};
