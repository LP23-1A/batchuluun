import { Request, Response } from "express";
import { UserModel } from "../model/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
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
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      password: password,
    });
    res.status(201).send(result);
  } catch (error) {
    res.status(500).send();
  }
};

export const LogIn = async (req: Request, res: Response) => {
  try {
    const { email, password }: Required<LogInType> = req.body;
    const user = await UserModel.findOne({
      email: email,
    }).select("+password");
    if (!user) {
      return res.status(404).send({ msg: "user not found" });
    }

    const isValid = bcrypt.compare(password, user.password as string);

    if (!isValid) {
      return res.status(400).send({ msg: "Email or password incorrect" });
    }

    const token = jwt.sign({ email }, "MY_SECRET_KEY");

    return res.status(200).send({ success: true, token, user });
  } catch (error) {
    res.status(500).send(error);
  }
};

// export const LogIn = async (req: Request, res: Response) => {
//   try {
//     const { email, password } = req.body;
//     const user = await UserModel.findOne({ email: email, password: password });
//     res.status(200).send({ success: true, user });
//   } catch (error) {
//     res.status(500).send(error);
//   }
// };
export const getUser = async (req: Request, res: Response) => {
  try {
    const { email }: Required<LogInType> = req.body;
    const user = await UserModel.findOne({ email: email });
    res.status(200).send({ success: true, user });
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
    const { email, password } = req.body;
    const updateOneUser = await UserModel.findByIdAndUpdate(updateUserId, {
      email: email,
      password: password,
    });
    return res.status(200).send({ success: true, updateOneUser });
  } catch (error) {
    res.status(500).send(error);
  }
};
