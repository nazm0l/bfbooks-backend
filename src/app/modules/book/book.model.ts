import { Schema, model } from "mongoose";
import { IBook } from "./book.interface";

const bookSchema = new Schema<IBook>({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: true },
  publicationDate: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  cover: { type: String, required: true },
  rating: { type: Number },
  tags: [{ type: String }],
  reviews: [{ type: String }],
});

const Book = model<IBook>("Book", bookSchema);

export default Book;
