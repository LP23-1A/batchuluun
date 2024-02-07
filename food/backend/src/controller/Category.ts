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
    res.status(500).send(error);
  }
};
export const getCategory = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const result = await CategoryModel.findOne({ name: name }).populate(
      "foodId"
    );

    res.status(200).send({ success: true, result });
  } catch (error) {
    res.status(500).send(error);
  }
};
