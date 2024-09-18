import { Router } from 'express';
import generalController from '../controllers/generalcontroller';
const generalRouter = Router();

generalRouter.get('/getMap', generalController.getMap, (req, res) => {
  console.log('HIT!');
  res.status(200).send(res.locals.getMap);
});

generalRouter.post('/saveMap', generalController.saveMap, (req, res) => {
  console.log('HIT!');
  res.status(200).send(res.locals.saveMap);
});

export default generalRouter;
