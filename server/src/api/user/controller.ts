'use strict';

import {Request, Response, NextFunction} from "express";

import {UserService} from "./service";
import {AuthRepository} from "../../database/repositories/user.repository";
import {IUserController, IUserRepository, IUserService} from "./interfaces";
import {UserDto} from '../../dto/user.dto';

const userRepository: IUserRepository = new UserRepository();

const userService: IUserService = new UserService(userRepository);

export class UserController implements IUserController {
    async addUser(req: Request, res: Response, next: NextFunction): Promise<UserDto> {
        try {
            let user = await userService.addUser(req, res);
            return res.json(user);
        } catch (err) {
            return err.message;
        }
    }

    async editUser(req: Request, res: Response, next: NextFunction): Promise<UserDto> {
        try {
            let user = await userService.editUser(req, res);
            return res.json(user);
        } catch (err) {
            return err.message;
        }
    }

    async deleteUser(req: Request, res: Response, next: NextFunction): Promise<UserDto> {
        try {
            let deletedUser = await userService.deleteUser(req, res);
            return res.json(deletedUser);
        } catch (err) {
            return err.message;
        }
    }

}
