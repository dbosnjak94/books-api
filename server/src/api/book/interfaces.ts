import { Request, Response, NextFunction } from "express";
import {
  BookDto,
  ListOfBooksAndAuthorsDto,
  ListOfBooksDto,
} from "../../dto/book.dto";
import {
  IBook,
  IListOfBooksAndAuthors,
} from "../../database/models/book.model";

export interface IBookController {
  addBook(req: Request, res: Response, next: NextFunction): Promise<{}>;
  editBook(req: Request, res: Response, next: NextFunction): Promise<{}>;
  deleteBook(req: Request, res: Response, next: NextFunction): Promise<{}>;
  getAllBooksAndAuthors(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<{}>;
  getBooksByAuthor(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<{}>;
}

export interface IBookService {
  addBook(req: Request, res: Response): Promise<BookDto>;
  editBook(req: Request, res: Response): Promise<BookDto>;
  deleteBook(req: Request, res: Response): Promise<BookDto>;
  getAllBooksAndAuthors(
    req: Request,
    res: Response
  ): Promise<ListOfBooksAndAuthorsDto>;
  getBooksByAuthor(req: Request, res: Response): Promise<ListOfBooksDto>;
}

export interface IBookRepository {
  addBook(book: IBook): Promise<IBook>;
  editBook(book: IBook): Promise<IBook>;
  deleteBook(id_book);
  getBookById(id_book): Promise<IBook>;
  getAllBooksAndAuthors(): Promise<IListOfBooksAndAuthors[]>;
  getBooksByAuthor(id_user): Promise<IBook[]>;
}
