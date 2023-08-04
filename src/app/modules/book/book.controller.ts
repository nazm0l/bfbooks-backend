import { Request, Response } from "express";
import { createBookInDB, getAllBooksFromDB } from "./book.service";

export const createBook = async (req: Request, res: Response) => {
  try {
    const book = await createBookInDB(req.body);
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await getAllBooksFromDB();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
