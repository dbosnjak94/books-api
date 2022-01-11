import jwt from 'jsonwebtoken';
import { IUser } from '../database/models/user.model';

const generateToken = (user: IUser) => {
    console.log(user);
    try {
        const secret = 'SecretKey';
        const token = jwt.sign(
            {
                data: {
                    id_user: user.id_user,
                    role: user.id_role
                }
            },
            secret
        );
        return token;
    } catch (err) {
        throw { message: 'Failed to create token' };
    }
};

export { generateToken };