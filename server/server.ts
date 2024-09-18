import express, { Request, Response, NextFunction } from 'express';
import multer from 'multer';
import generalController from './controllers/generalcontroller.js';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
// import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// export const supabase = createClient(supabaseUrl, supabaseAnonKey);

const app = express();
app.use(express.json());
// const upload = multer(); // This will handle multipart/form-data
app.use(express.urlencoded({ extended: true }));
const PORT = 8080;

interface DefaultError {
  log: string;
  status: number;
  message: { err: string };
}

//storage
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const Storage = multer.diskStorage({
  destination:(req, file, cb) => {
    console.log(path.resolve(__dirname, './models'))
    cb(null, path.resolve(__dirname, './models'))
  },
  filename:(req, file, cb) => {
    cb(null, Date.now() + '--' + file.originalname);
  }
});
const upload = multer({
  storage: Storage
})

app.get('/getmap', generalController.getMap, (req: Request, res: Response) => {
  console.log('HIT! /getmap');
  res.status(200).send(res.locals.getMap);
});

app.post(
  '/savemap',
  generalController.saveMap,
  (req: Request, res: Response) => {
    console.log('HIT! /savemap');
    res.status(200).send(res.locals.saveMap);
  }
);

app.get('/db', generalController.getData, (req: Request, res: Response) => {
  console.log('HIT! /db');
  res.status(200).send(res.locals.getData);
});

app.post('/db',
  upload.single('image'), 
  generalController.saveData, 
  (req: Request, res: Response) => {
  console.log('HIT! /db');
  const {caption} = req.body
  console.log(caption)
  res.status(200).send(res.locals.saveData);
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
  console.log(`Server listening on Port: ${PORT}`)
);
