import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export class UserService {
  private db: PrismaClient;

  constructor() {
    this.db = new PrismaClient();
  }

  async login(loginData: any) {
    const user = await this.db.User.findUnique({
      where: {
        username: loginData.username,
      },
    });

    if (!user) {
      console.log("USER NOT FOUND");
    }
  }

  private comparePassword(plainPassword: string, hashedPassword: string) {
    bcrypt.compare(plainPassword, hashedPassword);
  }

  private createJwtToken(userId: number) {
    const jwtToken = process.env.JWT_KEY;
    if (!jwtToken) {
      console.log("JWT Key Not Found");
    }
  }
}
