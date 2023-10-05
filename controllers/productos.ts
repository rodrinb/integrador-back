//const express = require("express");

import { Request, Response } from "express";
import {
  createProducto,
  getProducts,
  getProductsById,
} from "../models/producto";

export const getProductos = async (req: Request, res: Response) => {};

export const getAllProductos = async (req: Request, res: Response) => {
  const products = await getProducts();
  if (products) {
    res.send(products);
  }
};
export const getProductosById = async (req: Request, res: Response) => {
  const id = req.params.id;
  const response = await getProductsById(id);

  res.send(response);
};

export const createProduct = async (req: Request, res: Response) => {
  const response = await createProducto(req.body);
  if (response) {
    res.send(response);
  }
};
