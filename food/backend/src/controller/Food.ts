import { v2 as cloudinary } from "cloudinary";
import { Request, Response } from "express";
import { FoodModel } from "../model/Food";
import { CategoryModel } from "../model/Category";
type FoodType = {
  foodname: string;
  image: string;
  ingeredient: string;
  price: number;
  discount?: number;
  categoryName: string;
};

cloudinary.config({
  cloud_name: "dlmctjwgl",
  api_key: "486584588397562",
  api_secret: "d9FzR6fCPUBqNelusGlFCK0iVvc",
});

export const createFood = async (req: Request, res: Response) => {
  try {
    const cloudinaryRes = await cloudinary.uploader.upload(req.body.image, {
      folder: "food",
    });
    const {
      foodname,
      ingeredient,
      price,
      discount,
      categoryName,
    }: Required<FoodType> = req.body;
    const food = await FoodModel.create({
      foodname: foodname,
      image: cloudinaryRes.secure_url,
      ingeredient: ingeredient,
      price: price,
      discount: discount,
    });
    food.save();

    await CategoryModel.findOneAndUpdate(
      {
        name: categoryName,
      },
      {
        $push: {
          foodId: food._id,
        },
      }
    );
    res.status(201).send({ success: true, food });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getAllFood = async (req: Request, res: Response) => {
  try {
    const getAllFoods = await FoodModel.find();
    return res.status(200).send({ success: true, getAllFoods });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const deleteFood = async (req: Request, res: Response) => {
  try {
    const deleteId = req.params.id;
    const deleteOneFood = await FoodModel.findByIdAndDelete(deleteId);
    res.status(200).send({ success: true, deleteOneFood });
    console.log("delete");
  } catch (error) {
    res.status(500).send(error);
  }
};

export const updateFood = async (req: Request, res: Response) => {
  try {
    const updateFood = req.params.id;
    const { name } = req.body;
    const updateOneFood = await FoodModel.findByIdAndUpdate(updateFood, {
      name,
    });
    return res.status(200).send({ success: true, updateOneFood });
  } catch (error) {
    res.status(500).send(error);
  }
};
