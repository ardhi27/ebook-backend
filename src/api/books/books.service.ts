import prisma, { PrismaClient } from "../../lib/prisma";
import { HttpException } from "../../shared/http.exception";
import CategoryDto from "./books.dto";

export class BooksService {
  private db: PrismaClient;

  constructor() {
    this.db = prisma;
  }

  //get
  //   async function getBooks(booksData: Books){

  //   }
  //create book
  //update book
  //delete

  //category
  async createCategory(categoryData: CategoryDto) {
    const category = await this.db.booksCategory.create({
      data: {
        category: categoryData.categoryName,
      },
    });
  }
  //author
}
