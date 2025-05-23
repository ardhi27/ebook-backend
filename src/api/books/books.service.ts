import prisma, { PrismaClient } from "../../lib/prisma";
import { HttpException } from "../../shared/http.exception";
import AuthorDto from "./author.dto";
import BooksDto from "./books.dto";
import CategoryDto from "./category.dto";

export class BookService {
  private db: PrismaClient;

  constructor() {
    this.db = prisma;
  }

  async createBooks(booksData: BooksDto) {
    const isBookExisted = await this.db.books.findFirst({
      where: {
        booksName: booksData.booksName,
      },
    });

    if (isBookExisted) {
      throw new HttpException(409, "Books already existed");
    }

    const newBooks = await this.db.books.create({
      data: {
        booksName: booksData.booksName,
        authorId: booksData.authorId,
        categoryId: booksData.categoryId,
      },
    });

    return {
      status: "Success",
      data: newBooks,
    };
  }

  async deleteBooks(booksId: number) {
    const isBookExisted = await this.db.books.findFirst({
      where: {
        booksId: booksId,
      },
    });

    if (!isBookExisted) {
      throw new HttpException(404, "Buku tidak ditemukan");
    }

    await this.db.books.delete({
      where: {
        booksId: booksId,
      },
    });

    return {
      status: "Success",
      message: "Books deleted succesfully",
    };
  }

  //   return {
  //     data: {
  //         newBooks
  //     }
  //   };
}
