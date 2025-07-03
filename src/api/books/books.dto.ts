import { IsString, IsInt, IsOptional } from "class-validator";

class BooksDto {
  @IsString()
  booksName!: string;
  @IsInt()
  authorId!: number;
  @IsInt()
  categoryId!: number;
  @IsString()
  booksDesc!: string;
  @IsOptional()
  booksImage!: string;
  @IsInt()
  booksPrice!: number;
}

export default BooksDto;
