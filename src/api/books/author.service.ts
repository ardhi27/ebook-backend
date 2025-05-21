import prisma, { PrismaClient } from "../../lib/prisma";
import { HttpException } from "../../shared/http.exception";
import AuthorDto from "./author.dto";
import CategoryDto from "./category.dto";
export class AuthorService {
  private db: PrismaClient;

  constructor() {
    this.db = prisma;
  }

  async viewAuthor() {
    return await this.db.booksAuthor.findMany();
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
  }

  async deleteAuthor(authorId: number) {
    const findAuthor = await this.db.booksAuthor.findFirst({
      where: {
        authorId: authorId,
      },
    });

    if (!findAuthor) {
      throw new HttpException(404, "Author  not found");
    }

    await this.db.booksAuthor.delete({
      where: {
        authorId: authorId,
      },
    });
  }

  async updateAuthor(authorId: number, authorData: AuthorDto) {
    const findAuthor = await this.db.booksAuthor.findFirst({
      where: {
        authorId: authorId,
      },
    });

    if (!findAuthor) {
      throw new HttpException(404, "Author not found");
    }

    await this.db.booksAuthor.update({
      where: {
        authorId: authorId,
      },
      data: {
        author: authorData.authorName,
      },
    });

    return {
      message: "Success",
      data: {
        author: authorData.authorName,
      },
    };
  }
}
