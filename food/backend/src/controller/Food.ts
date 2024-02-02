import { v2 as cloudinary } from "cloudinary";
import { Request, Response } from "express";
import { FoodModel } from "../model/Food";
type FoodType = {
  name: string;
  image: string;
  ingeredient: string;
  price: number;
};

cloudinary.config({
  cloud_name: "dlmctjwgl",
  api_key: "486584588397562",
  api_secret: "d9FzR6fCPUBqNelusGlFCK0iVvc",
});
const createFood = async (req: Request, res: Response) => {
  try {
    const cloudinaryRes = await cloudinary.uploader.upload(req.body.image, {
      folder: "food",
    });
    const { name, ingeredient, price }: Required<FoodType> = req.body;
    const result = FoodModel.create({
      name: name,
      image: cloudinaryRes.secure_url,
      ingeredient: ingeredient,
      price: price,
    });
    res.send({ success: true, result });
  } catch (error) {
    console.log(error);
  }
};
const getAllFood = async (req: Request, res: Response) => {
  try {
    const getAllFoods = await FoodModel.find();
    return res.send({ success: true, getAllFoods });
  } catch (error) {
    console.log(error);
  }
};
const deleteFood = async (req: Request, res: Response) => {
  try {
    const { deleteId } = req.params;
    const deleteOneFood = await FoodModel.findByIdAndDelete(deleteId);
    res.send({ success: true, deleteOneFood });
    console.log("delete");
  } catch (error) {
    console.log(error);
  }
};
const updateFood = async (req: Request, res: Response) => {
  try {
    const { updateFood } = req.params;
    const { name } = req.body;
    const updateOneFood = await FoodModel.findByIdAndUpdate(updateFood, {
      name,
    });
    return res.send({ success: true, updateOneFood });
  } catch (error) {
    console.log(error);
  }
};
export { createFood, getAllFood, deleteFood, updateFood };
