'use strict';

import express from 'express';
import {IBookController} from './interfaces';
import {BookController} from './controller';
import {authenticate} from "../../utils/jwtAuthentication";

const router = express.Router()

const bookController: IBookController = new BookController();

router.post('/addBook', authenticate, bookController.addBook);
router.put('/editBook', authenticate, bookController.editBook);
router.delete('/deleteBook',authenticate, bookController.deleteBook);

export default router;