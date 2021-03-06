import { IUser } from "../database/models/user.model";

export class UserDto {
  data?: IUser;
  token?: string;
  message?: string;
  status: number;
}

export class ListOfUsersDto {
  data?: IUser[];
  token?: string;
  message?: string;
  status: number;
}
