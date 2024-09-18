import express from 'express';
import generalController from './controllers/generalcontroller.js';
// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
// export const supabase = createClient(supabaseUrl, supabaseAnonKey);
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = 8080;
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
app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));
