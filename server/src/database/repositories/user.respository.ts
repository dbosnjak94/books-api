import {connection} from "../index";
import {IUser} from '../models/user.model';
import {IUserRepository} from '../../api/user/interfaces';
import {UserDto} from "../../dto/user.dto";

export class UserRepository implements IUserRepository {

    async getUserById(id_user): Promise<IUser | null>{
        const result: any[] = await connection.query(`SELECT * FROM user WHERE id_user = ?`, id_user);

        return result.length ? result[0] : false;
    }

    async getUserByEmail(email: string) {
        const result: any[] = await connection.query(`SELECT * FROM user WHERE email = ?`, email);

        return result.length ? result[0] : false;
    }

    async addUser(user: IUser): Promise<IUser | null> {
        await connection.query(
            `INSERT INTO user (role, first_name, last_name, email, password, created_at)
                    VALUES (?, ?, ?, ?, ?, CURRENT_TIMESTAMP());`,
            [user.id_role, user.first_name, user.last_name, user.email, user.password]
        );

        const result: any[] = await connection.query(`SELECT * FROM user WHERE email = ?`, user.email);

        return result.length ? result[0] : false;
    }

    async editUser(user: IUser): Promise<IUser | null> {
        const result: any[] = await connection.query(
            `UPDATE user
                    SET
                    first_name = ?,
                    last_name = ?,
                    email = ?,
                    password = ?,
                    updated_at = CURRENT_TIMESTAMP()
                    WHERE condition id_user = ?;`,
            [user.first_name, user.last_name, user.email, user.id_user]
        );

        return result ? result[0] : false;
    }

    async deleteUser(user: IUser) {
        const result: any[] = await connection.query(
            `DELETE FROM user WHERE id_user = ?;`,
            [user.id_user]
        );

        return result ? result[0] : false;
    }
}