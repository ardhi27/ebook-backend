export interface UserLoginProps {
  username: string;
  password: string;
}

export interface UserRegisterProps extends UserLoginProps {}

export interface UserCreateArgs extends UserLoginProps {
  role?: string;
}
