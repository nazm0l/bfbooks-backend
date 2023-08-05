import { Request, Response } from "express";
import { createUserInDB } from "./user.service";

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await createUserInDB(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
