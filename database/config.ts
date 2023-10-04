import { log } from "console";
import mongoose from "mongoose";

export const conectarBD = async (): Promise<void> => {
  try {
    if (process.env.MONGODB_CONNECT_URI) {
      await mongoose.connect(process.env.MONGODB_CONNECT_URI).then(() => {
        console.log("conectado!");
      });
    }
  } catch (e) {
    console.log(e);
  }
};
