export interface IBook {
    id_book?: number;
    id_user?: number;
    book_name: string;
}

export interface IListOfBooks {
    listOfBooks: any[];
    message: string;
}