'use strict';

import express, {Request, Response} from 'express';
import {IBookController} from './interfaces';
import {BookController} from './controller';
import {authenticate} from "../../utils/jwtAuthentication";
import {IListOfBooks, IListOfBooksAndAuthors} from "../../database/models/book.model";

const router = express.Router()

const bookController: IBookController = new BookController();

router.post('/addBook', bookController.addBook);
router.put('/editBook', bookController.editBook);
router.delete('/deleteBook', bookController.deleteBook);
router.get('/getAllBooksAndAuthors', bookController.getAllBooksAndAuthors);
router.get('/getBooksByAuthor', bookController.getBooksByAuthor);

export default router;