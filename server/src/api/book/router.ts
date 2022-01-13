'use strict';

import express from 'express';
import {IBookController} from './interfaces';
import {BookController} from './controller';
import {authenticate} from "../../utils/jwtAuthentication";

const router = express.Router()

const bookController: IBookController = new BookController();

router.post('/addBook', bookController.addBook);
router.put('/editBook', bookController.editBook);
router.delete('/deleteBook', bookController.deleteBook);

export default router;