import { Router } from "express";
import {
  registrarUsuario,
  getUsuarios,
  loguearUsuario,
  getUsuarioById,
} from "../controllers/usuarios";

const router = Router();
router.get("/", getUsuarios);
router.post("/registrar", registrarUsuario);
router.post("/login", loguearUsuario);
router.get("/:id", getUsuarioById);

export default router;
