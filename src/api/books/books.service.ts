import prisma, { PrismaClient } from "../../lib/prisma";
import { HttpException } from "../../shared/http.exception";
import AuthorDto from "./author.dto";
import CategoryDto from "./category.dto";
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
    if (!categoryData.categoryName) {
      throw new HttpException(400, "Category name is required");
    }

    const isCategoryExisted = await this.db.booksCategory.findFirst({
      where: {
        category: categoryData.categoryName,
      },
    });

    console.log("Kategori dikirim:", categoryData.categoryName);
    console.log("Kategori yang ditemukan:", isCategoryExisted);

    if (isCategoryExisted) {
      throw new HttpException(409, "Category already existed");
    }

    const newCategory = await this.db.booksCategory.create({
      data: {
        category: categoryData.categoryName,
      },
    });

    return {
      status: "success",
      data: newCategory,
    };
  }

  //author
  async createAuthor(authorData: AuthorDto) {
    const author = await this.db.booksAuthor.create({
      data: {
        author: authorData.authorName,
      },
    });
  }
}
