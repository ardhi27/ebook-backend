import bcrypt from "bcrypt";
import prisma, { PrismaClient } from "../../lib/prisma";
import { HttpException } from "../../shared/http.exception";
import jwt from "jsonwebtoken";
import { UserLoginProps } from "./user.dto";
import UserRegisterProps from "./user.register.dto";

export class UserService {
  private db: PrismaClient;

  constructor() {
    this.db = prisma;
  }

  async login(loginData: UserLoginProps) {
    const user = await this.db.user.findFirst({
      where: {
        username: loginData.username,
      },
    });

    if (!user) {
      throw new HttpException(404, "User not found");
    }
    const isPasswordCorrect = await this.comparePassword(
      loginData.password,
      user.password
    );

    if (!isPasswordCorrect) {
      throw new HttpException(404, "User not found");
    }

    return this.createJwtToken(user.userId, user.userRole);
  }

  async register(registerData: UserRegisterProps) {
    console.log(registerData.username);

    const user = await this.db.user.findFirst({
      where: {
        username: { equals: registerData.username },
      },
    });

    if (user) {
      throw new HttpException(404, "User already exist");
    }

    const hashedPassword = await this.hashedPassword(registerData.password);

    const newUser = await this.db.user.create({
      data: {
        username: registerData.username,
        password: hashedPassword,
        userRole: "USER",
      },
    });

    return newUser.username;
  }

  public async createAdmin() {
    const adminRole = "ADMIN";
    const adminPassword = await this.hashedPassword("admin123");

    const createAdmin = await this.db.user.create({
      data: {
        username: "admin",
        password: adminPassword,
        userRole: adminRole,
      },
    });

    return {
      status: "Success create admin",
      user: {
        username: "admin",
        password: createAdmin.username,
        userRole: createAdmin.password,
      },
    };
  }

  private comparePassword(plainPassword: string, hashedPassword: string) {
    return bcrypt.compare(plainPassword, hashedPassword);
  }

  private createJwtToken(userId: number, userRole: string) {
    const jwtToken = process.env.JWT_KEY;
    if (!jwtToken) {
      throw new HttpException(500, "JWT_KEY env not found");
    }
    return jwt.sign({ userId, userRole }, jwtToken, {
      expiresIn: "14d",
    });
  }

  private hashedPassword(plainPassword: string) {
    return bcrypt.hash(plainPassword, 10);
  }
}
