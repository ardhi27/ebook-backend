import prisma, { PrismaClient } from "../../lib/prisma";
import { HttpException } from "../../shared/http.exception";
import AuthorDto from "./author.dto";
import CategoryDto from "./category.dto";
export class AuthorService {
  private db: PrismaClient;

  constructor() {
    this.db = prisma;
  }

  async createAuthor(authorData: AuthorDto) {
    if (!authorData.authorName) {
      throw new HttpException(404, "Author must required");
    }

    const isAuthorExisted = await this.db.booksAuthor.findFirst({
      where: {
        author: authorData.authorName,
      },
    });
    if (isAuthorExisted) {
      throw new HttpException(409, "Author already existed");
    }

    const newAuthor = await this.db.booksAuthor.create({
      data: {
        author: authorData.authorName,
      },
    });

    return {
      status: "success",
      data: newAuthor,
    };
  }
}
