import { Router } from "express";
import { registrarUsuario,test } from "../controllers/usuarios";

const router = Router();
router.get("/test", test)
router.post("/registrar", registrarUsuario);


export default router;