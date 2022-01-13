import {Request, Response, NextFunction} from "express";
import {BookDto} from '../../dto/book.dto';
import {IBook, IListOfBooks, IListOfBooksAndAuthors} from '../../database/models/book.model';

export interface IBookController {
    addBook(req: Request, res: Response, next: NextFunction): Promise<BookDto>;
    editBook(req: Request, res: Response, next: NextFunction): Promise<BookDto>;
    deleteBook(req: Request, res: Response, next: NextFunction): Promise<BookDto>;
    getAllBooksAndAuthors(req: Request, res: Response, next: NextFunction): Promise<IListOfBooksAndAuthors>;
    getBooksByAuthor(req: Request, res: Response, next: NextFunction): Promise<IListOfBooks>;
}

export interface IBookService {
    addBook(req: Request, res: Response): Promise<BookDto>;
    editBook(req: Request, res: Response): Promise<BookDto>;
    deleteBook(req: Request, res: Response): Promise<BookDto>;
    getAllBooksAndAuthors(req: Request, res: Response): Promise<[IListOfBooksAndAuthors]>;
    getBooksByAuthor(req: Request, res: Response): Promise<[IListOfBooks]>;
}

export interface IBookRepository {
    addBook(book: IBook): Promise<IBook>;
    editBook(book: IBook): Promise<IBook>;
    deleteBook(id_book);
    getBookById(id_book): Promise<IBook>;
    getAllBooksAndAuthors(): Promise<any[]>;
    getBooksByAuthor(id_user): Promise<[IBook]>;
}



