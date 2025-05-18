import { IsString } from "class-validator";

class CategoryDto {
  @IsString()
  categoryName!: string;
}

export default CategoryDto;
