import { HttpException } from "../http.exception";
import { NextFunction, Request, Response } from "express";
import fs from "fs";

export function errorMiddleware(
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  let statusCode: number =
    error instanceof HttpException ? error.statusCode : 500;
  let message: string =
    error instanceof HttpException ? error.message : "Something went wrong";

  fs.appendFileSync("error.log", `${error.toString()}\n`, "utf8");
}
