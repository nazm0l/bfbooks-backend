import mongoose from "mongoose";
import app from "./app";

const port: number = 5000;

// Connect to MongoDB

async function dbConnect() {
  try {
    await mongoose.connect("mongodb://0.0.0.0:27017/book-cat");
    console.log("Connected to MongoDB");

    app.listen(port, () => {
      console.log(`Server started at port ${port}`);
    });
  } catch (err) {
    console.log(`Error in Database`, err);
  }
}

dbConnect();
