import express, { Request, Response, NextFunction } from 'express';

const generalController = {
  getMap: (req: Request, res: Response, next: NextFunction) => {
    console.log(req, res, 'HIT!');
  },
  saveMap: (req: Request, res: Response, next: NextFunction) => {
    console.log(req, res, 'HIT!');
  },
};

export default generalController;
