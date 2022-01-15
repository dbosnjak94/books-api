import { Request, Response } from "express";
import { IUserRepository, IUserService } from "../user/interfaces";
import { UserDto } from "../../dto/user.dto";
import { IUser } from "../../database/models/user.model";
import { hashPassword } from "../../utils/bcrypt";
import { generateToken } from "../../utils/jwtGenerator";

export class UserService implements IUserService {
  constructor(private userRepository: IUserRepository) {}

  async addUser(req: Request, res: Response): Promise<UserDto> {
    try {
      const role: number = req.body.user.role;
      let { email, password, first_name, last_name } = req.body;
      console.log(email, password, first_name, last_name);

      if (role != 1) {
        return {
          message:
            "User doesn't have permission to add new author to the database",
        };
      }
      password = await hashPassword(password);
      let user: IUser = await this.userRepository.getUserByEmail(email);
      if (user) {
        return {
          message: "User already Exists",
        };
      }

      console.log(email, password, first_name, last_name);

      user = await this.userRepository.addUser({
        email,
        password,
        first_name,
        last_name,
      });
      delete user.password;
      const jwt = generateToken(user);
      if (!jwt) {
        return { message: jwt.message };
      }
      return {
        data: user,
        token: jwt.toString(),
        message: "New author has been created.",
      };
    } catch (err) {
      return {
        data: null,
        token: "",
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
          message: "User doesn't have permission to edit Author",
        };
      }
      let user = await this.userRepository.editUser({
        id_user,
        email,
        first_name,
        last_name,
      });
      console.table(user);
      return {
        data: user,
        message: "Author info has been edited.",
      };
    } catch (err) {
      return {
        data: null,
        token: "",
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
          message:
            "User doesn't have permission to delete Author form the database",
        };
      }
      let deletedUser = await this.userRepository.deleteUser({ id_user });

      console.log(deletedUser);

      if (!deletedUser) {
        return {
          data: null,
          token: "",
          message: "Author cannot be deleted",
        };
      }
      return {
        data: null,
        token: "",
        message: "Author has been deleted",
      };
    } catch (err) {
      return {
        data: null,
        token: "",
        message: err.message,
      };
    }
  }
  async getAllUsers(req: Request, res: Response) {
    try {
      const role: number = req.body.user.role;
      if (role != 1) {
        return {
          message: "User doesn't have permission to get list of all Authors",
        };
      }
      let listOfUsers = await this.userRepository.getAllUsers();
      return {
        data: listOfUsers,
        message: "List of all users",
      };
    } catch (err) {
      return err.message;
    }
  }
}
