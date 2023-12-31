export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  isAdmin?: boolean;
  token?: string;
}
