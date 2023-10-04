import { log } from "console";
import mongoose from "mongoose";

export const conectarBD = async (): Promise<void> => {
  try {
    await mongoose.connect("mongodb://localhost:27017/").then(() => {
      console.log("conectado!");
    });
  } catch (e) {
    console.log(e);
  }
};
