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

  getData: async (req: Request, res: Response, next: NextFunction) => {
    const query = `SELECT * FROM users_states`;
    // await db.query(query).then((data: unknown) => {
    //   res.locals.getData = data;
    // });
    return next();
  },
  saveData: (req: Request, res: Response, next: NextFunction) => {
    const { selectedRegion, image, caption } = req.body;
    if ((selectedRegion && image) || caption) {
      return next();
    } else {
      return next({
        log: 'An error occurred attempting to save data at generalController.saveData',
        status: 500,
        message: {
          err: 'An error occurred attempting to save data at generalController.saveData',
        },
      });
    }
  },
};

export default generalController;
