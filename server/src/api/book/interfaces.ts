import {Request, Response, NextFunction} from "express";
import {BookDto} from '../../dto/book.dto';
import {IBook} from '../../database/models/book.model';

export interface IBookController {
    addBook(req: Request, res: Response, next: NextFunction): Promise<BookDto>;
    editBook(req: Request, res: Response, next: NextFunction): Promise<BookDto>;
    deleteBook(req: Request, res: Response, next: NextFunction): Promise<BookDto>;
}

export interface IBookService {
    addBook(req: Request, res: Response): Promise<BookDto>;
    editBook(req: Request, res: Response): Promise<BookDto>;
    deleteBook(req: Request, res: Response): Promise<BookDto>;
}

export interface IBookRepository {
    addBook(book: IBook): Promise<IBook>;
    editBook(book: IBook): Promise<IBook>;
    deleteBook(id_book);
    getBookById(id_book): Promise<IBook>;
    getAllBooksAndAuthors(): Promise<IListOfBooks>;
    getBooksByAuthor(id_user);
}



