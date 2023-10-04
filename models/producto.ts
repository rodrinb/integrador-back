import mongoose from "mongoose";

export interface IProducto {
  id: Number;
  title: String;
  image: String;
  description: String;
  price: Number;
}

const schema = new mongoose.Schema<IProducto>({
  id: {
    type: Number,
    required: true,
  },
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
  ProductModel.findOne({ id });
};

export const createProduct = async (product: IProducto) => {
  const prod = await new ProductModel(product).save();
  return prod.toObject();
};
