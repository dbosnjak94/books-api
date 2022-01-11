import { Request, Response } from 'express';
import {IUserRepository, IUserService} from '../user/interfaces';
import {UserDto} from '../../dto/user.dto';
import {hashPassword} from "../../utils/bcrypt";
import {IUser} from "../../database/models/user.model";
import {generateToken} from "../../utils/jwtGenerator";

export class UserSerivce implements IUserService {
    constructor(private userRepository: IUserRepository) {}

    async addUser(req: Request, res: Response): Promise<UserDto> {
        try {
            let {email, password, first_name, last_name} = req.body;
            password = await hashPassword(password);
            let user: IUser = await this.userRepository.getUserByEmail(email);

            if(user) {
                return {
                    message: "User already Exists"
                }
            }

            user = await this.userRepository.addUser({
                email, password, first_name, last_name
            })

            delete user.password;
            const jwt = generateToken(user);

            if(!jwt) {
                return {message: jwt.message}
            }

            return {
                data: user,
                token: jwt.toString(),
                message: "New author has been created."
            }

        } catch (err) {
            return {
                data: null,
                token: "",
                message: err.message
            }
        }
    }

    async editUser(req: Request, res: Response): Promise<UserDto> {
        try {
            let {id_user, email, first_name, last_name} = req.body;

            let user = await this.userRepository.editUser({
                id_user, email, first_name, last_name
            });

            return {
                data: user,
                message: "Author info has been edited."
            }

        } catch (err) {
            return {
                data: null,
                token: "",
                message: err.message
            }
        }
    }

    async deleteUser(req: Request, res: Response): Promise<UserDto> {
        try {
            let {id_user} = req.body;
            let deletedUser = await this.userRepository.deleteUser(id_user);

            if(!deletedUser) {
                return {
                    data: null,
                    token: "",
                    message: "Author cannot be deleted"
                }
            }

            return {
                data: null,
                token: "",
                message: "Author has been deleted"
            }

        } catch (err) {
            return {
                data: null,
                token: "",
                message: err.message
            }
        }
    }



}