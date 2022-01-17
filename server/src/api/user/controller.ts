"use strict";

import { Request, Response, NextFunction } from "express";

import { UserRepository } from "../../database/repositories/user.respository";
import { IUserController, IUserRepository, IUserService } from "./interfaces";
import { UserDto } from "../../dto/user.dto";
import { UserService } from "./service";

const userRepository: IUserRepository = new UserRepository();

const userService: IUserService = new UserService(userRepository);

export class UserController implements IUserController {
  async addUser(req: Request, res: Response, next: NextFunction): Promise<{}> {
    try {
      let user = await userService.addUser(req, res);
      return res.json(user);
    } catch (err) {
      return err.message;
    }
  }

  async editUser(req: Request, res: Response, next: NextFunction): Promise<{}> {
    try {
      let user = await userService.editUser(req, res);
      return res.json(user);
    } catch (err) {
      return err.message;
    }
  }

  async deleteUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<{}> {
    try {
      let deletedUser = await userService.deleteUser(req, res);
      return res.json(deletedUser);
    } catch (err) {
      return err.message;
    }
  }

  async getAllUsers(req: Request, res: Response, next: NextFunction) {
    try {
      let listOfAuthors = await userService.getAllUsers(req, res);
      return res.json(listOfAuthors);
    } catch (err) {
      return err.message;
    }
  }
}
