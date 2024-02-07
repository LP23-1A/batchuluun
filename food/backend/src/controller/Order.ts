import { Request, Response } from "express";
import { orderModel } from "../model/order";
import { UserModel } from "../model/User";

export const createOrder = async (req: Request, res: Response) => {
  try {
    const { userId, orderNumber, totalPrice, district, khoroo, apartment } =
      req.body;
    const result = await orderModel.create({
      userId: userId,
      orderNumber: orderNumber,
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
