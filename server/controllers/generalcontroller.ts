import { Request, Response, NextFunction } from 'express';

const generalController = {
  getMap: (req: Request, res: Response, next: NextFunction) => {
    console.log(req);
    return next();
  },

  saveMap: (req: Request, res: Response, next: NextFunction) => {
    console.log(req);
    return next();
  },
};

export default generalController;
