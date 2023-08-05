import express, { Application, Request, Response } from "express";
import cors from "cors";

//Import Routes
import bookRoutes from "./app/modules/book/book.route";
import userRoutes from "./app/modules/user/user.route";

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/books", bookRoutes);
app.use("/api/v1/users", userRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
