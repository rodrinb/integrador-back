import express, { Express } from "express";
import path from "path";
import { conectarBD } from "../database/config";
import usuariosRoutes from "../routes/usuarios";
import productosRoutes from "../routes/productos";
const cors = require("cors");
const allowedOrigins = ["*", "https://integrador-front.vercel.app/"];
export class Server {
  app: Express;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
    this.connectBD();
    this.app.use(cors());
    this.app.use(express.static(path.join(__dirname, "public")));
  }

  async connectBD(): Promise<void> {
    await conectarBD();
  }

  middlewares(): void {
    this.app.use(express.json());
    this.app.options("/usuarios", cors());
  }

  routes(): void {
    this.app.get("/", (req, res) => {
      res.sendFile(path.join(__dirname, "public", "index.html"));
    });
    this.app.use("/usuarios", cors(), usuariosRoutes);
    this.app.use("/productos", cors(), productosRoutes);
  }
  listen(): void {
    this.app.listen(4001, () => {
      console.log("Levantadoo");
    });
  }
}
