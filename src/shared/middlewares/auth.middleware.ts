import jwt from "jsonwebtoken";
import { HttpException } from "../http.exception";
import { Request, Response, NextFunction } from "express";

type JWTPayload = {
  userId: string;
  userRole: string;
};

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.toString().split(" ")[1];

    if (!token) {
      throw new HttpException(401, "Unauthorized");
    }

    const jwtKey = process.env.JWT_KEY;
    if (!jwtKey) {
      throw new HttpException(500, "No JWT_KEY env found");
    }

    const decoded = jwt.verify(token, jwtKey) as JWTPayload;
    req.userId = decoded.userId;
    req.userRole = decoded.userRole;
    console.log(decoded);
  } catch (error) {
    next(error);
  }

  return next();
};

export default authMiddleware;
