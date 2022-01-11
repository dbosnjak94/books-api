'use strict';

import {Request, Response, NextFunction} from "express";

import {BookRepository} from "../../database/repositories/book.repository";
import {IBookController, IBookRespository, IBookSerivce} from "./interfaces";
import {BookDto} from '../../dto/book.dto';
import {BookService} from "./service";

const bookRepository: IBookRepository = new BookRepository();

const bookService: IBookService = new BookService(bookRepository);

export class BookController implements IBookController {
    async addBook(req: Request, res: Response, next: NextFunction): Promise<BookDto> {
        try {
            let book = await BookService.addBook(req, res);
            return res.json(book);
        } catch (err) {
            return err.message;
        }
    }

    async editBook(req: Request, res: Response, next: NextFunction): Promise<BookDto> {
        try {
            let book = await bookService.editBook(req, res);
            return res.json(book);
        } catch (err) {
            return err.message;
        }
    }

    async deleteBook(req: Request, res: Response, next: NextFunction): Promise<BookDto> {
        try {
            let deletedBook = await bookService.deleteBook(req, res);
            return res.json(deletedBook);
        } catch (err) {
            return err.message;
        }
    }
}
