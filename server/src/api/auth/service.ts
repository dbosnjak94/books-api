import { Request, Response, NextFunction } from 'express';

import { UserDto } from '../../dto/user.dto';
import { IAuthRepository, IAuthService } from './interfaces';

import { hashPassword, comparePassword } from '../../utils/bcrypt';
import { generateToken } from '../../utils/jwtGenerator';

import { IUser } from '../../database/models/user.model';

export class AuthService implements IAuthService {
    constructor(private authRepository: IAuthRepository) {}

    async signUp(req: Request): Promise<UserDto> {
        try {
            let { first_name, last_name, email, password } = req.body;
            password = await hashPassword(password);
            let user: IUser = await this.authRepository.getUserByEmail(email);

            if (user) {
                return {
                    message: 'User already exists'
                };
            }

            user = await this.authRepository.createUser({
                first_name,
                last_name,
                email,
                password
            });

            const userInfo: IUser = await this.authRepository.getUserByEmail(email);

            delete userInfo.password;
            const jwt = generateToken(user);

            if(!jwt) {
                return {
                    message: jwt.message
                }
            }

            return {
                data: user,
                token: jwt.toString(),
                message: 'New user has been created'
            };
        } catch (err) {
            return err.message;
        }

    }

    async signIn(req: Request): Promise<UserDto> {
        try {
            let { email, password } = req.body;

            const user: IUser = await this.authRepository.getUserByEmail(email);

            if (!user) {
                return {
                    message: 'Email does not exist, please try again'
                };
            }

            const token = generateToken(user);

            let match = await comparePassword(password, user.password);

            if (!match) {
                return {
                    message: 'Wrong password, please try again'
                };
            }

            return {
                data: user,
                token: token.toString(),
                message: 'User is logged in'
            };
        } catch (err) {
            return err.message;
        }

    }


}
