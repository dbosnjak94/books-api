import {connection} from "../index";
import {IUser} from '../models/user.model';
import {IUserRepository} from '../../api/user/interfaces';

export class UserRepository implements IUserRepository {

    async getUserById(id_user): Promise<IUser | null>{
        const result: any[] = await connection.query(`SELECT * FROM user WHERE id_user = ?`, id_user);

        return result.length ? result[0] : false;
    }

    async getUserByEmail(email: string) {
        const result: any[] = await connection.query(`SELECT * FROM user WHERE email = ?`, email);

        console.log(result);
        return result[0].length ? result[0] : false;
    }

    async addUser(user: IUser): Promise<IUser | null> {
        await connection.query(
            `INSERT INTO user (id_role, first_name, last_name, email, password, created_at)
                    VALUES (2, ?, ?, ?, ?, CURRENT_TIMESTAMP());`,
            [user.first_name, user.last_name, user.email, user.password]
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
                    updated_at = CURRENT_TIMESTAMP()
                    WHERE id_user = ?;`,
            [user.first_name, user.last_name, user.email, user.id_user]
        );

        return result.length ? result[0].affectedRows : false;
    }

    async deleteUser(user: IUser) {
        const result: any[] = await connection.query(
            `DELETE FROM user WHERE id_user = ?;`,
            [user.id_user]
        );

        return result ? result[0] : false;
    }
}