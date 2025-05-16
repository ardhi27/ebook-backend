import { NextFunction, Request, Response, Router } from "express";
import { createResponse, constants } from "../../shared/utils";
import authMiddleware from "../../shared/middlewares/auth.middleware";
import { HttpException } from "../../shared/http.exception";
import { validationMiddleware } from "../../shared/middlewares/validation.middleware";
import CategoryDto from "./books.dto";
import { BooksService } from "./books.service";

export class BooksController {
  private path: string;
  public router: Router;
  private booksService: BooksService;

  constructor() {
    this.path = "/api/books";
    this.booksService = new BooksService();
    this.router = Router();
    this.registerRoutes();
  }

  private registerRoutes() {
    this.router.post(this.path + "/createcategory", this.createCategory);
  }

  private createCategory = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    const category: CategoryDto = req.body;
    try {
      this.booksService.createCategory(category);

      return res
        .status(200)
        .json(createResponse(constants.SUCCESS_MESSAGE, { status: "ok" }));
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
}
