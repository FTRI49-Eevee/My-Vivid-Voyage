import express, { Router, Request, Response, NextFunction } from 'express';
import generalController from '../controllers/generalcontroller';
const generalRouter = Router();

generalRouter.get(
  '/api/map',
  generalController.getMap,
  (req: Request, res: Response) => {
    res.status(200).send(res.locals.data);
  }
);

generalRouter.post(
  '/api/map',
  generalController.saveMap,
  (req: Request, res: Response) => {
    res.status(200).send(res.locals.data);
  }
);

export default generalRouter;
