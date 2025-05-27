import { IsNotEmpty, IsString } from "class-validator";

class UserLoginProps {
  @IsString()
  @IsNotEmpty()
  username!: string;
  @IsString()
  @IsNotEmpty()
  password!: string;
}

export default UserLoginProps;
