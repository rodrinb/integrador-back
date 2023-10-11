import mongoose, { mongo } from "mongoose";

export interface IUsuario {
  fullname: String;
  email: String;
  password: String;
}

const schema = new mongoose.Schema<IUsuario>({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export const UserModel = mongoose.model("User", schema);

export const getUsers = () => UserModel.find();
export const getUsersByEmail = async (email: String) =>
  UserModel.findOne({ email });

export const createUser = async (user: IUsuario) => {
  const us = await new UserModel(user).save();
  return us.toObject();
};
export const getUserById = async (id: String) => {
  const response = await UserModel.findById(id).exec();

  if (response) {
    return response;
  }
};
