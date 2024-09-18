import { Request, Response, NextFunction } from 'express';
import db from '../models/usermodel';

const generalController = {
  getMap: (req: Request, res: Response, next: NextFunction) => {
    console.log('getMap: ', req);
    return next();
  },

  saveMap: (req: Request, res: Response, next: NextFunction) => {
    console.log('saveMap: ', req);
    return next();
  },

  getData: (req: Request, res: Response, next: NextFunction) => {
    console.log('getData: ', req);
    return next();
  },
  saveData: (req: Request, res: Response, next: NextFunction) => {
    console.log('saveData: ', req);
    return next();
  },
};

export default generalController;
