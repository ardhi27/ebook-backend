import prisma, { PrismaClient } from "../../lib/prisma";
import { HttpException } from "../../shared/http.exception";
import AuthorDto from "./author.dto";
import CategoryDto from "./category.dto";
export class CategoryService {
  private db: PrismaClient;

  constructor() {
    this.db = prisma;
  }

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

  async deleteCategory(categoryId: number) {
    const category = await this.db.booksCategory.findUnique({
      where: { categoryId: categoryId },
    });

    if (!category) {
      throw new HttpException(404, "Category not found");
    }

    await this.db.booksCategory.delete({
      where: { categoryId: categoryId },
    });

    return {
      status: "success",
      message: "Category deleted succesfully",
    };
  }

  async viewCategory() {
    return await this.db.booksCategory.findMany();
  }

  async updateCategory(categoryId: number, categoryData: CategoryDto) {
    const category = await this.db.booksCategory.findUnique({
      where: { categoryId: categoryId },
    });

    if (!categoryId) {
      throw new HttpException(404, "Category not found");
    }

    await this.db.booksCategory.update({
      where: { categoryId: categoryId },
      data: {
        category: categoryData.categoryName,
      },
    });

    return {
      status: "Success",
      message: "Successfully update data",
      data: {
        category,
      },
    };
  }
}
