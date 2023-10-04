import express, { Express } from "express";
import { conectarBD } from "../database/config";
import usuariosRoutes from "../routes/usuarios";
import productosRoutes from "../routes/productos";
export class Server {
  app: Express;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
    this.connectBD();
  }

  async connectBD(): Promise<void> {
    await conectarBD();
  }

  middlewares(): void {
    this.app.use(express.json());
  }

  routes(): void {
    this.app.use("/usuarios", usuariosRoutes);
    this.app.use("/productos", productosRoutes);
  }
  listen(): void {
    this.app.listen(4000, () => {
      console.log("Levantadoo");
    });
  }
}
