import { Request, Response } from "express";
import { UserModel } from "../model/User";
type SignUpType = {
  username: string;
  email: string;
  location: string;
  password: string;
};
type LogInType = {
  email: string;
  password: string;
};
export const signUp = async (req: Request, res: Response) => {
  try {
    const { username, email, location, password }: Required<SignUpType> =
      req.body;
    const result = await UserModel.create({
      username,
      email,
      location,
      password,
    });
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};
export const LogIn = async (req: Request, res: Response) => {
  try {
    const { email, password }: Required<LogInType> = req.body;
    const result = await UserModel.findOne({
      email: email,
      password: password,
    });
    res.send("ok");
  } catch (error) {
    console.log(error);
  }
};
