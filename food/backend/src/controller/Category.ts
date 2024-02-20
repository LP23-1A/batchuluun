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

export const deleteFood = async (req: Request, res: Response) => {
  try {
    const deleteCategoryId = req.params.id;
    const deleteOneCategory = await CategoryModel.findByIdAndDelete(
      deleteCategoryId
    );
    res.status(200).send({ success: true, deleteOneCategory });
    console.log("delete");
  } catch (error) {
    res.status(500).send(error);
  }
};

export const updateCategory = async (req: Request, res: Response) => {
  try {
    const updateCategory = req.params.id;
    const { name } = req.body;
    const updateOneCategory = await CategoryModel.findByIdAndUpdate(
      updateCategory,
      {
        name,
      }
    );
    return res.status(200).send({ success: true, updateOneCategory });
  } catch (error) {
    res.status(500).send;
  }
};
