import { IBook, IListOfBooksAndAuthors } from "../database/models/book.model";

export class BookDto {
  status: number;
  data?: IBook;
  message?: string;
}

export class ListOfBooksAndAuthorsDto {
  status: number;
  data?: IListOfBooksAndAuthors[];
  message?: string;
}

export class ListOfBooksDto {
  status: number;
  data?: IBook[];
  message?: string;
}
