import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserInDB = async (user: IUser) => {
  const newUser = await User.create(user);
  return newUser;
};
