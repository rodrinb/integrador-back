import { Router } from "express";
import {
  registrarUsuario,
  test,
  getUsuarios,
  loguearUsuario,
} from "../controllers/usuarios";

const router = Router();
router.get("/test", test);
router.get("/", getUsuarios);
router.post("/registrar", registrarUsuario);
router.post("/login", loguearUsuario);

export default router;
