import { log } from "console";
import mongoose from "mongoose";

export const conectarBD = async (): Promise<void> => {
  try {
    await mongoose.connect("mongodb+srv://rodrinb:cBuncddGVKwX5ulh@mymongodb.bzo0aww.mongodb.net/").then(() => {
      console.log("conectado!");
    });
  } catch (e) {
    console.log(e);
  }
};
