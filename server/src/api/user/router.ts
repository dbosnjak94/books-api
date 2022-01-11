'use strict';

import express from 'express';
import {IUserController} from './interfaces';
import {UserController} from './controller';
import {authenticate} from "../../utils/jwtAuthentication";

const router = express.Router()

const userController: IUserController = new UserController();

router.post('/addUser', authenticate, userController.addUser);
router.post('/editUser', authenticate, userController.editUser);
router.delete('/deleteUser',authenticate, userController.deleteUser);