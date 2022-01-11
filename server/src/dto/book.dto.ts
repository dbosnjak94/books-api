import {IBook} from '../database/models/book.model';

export class BookDto {
    data?: IBook;
    message?: string;
}