import { Router } from "express";
import { getAllProductos, getProductosById,createProduct } from "../controllers/productos";

const router = Router();
router.get("/", getAllProductos);
router.post("/crearProducto", createProduct);
router.get("/:id", getProductosById);

export default router;
