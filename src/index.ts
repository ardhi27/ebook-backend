import express, { Application } from "express";
import {
  errorMiddleware,
  notFoundMiddleware,
} from "./shared/middlewares/error.middleware";
import { UserController } from "./api/user/user.controller";
import { BooksController } from "./api/books/books.controller";
import cors from "cors";

class Server {
  private app: Application;
  constructor() {
    this.app = express();
    this.registerMiddlewares();
    this.routes();
    this.registerErrorMiddlewares();
  }

  private registerMiddlewares() {
    this.app.use(express.json({ limit: "10mb" }));
    this.app.use(express.urlencoded({ limit: "50mb", extended: true }));
    this.app.use(cors());
  }

  private registerErrorMiddlewares() {
    this.app.use(notFoundMiddleware);
    this.app.use(errorMiddleware);
  }

  private routes() {
    this.app.use(new UserController().router);
    this.app.use(new BooksController().router);
  }

  public run() {
    this.app.listen(3000, () => {
      console.log(`Server is listening on port 3000`);
    });
  }
}

const server = new Server();
server.run();
