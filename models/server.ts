import express, { Express } from "express";
import { conectarBD } from "../database/config";
import usuariosRoutes from "../routes/usuarios";
const cors = require("cors")

export class Server {
  app: Express;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
    this.connectBD();
    this.app.use(cors());
  }

  async connectBD(): Promise<void> {
    await conectarBD();
  }

  middlewares(): void {
    this.app.use(express.json());
  }

  routes(): void {
    this.app.use("/usuarios", usuariosRoutes);
  }
  listen(): void {
    this.app.listen(8080, () => {
      console.log("Levantadoo");
    });
  }
}
