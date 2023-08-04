import express from "express";
import { createBook, getAllBooks } from "./book.controller";

const router = express.Router();

router.get("/", getAllBooks);
router.post("/", createBook);

export default router;
