import { Request, Response } from "express";
import { UserModel } from "../model/User";
type SignUpType = {
  name: string;
  email: string;
  phoneNumber: number;
  password: string;
};
type LogInType = {
  email: string;
  password: string;
};
export const signUp = async (req: Request, res: Response) => {
  try {
    const { name, email, phoneNumber, password }: Required<SignUpType> =
      req.body;
    const result = await UserModel.create({
      name,
      email,
      phoneNumber,
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
