import express from 'express';
import { webRouter } from '../routes/web/web.route.js';
export const restRouter = express.Router();

restRouter.use('/web', webRouter);
