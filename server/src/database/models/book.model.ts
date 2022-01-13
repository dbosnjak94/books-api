export interface IBook {
    id_book?: number;
    id_user?: number;
    book_name: string;
}

export interface IListOfBooks {
    id_book?: number,
    book_name: string
}

export interface IListOfBooksAndAuthors {
    id_book: number,
    first_name: string,
    last_name: string,
    book_name: number
}