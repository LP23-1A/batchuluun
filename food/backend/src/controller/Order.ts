import { Request, Response } from "express";
import { orderModel } from "../model/order";

export const createOrder = async (req: Request, res: Response) => {
  try {
    const {
      userId,
      orderNumber,
      foods,
      totalPrice,
      district,
      khoroo,
      apartment,
    } = req.body;
    const result = await orderModel.create({
      userId: userId,
      orderNumber: orderNumber,
      foods: foods,
      totalPrice: totalPrice,
      district: district,
      khoroo: khoroo,
      apartment: apartment,
    });
    res.status(201).send({ success: true, result });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getAllOrder = async (req: Request, res: Response) => {
  try {
    const { userId } = req.body;
    const getAllOrder = await orderModel
      .find({ userId: userId })
      .populate("userId");
    return res.status(200).send({ success: true, getAllOrder });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getOneOrder = async (req: Request, res: Response) => {
  try {
    const orderById = req.params.id;
    const getOneOrder = await orderModel.findById(orderById);
    return res.status(200).send({ success: true, getOneOrder });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const deleteOrder = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const deleteOneOrder = await orderModel.findByIdAndDelete(id);
    res.status(200).send({ success: true, deleteOneOrder });
    console.log("delete");
  } catch (error) {
    res.status(500).send(error);
  }
};

export const updateOrder = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { userId, orderNumber, totalPrice, district, khoroo, apartment } =
      req.body;
    const updateOneOrder = await orderModel.findByIdAndUpdate(id, {
      userId: userId,
      orderNumber: orderNumber,
      totalPrice: totalPrice,
      district: district,
      khoroo: khoroo,
      apartment: apartment,
    });
    return res.status(200).send({ success: true, updateOneOrder });
  } catch (error) {
    res.status(500).send(error);
  }
};
