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
    res.status(201).send(result);
  } catch (error) {
    res.status(500).send();
  }
};

export const LogIn = async (req: Request, res: Response) => {
  try {
    const { email, password }: Required<LogInType> = req.body;
    const result = await UserModel.findOne({
      email: email,
      password: password,
    });
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const deleteId = req.params.id;
    const deleteOneUser = await UserModel.findByIdAndDelete(deleteId);
    res.status(200).send({ success: true, deleteOneUser });
    console.log("delete");
  } catch (error) {
    res.status(500).send(error);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const updateUserId = req.params.id;
    const { name } = req.body;
    const updateOneFood = await UserModel.findByIdAndUpdate(updateUserId);
    return res.status(200).send({ success: true, updateUserId });
  } catch (error) {
    res.status(500).send(error);
  }
};
