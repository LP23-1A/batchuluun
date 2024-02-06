import { Request, Response } from "express";
import { CategoryModel } from "../model/Category";
type CategoryType = {
  name: String;
};
export const createCategory = async (req: Request, res: Response) => {
  try {
    const { name }: Required<CategoryType> = req.body;
    const category = await CategoryModel.create({ name: name });
    res.status(200).send({ success: true, category });
  } catch (error) {
    console.log(error);
  }
};
export const getAllCategory = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const result = await CategoryModel.find({ name: name }).populate("foodId");
    console.log(result);

    res.status(200).send({ success: true, result });
  } catch (error) {
    console.log(error);
  }
};
