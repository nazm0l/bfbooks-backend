import express from "express";
import {
  createBook,
  getAllBooks,
  getBookById,
  updateBookById,
} from "./book.controller";

const router = express.Router();

router.post("/", createBook);
router.get("/", getAllBooks);
router.get("/:id", getBookById);
router.patch("/:id", updateBookById);

export default router;
