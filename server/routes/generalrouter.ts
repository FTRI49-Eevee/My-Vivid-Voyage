import express, { Router, Request, Response, NextFunction } from 'express';
import generalController from '../controllers/generalcontroller';

const generalRouter = Router();

generalRouter.get('/', generalController, (req: Request, res: Response, next: NextFunction) {

})

export default generalRouter;
