import { CategoryModel } from "../model/Category";
import { Request, Response } from "express";
type CategoryType = {
  name: String;
};
export const createCategory = async (req: Request, res: Response) => {
  try {
    const { name }: Required<CategoryType> = req.body;
    const result = await CategoryModel.create({ name: name });
    console.log("ok");
  } catch (error) {
    console.log(error);
  }
};
export const getAllCategory = async (req: Request, res: Response) => {
  try {
    const result = await CategoryModel.find();
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};
