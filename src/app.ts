import express, { Application, Request, Response } from "express";
import cors from "cors";

//Import Routes
import bookRoutes from "./app/modules/book/book.route";

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/books", bookRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
