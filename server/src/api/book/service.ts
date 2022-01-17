import { Request, Response } from "express";
import { IBookRepository, IBookService } from "../book/interfaces";
import {
  BookDto,
  ListOfBooksDto,
  ListOfBooksAndAuthorsDto,
} from "../../dto/book.dto";
import { IBook } from "../../database/models/book.model";
import { StatusCodes } from "../../statusCodes/statusCodes";

export class BookService implements IBookService {
  constructor(private bookRepository: IBookRepository) {}

  async addBook(req: Request, res: Response): Promise<BookDto> {
    try {
      let { id_user, book_name } = req.body;
      let book: IBook = await this.bookRepository.addBook({
        id_user,
        book_name,
      });
      return {
        status: StatusCodes.OK,
        data: book,
        message: "New Book has been inserted to the database",
      };
    } catch (err) {
      return {
        status: StatusCodes.SERVER_ERROR,
        message: err.message,
      };
    }
  }

  async editBook(req: Request, res: Response): Promise<BookDto> {
    try {
      let { id_book, book_name } = req.body;

      let book = await this.bookRepository.editBook({ id_book, book_name });

      return {
        status: StatusCodes.OK,
        data: book,
        message: "Book profile has been updated",
      };
    } catch (err) {
      return {
        status: StatusCodes.SERVER_ERROR,
        message: err.message,
      };
    }
  }

  async deleteBook(req: Request, res: Response): Promise<BookDto> {
    try {
      let { id_book } = req.body;

      console.log(req.body);

      let deletedBook = await this.bookRepository.deleteBook(id_book);

      console.log(deletedBook);

      if (deletedBook[0].affectedRows === 0) {
        return {
          status: StatusCodes.UNPROCESSABLE,
          message: "Book cannot be deleted from the database",
        };
      }

      return {
        status: StatusCodes.OK,
        message: "Book has been deleted from the database",
      };
    } catch (err) {
      return {
        status: StatusCodes.SERVER_ERROR,
        message: err.message,
      };
    }
  }

  async getAllBooksAndAuthors(
    req: Request,
    res: Response
  ): Promise<ListOfBooksAndAuthorsDto> {
    try {
      let listOfBooksAndAuthors =
        await this.bookRepository.getAllBooksAndAuthors();

      return {
        status: StatusCodes.OK,
        data: listOfBooksAndAuthors,
        message: "Book has been deleted from the database",
      };
    } catch (err) {
      return {
        status: StatusCodes.SERVER_ERROR,
        message: err.message,
      };
    }
  }

  async getBooksByAuthor(req: Request, res: Response): Promise<ListOfBooksDto> {
    try {
      const id_user: any = req.params.idUser;

      let listOfBooks = await this.bookRepository.getBooksByAuthor(id_user);

      return {
        status: StatusCodes.OK,
        data: listOfBooks,
        message: "Book has been deleted from the database",
      };
    } catch (err) {
      return {
        status: StatusCodes.SERVER_ERROR,
        message: err.message,
      };
    }
  }
}
