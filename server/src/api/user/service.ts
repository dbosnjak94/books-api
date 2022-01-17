import { Request, Response } from "express";
import { IUserRepository, IUserService } from "../user/interfaces";
import { ListOfUsersDto, UserDto } from "../../dto/user.dto";
import { IUser } from "../../database/models/user.model";
import { hashPassword } from "../../utils/bcrypt";
import { generateToken } from "../../utils/jwtGenerator";
import { StatusCodes } from "../../statusCodes/statusCodes";

export class UserService implements IUserService {
  constructor(private userRepository: IUserRepository) {}

  async addUser(req: Request, res: Response): Promise<UserDto> {
    try {
      const role: number = req.body.user.role;
      let { email, password, first_name, last_name } = req.body;

      if (role != 1) {
        return {
          status: StatusCodes.UNAUTHORIZED,
          message:
            "User doesn't have permission to add new author to the database",
        };
      }
      password = await hashPassword(password);
      let user: IUser = await this.userRepository.getUserByEmail(email);
      if (user) {
        return {
          status: StatusCodes.NOT_ACCEPTABLE,
          data: user,
          message: "User already Exists",
        };
      }

      user = await this.userRepository.addUser({
        email,
        password,
        first_name,
        last_name,
      });
      delete user.password;
      return {
        status: StatusCodes.OK,
        data: user,
        message: "New author has been created.",
      };
    } catch (err) {
      return {
        status: StatusCodes.SERVER_ERROR,
        message: err.message,
      };
    }
  }

  async editUser(req: Request, res: Response): Promise<UserDto> {
    try {
      const role: number = req.body.user.role;
      let { id_user, email, first_name, last_name } = req.body;

      console.log(id_user, email, first_name, last_name);
      if (role != 1) {
        return {
          status: StatusCodes.UNAUTHORIZED,
          message: "User doesn't have permission to edit Author",
        };
      }
      let user = await this.userRepository.editUser({
        id_user,
        email,
        first_name,
        last_name,
      });
      return {
        status: StatusCodes.OK,
        data: user,
        message: "Author info has been edited.",
      };
    } catch (err) {
      return {
        status: StatusCodes.SERVER_ERROR,
        message: err.message,
      };
    }
  }

  async deleteUser(req: Request, res: Response): Promise<UserDto> {
    try {
      const role: number = req.body.user.role;
      let { id_user } = req.body;
      console.log(id_user);
      if (role != 1) {
        return {
          status: StatusCodes.UNAUTHORIZED,
          message:
            "User doesn't have permission to delete Author form the database",
        };
      }
      let deletedUser = await this.userRepository.deleteUser({ id_user });

      if (!deletedUser) {
        return {
          status: StatusCodes.UNPROCESSABLE,
          data: deletedUser,
          token: "",
          message: "Author cannot be deleted",
        };
      }
      return {
        status: StatusCodes.OK,
        data: deletedUser,
        token: "",
        message: "Author has been deleted",
      };
    } catch (err) {
      return {
        status: StatusCodes.SERVER_ERROR,
        message: err.message,
      };
    }
  }

  async getAllUsers(req: Request, res: Response): Promise<ListOfUsersDto> {
    try {
      const role: number = req.body.user.role;
      if (role != 1) {
        return {
          status: StatusCodes.UNAUTHORIZED,
          message: "User doesn't have permission to get list of all Authors",
        };
      }
      let listOfUsers = await this.userRepository.getAllUsers();
      return {
        status: StatusCodes.OK,
        data: listOfUsers,
        message: "List of all users",
      };
    } catch (err) {
      return {
        status: StatusCodes.SERVER_ERROR,
        message: err.message,
      };
    }
  }
}
