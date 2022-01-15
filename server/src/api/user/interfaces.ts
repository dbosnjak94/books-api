import {Request, Response, NextFunction} from "express";

import {UserDto} from "../../dto/user.dto";
import {IUser} from "../../database/models/user.model";

export interface IUserController {
    addUser(req: Request, res: Response, next: NextFunction): Promise<UserDto>;
    editUser(req: Request, res: Response, next: NextFunction): Promise<UserDto>;
    deleteUser(req: Request, res: Response, next: NextFunction): Promise<UserDto>;
    getAllUsers(req: Request, res: Response, next: NextFunction);
}

export interface IUserService {
    addUser(req: Request, res: Response): Promise<UserDto>;
    editUser(req: Request, res: Response): Promise<UserDto>;
    deleteUser(req: Request, res: Response): Promise<UserDto>;
    getAllUsers(req: Request, res: Response);
}

export interface IUserRepository {
    addUser(user: IUser): Promise<IUser | null>;
    editUser(user: IUser): Promise<IUser| null>;
    deleteUser(id_user);
    getUserByEmail(email): Promise<IUser | null>;
    getUserById(id_user): Promise<IUser | null>;
    getAllUsers();
}