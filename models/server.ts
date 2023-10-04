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
    this.app.use(cors({ origin: ["*, https://agutierrez.site"] }));
  }

  async connectBD(): Promise<void> {
    await conectarBD();
  }

  middlewares(): void {
    this.app.use(express.json());
    this.app.use(function (req, res, next) {
      res.setHeader("Access-Control-Allow-Origin", "https://agutierrez.site");
      res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
      );
      res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,content-type"
      );

      // Pass to next layer of middleware
      next();
    });
  }

  routes(): void {
    this.app.use("/usuarios", usuariosRoutes);
    this.app.use("/productos", productosRoutes);
  }
  listen(): void {
    this.app.listen(4001, () => {
      console.log("Levantadoo");
    });
  }
}
