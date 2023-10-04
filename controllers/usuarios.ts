//const express = require("express");
import { Request, Response } from "express";
import { createUser, getUsersByEmail } from "../models/usuario";
import axios from "axios";

export const registrarUsuario = async (req: Request, res: Response) => {
  if (req.body.fullname && req.body.email && req.body.password) {
    const emails = await getUsersByEmail(req.body.email);
    if (emails) {
      res.send("Este correo ya existe");
    }else{
        const response = await createUser(req.body);
        if (response) {
          let resp = {
            fullname: response.fullname,
            email: response.email,
            status: 200,
          };
          res.send(resp);
        }
    }
  } else {
    res.send("Faltan datos");
  }
};

export const test = async (req: Request, res: Response) => {
  console.log("Hola");
res.send("Respuesta!");
};
