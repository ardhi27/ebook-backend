import { NextFunction, Request, Response } from "express";
import { HttpException } from "../http.exception";

export const isAdminMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const isAdmin = req.userRole == "ADMIN";

  if (isAdmin) {
    next();
  } else {
    next(new HttpException(500, "Access Denied"));
  }
};
