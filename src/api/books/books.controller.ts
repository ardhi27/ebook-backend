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
    this.router.get(
      this.path + "/author",
      authMiddleware,
      isAdminMiddleware,
      this.viewAuthor
    );
    this.router.patch(
      this.path + "/author/:id",
      authMiddleware,
      isAdminMiddleware,
      this.updateAuthor
    );
    this.router.delete(
      this.path + "/author/:id",
      authMiddleware,
      isAdminMiddleware,
      this.deleteAuthor
    );
    this.router.post(
      this.path + "/category",
      authMiddleware,
      isAdminMiddleware,
      this.createCategory
    );
    this.router.get(
      this.path + "/category",
      authMiddleware,
      isAdminMiddleware,
      this.viewCategory
    );
    this.router.post(
      this.path + "/author",
      authMiddleware,
      isAdminMiddleware,
      this.createAuthor
    );
    this.router.delete(
      this.path + "/category/:id",
      authMiddleware,
      isAdminMiddleware,
      this.deleteCategory
    );
    this.router.patch(
      this.path + "/category/:id",
      authMiddleware,
      isAdminMiddleware,
      this.updateCategory
    );
    this.router.post(
      this.path + "/books",
      upload.single("booksImage"),
      this.createBooks
    );
    this.router.delete(
      this.path + "/books/:id",
      authMiddleware,
      isAdminMiddleware,
      this.deleteBooks
    );
    this.router.patch(
      this.path + "/books/:id",
      authMiddleware,
      isAdminMiddleware,
      this.updateBooks
    );
    this.router.get(this.path + "/books", this.viewBooks);
    this.router.get(this.path + "/books/:id", this.viewBooksById);
  }

  private login = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {};

  private viewBooks = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    const books: BooksDto = req.body;
    try {
      const viewBooks = await this.booksService.viewBooks();
      return res
        .status(200)
        .json(createResponse(constants.SUCCESS_MESSAGE, viewBooks));
    } catch (error) {
      console.log(error);
      next(error);
    }
  };

  private viewBooksById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    const booksId = Number(req.params.id);
    try {
      const viewBooksById = await this.booksService.viewBooksById(booksId);
      return res
        .status(200)
        .json(createResponse(constants.SUCCESS_MESSAGE, viewBooksById));
    } catch (error) {
      console.log(error);
      next(error);
    }
  };

  private createBooks = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const books: BooksDto = req.body;

      books.authorId = parseInt(req.body.authorId);
      books.categoryId = parseInt(req.body.categoryId);
      books.booksPrice = parseInt(req.body.booksPrice);

      if (req.file) {
        books.booksImage = req.file.filename;
      }
      await this.booksService.createBooks(books);

      return res
        .status(200)
        .json(
          createResponse(constants.SUCCESS_MESSAGE, "Add books successfully")
        );
    } catch (error) {
      console.log(error);
      next(error);
    }
  };

  private updateBooks = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    const booksId = Number(req.params.id);
    const newBooks = req.body;
    try {
      this.booksService.updateBooks(booksId, newBooks);
      return res
        .status(200)
        .json(
          createResponse(constants.SUCCESS_MESSAGE, "Update books successfully")
        );
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
  private deleteBooks = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    const booksId = Number(req.params.id);
    try {
      this.booksService.deleteBooks(booksId);
      return res
        .status(200)
        .json(
          createResponse(constants.SUCCESS_MESSAGE, "Books deleted succesfully")
        );
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
        .json(createResponse(constants.SUCCESS_MESSAGE, category));
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

  private viewCategory = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const viewCategory = await this.categoryService.viewCategory();
      return res
        .status(200)
        .json(createResponse(constants.SUCCESS_MESSAGE, viewCategory));
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

  private createAuthor = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    const author: AuthorDto = req.body;
    try {
      const createAuthor = await this.authorService.createAuthor(author);
      return res
        .status(200)
        .json(createResponse(constants.SUCCESS_MESSAGE, createAuthor));
    } catch (error) {
      console.log(error);
      next(error);
    }
  };

  private updateAuthor = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    const authorId = Number(req.params.id);
    const author: AuthorDto = req.body;
    try {
      const updateAuthor = await this.authorService.updateAuthor(
        authorId,
        author
      );
      return res
        .status(200)
        .json(createResponse(constants.SUCCESS_MESSAGE, "Author is updated"));
    } catch (error) {
      console.log(error);
      next(error);
    }
  };

  private deleteAuthor = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    const authorId = Number(req.params.id);
    try {
      const deleteAuthor = await this.authorService.deleteAuthor(authorId);
      return res
        .status(200)
        .json(createResponse(constants.SUCCESS_MESSAGE, "Author is deleted"));
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
}
