import {IBookRepository} from "../../api/book/interfaces";
import {IBook} from "../models/book.model";
import {BookDto} from "../../dto/book.dto";
import {connection} from "../index";

export class BookRepository implements IBookRepository {
    async addBook(book: IBook): Promise<IBook> {
        await connection.query(
            `INSERT INTO book (id_user, book_name, created_at)
                    VALUES (?, ?, CURRENT_TIMESTAMP());`,
            [book.id_user, book.book_name]
        );

        const result: any[] = await connection.query(`SELECT * FROM book WHERE book_name = ?;`, book.book_name);
        return result.length ? result[0] : false;
    }

    async editBook(book: IBook): Promise<IBook> {
        let result: any[] = await connection.query(
            `UPDATE book
                    SET book_name = ?, 
                    updated_at = CURRENT_TIMESTAMP()
                    WHERE id_book = ?;`,
            [book.book_name, book.id_book]
        )
        return result.length ? result[0].affectedRows : false;
    }

    async deleteBook(id_book) {
        let result = await connection.query(
            `DELETE FROM book WHERE id_book = ?;`,
            [id_book]
        )
        return result ? result : false;
    }

    getBookById(id_book): Promise<IBook> {
        return Promise.resolve(undefined);
    }

}
