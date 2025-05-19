import { NextFunction, Request, Response, Router } from "express";
import { createResponse, constants } from "../../shared/utils";
import authMiddleware from "../../shared/middlewares/auth.middleware";
import { HttpException } from "../../shared/http.exception";
import { validationMiddleware } from "../../shared/middlewares/validation.middleware";
import CategoryDto from "./category.dto";
import { CategoryService } from "./category.service";

export class BooksController {
  private path: string;
  public router: Router;
  private categoryService: CategoryService;

  constructor() {
    this.path = "/api/books";
    this.categoryService = new CategoryService();
    this.router = Router();
    this.registerRoutes();
  }

  private registerRoutes() {
    this.router.post(this.path + "/createcategory", this.createCategory);
    this.router.delete(this.path + "/deletecategory/:id", this.deleteCategory);
  }

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
}
