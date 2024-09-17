import express, { Request, Response, NextFunction } from 'express';
import generalController from './controllers/generalcontroller.js';
import { createClient } from '@supabase/supabase-js';


const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

const app = express();
app.use(express.json());
const PORT = 8080;

interface DefaultError {
  log: string;
  status: number;
  message: { err: string };
}

app.use('/getmap', generalController.getMap, (req: Request, res: Response) => {
  console.log('HIT!');
  res.status(200).send(res.locals.getMap);
});

app.use('/', (_req, res) => {
  res.status(404).send('Error page not found!');
});

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  const defaultErr: DefaultError = {
    log: 'An error was caught by the global error handler in server.ts',
    status: 500,
    message: {
      err: 'An error was caught by the global error handler in server.ts',
    },
  };

  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () =>
  console.log(`Server listening on http://localhost:${PORT}`)
);
