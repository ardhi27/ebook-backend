import { NextFunction, Request, Response, Router } from "express";
import { createResponse, constants } from "../../shared/utils";
import authMiddleware from "../../shared/middlewares/auth.middleware";
import { UserService } from "./user.services";
import { HttpException } from "../../shared/http.exception";
import { validationMiddleware } from "../../shared/middlewares/validation.middleware";
import { UserRegisterProps } from "./user.dto";
export class UserController {
  private path: string;
  public router: Router;
  private userService: UserService;

  constructor() {
    this.path = "/api/users";
    this.userService = new UserService();
    this.router = Router();
    this.registerRoutes();
  }

  private registerRoutes() {
    this.router.post(this.path + "/login", this.login);
    this.router.post(this.path + "/createadmin", this.createAdmin);
    this.router.post(this.path + "/register", this.register);
  }

  private createAdmin = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    this.userService.createAdmin();

    return res
      .status(200)
      .json(createResponse(constants.SUCCESS_MESSAGE, { status: "ok" }));
  };

  private login = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const token = await this.userService.login(req.body);
      if (token) {
        return res
          .status(200)
          .json(createResponse(constants.SUCCESS_MESSAGE, { token: token }));
      }
      throw new HttpException(500, "Something went wrong");
    } catch (error) {
      next(error);
    }
  };

  private register = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const registerFields: UserRegisterProps = req.body;
      const account = await this.userService.register(registerFields);
      if (account) {
        return res
          .status(200)
          .json(
            createResponse(
              constants.SUCCESS_MESSAGE,
              `Successfully create new major with name ${account}`
            )
          );
      }
      throw new HttpException(500, "Something went wrong");
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
}
