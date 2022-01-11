import { Request, Response } from 'express';
import {IBookRespository, IBookSerivce} from '../book/interfaces';
import {BookDto} from '../../dto/book.dto';
import {IBook} from "../../database/models/book.model";


export class BookService implements IBookSerivce {
    constructor(private bookRepository: IBookRepository) {}

    async addBook(req: Request, res: Response): Promise<BookDto> {
        try {
            let {book_name} = req.body;

        } catch (err) {

        }
    }

    async editBook(req: Request, res: Response): Promise<BookDto> {
        try {

        } catch (err) {

        }
    }

    async deleteBook(req: Request, res: Response): Promise<BookDto> {
        try {

        } catch (err) {

        }
    }
}
