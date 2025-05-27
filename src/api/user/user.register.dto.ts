import { IsNotEmpty, IsString } from "class-validator";

class UserRegisterProps {
  @IsString()
  @IsNotEmpty()
  username!: string;
  @IsString()
  @IsNotEmpty()
  password!: string;
}

export default UserRegisterProps;
