import { IsString, IsInt } from "class-validator";

class BooksDto {
  @IsString()
  booksName!: string;
  @IsInt()
  authorId!: number;
  @IsInt()
  categoryId!: number;
}

export default BooksDto;
