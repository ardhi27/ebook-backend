import { UserService } from "./user.services";
import { HttpException } from "../../../shared/http.exception";
import { createResponse, constants } from "../../../shared/utils";
import { Router, Request, Response, NextFunction } from "express";

export class UserController {
  private path: string;
  public router: Router;
  private userService: UserService;

  constructor() {
    this.path = "/api/user";
    this.userService = new UserService();
    this.router = Router();
    this.registerRoutes();
  }

  private registerRoutes() {
    this.router.post(this.path + "/login", this.login);
  }

  private login = async (req: Request, res: Response, next: NextFunction) => {
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
  ) => {
    try {
      const account = await this.userService.register(req.body);
      if (account) {
        return res
          .status(200)
          .json(
            createResponse(
              constants.SUCCESS_MESSAGE,
              `Successfully create account with name ${account}`
            )
          );
      }
      throw new HttpException(500, "Something went wrong");
    } catch (error) {
      next(error);
    }
  };
}
