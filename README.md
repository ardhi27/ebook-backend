Setup Project:
1. npm init -y
2. npm install

Create Base Server:
import express, { Application } from "express";
import {
  errorMiddleware,
  notFoundMiddleware,
} from "./shared/middlewares/error.middleware";
import { UserController } from "./api/user/user.controller";
import { BooksController } from "./api/books/books.controller";
import cors from "cors";
import path, { dirname } from "path";
import _default from "next/dist/client/router";
import { PaymentController } from "./api/payment/payment.controller";

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
    // this.app.use(
    //   "/static",
    //   express.static(path.join(__dirname, "..", "public"))
    // );
    this.app.use(cors());
  }

  private registerErrorMiddlewares() {
    this.app.use(notFoundMiddleware);
    this.app.use(errorMiddleware);
  }

  private routes() {
    this.app.use(
      "/static",
      express.static(path.join(__dirname, "..", "public"))
    );
    this.app.use(new UserController().router);
    this.app.use(new BooksController().router);
    this.app.use(new PaymentController().router);
  }

  public run() {
    this.app.listen(3000, () => {
      console.log(`Server is listening on port 3000`);
    });
  }
}

const server = new Server();
server.run();


Example For Controller :
import { NextFunction, Request, Response, Router } from "express";
import { createResponse, constants } from "../../shared/utils";
import authMiddleware from "../../shared/middlewares/auth.middleware";
import { HttpException } from "../../shared/http.exception";
import { validationMiddleware } from "../../shared/middlewares/validation.middleware";
import CategoryDto from "./category.dto";
import AuthorDto from "./author.dto";
import { CategoryService } from "./category.service";
import { AuthorService } from "./author.service";
import { BookService } from "./books.service";
import BooksDto from "./books.dto";
import { isAdminMiddleware } from "../../shared/middlewares/role.middleware";
import upload from "../../shared/middlewares/multer.middleware";
import { PrismaClient } from "@prisma/client";

export class BooksController {
  private path: string;
  public router: Router;
  private categoryService: CategoryService;
  private authorService: AuthorService;
  private booksService: BookService;

  constructor() {
    this.path = "/api/books";
    this.categoryService = new CategoryService();
    this.authorService = new AuthorService();
    this.booksService = new BookService();
    this.router = Router();
    this.registerRoutes();
  }
  private registerRoutes() {
    this.router.get(this.path + "/author", this.viewAuthor);
  }

  private viewAuthor = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const viewAuthor = await this.authorService.viewAuthor();
      return res
        .status(200)
        .json(createResponse(constants.SUCCESS_MESSAGE, viewAuthor));
    } catch (error) {
      console.log(error);
      next(error);
    }
  };

Example For Services:
import prisma, { PrismaClient } from "../../lib/prisma";
import { HttpException } from "../../shared/http.exception";
import AuthorDto from "./author.dto";
import CategoryDto from "./category.dto";
export class CategoryService {
  private db: PrismaClient;

  constructor() {
    this.db = prisma;
  }
  async viewCategory() {
    return await this.db.booksCategory.findMany();
  }

}
