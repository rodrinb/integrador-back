//const express = require("express");
import { Request, Response } from "express";
import {
  createUser,
  getUsersByEmail,
  getUsers,
  getUserById,
} from "../models/usuario";

export const registrarUsuario = async (req: Request, res: Response) => {
  if (req.body.fullname && req.body.email && req.body.password) {
    const emails = await getUsersByEmail(req.body.email);
    if (emails) {
      res.send({ message: "Este correo ya existe", status: 400 });
    } else {
      const response = await createUser(req.body);
      if (response) {
        let resp = {
          fullname: response.fullname,
          email: response.email,
          message: "Usuario registrado correctamente",
          status: 200,
        };
        res.send(resp);
      }
    }
  } else {
    res.send({ message: "Faltan datos", status: 400 });
  }
};

export const loguearUsuario = async (req: Request, res: Response) => {
  if (req.body.email && req.body.password) {
    const userLoggin = await getUsersByEmail(req.body.email);

    if (!userLoggin) {
      return res.send({ message: "Usuario inexistente", status: 400 });
    }
    if (userLoggin?.password !== req.body.password) {
      return res.send({ message: "Email/Password no coinciden", status: 400 });
    }
    let resp = {
      fullname: userLoggin.fullname,
      email: userLoggin.email,
      message: "Usuario logueado correctamente",
      status: 200,
    };
    return res.send(resp);
  }
};
export const getUsuarios = async (req: Request, res: Response) => {
  const response = await getUsers();
  res.send(response);
};
export const getUsuarioById = async (req: Request, res: Response) => {
  const id = req.params.id;
  console.log(id);

  const response = await getUserById(id);
  console.log(response);

  res.send(response);
};
