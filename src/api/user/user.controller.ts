import { NextFunction, Request, Response, Router } from "express";
import { UserService } from "./user.services";
import { HttpException } from "../../../shared/http.exception";
import { createResponse } from "../../../shared/utils";
import { constants } from "../../../shared/utils";
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
}
