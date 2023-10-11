import mongoose from "mongoose";
const { ObjectId } = require("mongoose").Types;
export interface IProducto {
  title: String;
  image: String;
  description: String;
  price: Number;
}

const schema = new mongoose.Schema<IProducto>({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

export const ProductModel = mongoose.model("Product", schema);

export const getProducts = () => ProductModel.find();

export const getProductsById = async (id: String) => {
  const response = await ProductModel.findById(id).exec();

  if (response) {
    return response;
  }
};

export const createProducto = async (product: IProducto) => {
  const prod = await new ProductModel(product).save();
  return prod.toObject();
};
