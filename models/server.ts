import express, { Express } from "express";
import { conectarBD } from "../database/config";
import usuariosRoutes from "../routes/usuarios";
import productosRoutes from "../routes/productos";
const cors = require("cors");
export class Server {
  app: Express;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
    this.connectBD();
    this.app.use(
      cors({
        origin: [
          "*",
          "https://agutierrez.site",
          "https://agutierrez.site/",
          "agutierrez.site",
        ],
      })
    );
  }

  async connectBD(): Promise<void> {
    await conectarBD();
  }

  middlewares(): void {
    this.app.use(express.json());
  }

  routes(): void {
    this.app.use("/usuarios", usuariosRoutes);
    this.app.use(
      "/productos",
      cors({
        origin: [
          "*",
          "https://agutierrez.site",
          "https://agutierrez.site/",
          "agutierrez.site",
        ],
      }),
      productosRoutes
    );
  }
  listen(): void {
    this.app.listen(4001, () => {
      console.log("Levantadoo");
    });
  }
}
