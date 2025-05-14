import bcrypt from "bcrypt";
import prisma, { PrismaClient } from "../../lib/prisma";
import { HttpException } from "../../shared/http.exception";
import jwt from "jsonwebtoken";
import { UserLoginProps, UserRegisterProps } from "./user.dto";

export class UserService {
  private db: PrismaClient;

  //Init prismaclient
  constructor() {
    this.db = prisma;
  }

  //Login
  async login(loginData: UserLoginProps) {
    //Finding user if match
    const user = await this.db.user.findFirst({
      where: {
        // username: loginData.username,
        username: loginData.username,
      },
    });

    //if userName doesnt match then throw error 404
    if (!user) {
      throw new HttpException(404, "User not found");
    }
    //Check isPassword is correct and returning false/true
    const isPasswordCorrect = await this.comparePassword(
      loginData.password,
      user.password
    );

    //if uncorrect then server send response user not found
    if (!isPasswordCorrect) {
      throw new HttpException(404, "User not found");
    }

    //Returning jwt token for each user
    return this.createJwtToken(user.userId);
  }

  //Register
  async register(registerData: UserRegisterProps) {
    //Before user register, the function will check first if the user is exist
    const user = await this.db.user.findFirst({
      where: {
        username: { equals: registerData.username },
      },
    });

    //If user is exist, then server will send statuscode 404
    if (user) {
      throw new HttpException(404, "User already exist");
    }

    //When we enter the password, the program will hash the password into hard string character
    const hashedPassword = await this.hashedPassword(registerData.password);

    //Create a new user
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

  private createJwtToken(userId: number) {
    const jwtToken = process.env.JWT_KEY;
    if (!jwtToken) {
      throw new HttpException(500, "JWT_KEY env not found");
    }
    return jwt.sign({ userId }, jwtToken, {
      expiresIn: "14d",
    });
  }

  private hashedPassword(plainPassword: string) {
    return bcrypt.hash(plainPassword, 10);
  }
}
