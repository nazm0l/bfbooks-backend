import express from "express";
import { createBook, getAllBooks, getBookById } from "./book.controller";

const router = express.Router();

router.post("/", createBook);
router.get("/", getAllBooks);
router.get("/:id", getBookById);

export default router;
