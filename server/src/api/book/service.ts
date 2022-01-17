import { Request, Response } from "express";
import { IBookRepository, IBookService } from "../book/interfaces";
import { BookDto } from "../../dto/book.dto";
import {
  IBook,
  IListOfBooks,
  IListOfBooksAndAuthors,
} from "../../database/models/book.model";

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
        data: book,
        message: "New Book has been inserted to the database",
      };
    } catch (err) {
      return {
        message: err.message,
      };
    }
  }

  async editBook(req: Request, res: Response): Promise<BookDto> {
    try {
      let { id_book, book_name } = req.body;

      let book = await this.bookRepository.editBook({ id_book, book_name });

      return {
        data: book,
        message: "Book profile has been updated",
      };
    } catch (err) {
      return {
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
          message: "Book cannot be deleted from the database",
        };
      }

      return {
        message: "Book has been deleted from the database",
      };
    } catch (err) {
      return {
        message: err.message,
      };
    }
  }

  async getAllBooksAndAuthors(
    req: Request,
    res: Response
  ): Promise<[IListOfBooksAndAuthors]> {
    try {
      let listOfBooksAndAuthors =
        await this.bookRepository.getAllBooksAndAuthors();

      return {
        listOfBooksAndAuthors,
      };
    } catch (err) {
      return {
        data: null,
        message: err.message,
      };
    }
  }

  async getBooksByAuthor(req: Request, res: Response): Promise<IListOfBooks[]> {
    try {
      const id_user: any = req.params.idUser;

      let listOfBooks = await this.bookRepository.getBooksByAuthor(id_user);

      return {
        listOfBooks,
      };
    } catch (err) {
      return {
        message: err.message,
      };
    }
  }
}
