import { NextFunction, Request, Response, Router } from "express";
import { createResponse, constants } from "../../shared/utils";
import authMiddleware from "../../shared/middlewares/auth.middleware";
import { HttpException } from "../../shared/http.exception";
import { validationMiddleware } from "../../shared/middlewares/validation.middleware";
import CategoryDto from "./category.dto";
import AuthorDto from "./author.dto";
import { CategoryService } from "./category.service";
import { AuthorService } from "./author.service";

export class BooksController {
  private path: string;
  public router: Router;
  private categoryService: CategoryService;
  private authorService: AuthorService;

  constructor() {
    this.path = "/api/books";
    this.categoryService = new CategoryService();
    this.authorService = new AuthorService();
    this.router = Router();
    this.registerRoutes();
  }

  private registerRoutes() {
    this.router.get(this.path + "/author", this.viewAuthor);
    this.router.post(this.path + "/category", this.createCategory);
    this.router.post(this.path + "/author", this.createAuthor);
    this.router.delete(this.path + "/category/:id", this.deleteCategory);
    this.router.patch(this.path + "/category/:id", this.updateCategory);
  }

  private createAuthor = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    const author: AuthorDto = req.body;
    try {
      this.authorService.createAuthor(author);
      return res
        .status(200)
        .json(createResponse(constants.SUCCESS_MESSAGE, "OK"));
    } catch (error) {
      console.log(error);
      next(error);
    }
  };

  private createCategory = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    const category: CategoryDto = req.body;
    try {
      this.categoryService.createCategory(category);

      return res
        .status(200)
        .json(
          createResponse(
            constants.SUCCESS_MESSAGE,
            `Successfully create new category with name ${category}`
          )
        );
    } catch (error) {
      console.log(error);
      next(error);
    }
  };

  private deleteCategory = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    const categoryId = Number(req.params.id);

    try {
      const deleteCategory = await this.categoryService.deleteCategory(
        categoryId
      );
      return res
        .status(200)
        .json(createResponse(constants.SUCCESS_MESSAGE, "Delete succesfully"));
    } catch (error) {
      console.log(error);
      next(error);
    }
  };

  private updateCategory = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    const categoryId = Number(req.params.id);
    const categoryData: CategoryDto = req.body;
    try {
      const updateCategory = await this.categoryService.updateCategory(
        categoryId,
        categoryData
      );
      return res
        .status(200)
        .json(createResponse(constants.SUCCESS_MESSAGE, "Update successfully"));
    } catch (error) {
      console.log(error);
      next(error);
    }
  };

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
}
