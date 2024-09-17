import express, { Request, Response, NextFunction } from 'express';
import generalRouter from './routes/generalrouter';

const app = express();
const PORT = 8080;

interface DefaultError {
  log: string;
  status: number;
  message: { err: string };
}

app.use('/', generalRouter);

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.log(err);
  res.status(500).json(err);
});

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  const defaultErr: DefaultError = {
    log: '',
    status: 500,
    message: { err: '' },
  };

  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => `Server listening on http://localhost:${PORT}`);
