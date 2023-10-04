import { Router } from "express";
import { registrarUsuario,test,getUsuarios } from "../controllers/usuarios";

const router = Router();
router.get("/test", test)
router.get("/", getUsuarios)
router.post("/registrar", registrarUsuario);


export default router;