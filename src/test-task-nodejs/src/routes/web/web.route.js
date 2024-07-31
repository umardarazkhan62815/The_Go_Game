import express from 'express';
import webController from '../../controllers/web/web.controller.js';
import { verifyToken } from '../../middlewares/verify-token.js';
export const webRouter =  express.Router();

webRouter.post('/login', webController.login);
webRouter.post('/signup', webController.signup);
webRouter.get('/profile', verifyToken, webController.getProfile);
webRouter.get('/getAllUser', verifyToken, webController.getAllUser);