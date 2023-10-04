import { Router } from "express";
import { getAllProductos, getProductosById } from "../controllers/productos";

const router = Router();
router.get("/", getAllProductos);
router.get("/:id", getProductosById);

export default router;
