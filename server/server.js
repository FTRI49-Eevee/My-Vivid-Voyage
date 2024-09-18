import express from 'express';
import multer from 'multer';
import generalController from './controllers/generalcontroller.js';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
// dotenv.config();
// const supabaseUrl = process.env.SUPABASE_URL || '';
// const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY || '';
// const googleClientId = process.env.GOOGLE_CLIENT_ID || '';
// const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET || '';
// if (!googleClientId || !googleClientSecret) {
//   throw new Error(
//     'Google Client ID and Client Secret must be provided in .env file'
//   );
// }
const app = express();
app.use(express.json());
// const upload = multer(); // This will handle multipart/form-data
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const PORT = 8080;
//storage
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const Storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log(path.resolve(__dirname, './models'));
        cb(null, path.resolve(__dirname, './models'));
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '--' + file.originalname);
    },
});
const upload = multer({
    storage: Storage,
});
app.get('/getmap', generalController.getMap, (req, res) => {
    console.log('HIT! /getmap');
    res.status(200).send(res.locals.getMap);
});
app.post('/savemap', generalController.saveMap, (req, res) => {
    console.log('HIT! /savemap');
    res.status(200).send(res.locals.saveMap);
});
app.get('/db', generalController.getData, (req, res) => {
    console.log('HIT! /db');
    res.status(200).send(res.locals.getData);
});
app.post('/db', upload.single('image'), generalController.saveData, (req, res) => {
    console.log('HIT! /db');
    res.status(200).json({ message: 'File received successfully' });
});
app.use('/', (_req, res) => {
    res.status(404).send('Error page not found!');
});
app.use((err, _req, res, _next) => {
    const defaultErr = {
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
app.listen(PORT, () => console.log(`Server listening on Port: ${PORT}`));
