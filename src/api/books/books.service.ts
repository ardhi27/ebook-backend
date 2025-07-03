import prisma, { PrismaClient } from "../../lib/prisma";
import { HttpException } from "../../shared/http.exception";
import BooksDto from "./books.dto";

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
        booksImage: booksData.booksImage,
        booksDesc: booksData.booksDesc,
        booksName: booksData.booksName,
        authorId: booksData.authorId,
        categoryId: booksData.categoryId,
        booksPrice: booksData.booksPrice,
      },
    });

    return {
      status: "Success",
      data: newBooks,
    };
  }

  async updateBooks(booksId: number, booksData: BooksDto) {
    const isBooksExisted = await this.db.books.findFirst({
      where: {
        booksId: booksId,
      },
    });

    if (isBooksExisted) {
      throw new HttpException(409, "Books already existed");
    }

    await this.db.books.update({
      where: {
        booksId: booksId,
      },
      data: {
        booksName: booksData.booksName,
      },
    });

    return {
      status: "Success",
      data: {
        isBooksExisted,
      },
    };
  }
  async viewBooks() {
    return await this.db.books.findMany({
      include: {
        author: true,
        BooksCategory: true,
      },
    });
  }

  async viewBooksById(booksId: number) {
    const isBookExisted = await this.db.books.findFirst({
      where: {
        booksId: booksId,
      },
      include: {
        author: true,
        BooksCategory: true,
      },
    });

    if (!isBookExisted) {
      throw new HttpException(404, "Buku tidka ditemukan");
    }

    return isBookExisted;
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
}
