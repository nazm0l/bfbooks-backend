import { Request, Response } from "express";
import { createBookInDB } from "./book.service";

export const createBook = async (req: Request, res: Response) => {
  try {
    const book = await createBookInDB(req.body);
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
