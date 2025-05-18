import { IsString } from "class-validator";

class AuthorDto {
  @IsString()
  authorName!: string;
}

export default AuthorDto;
