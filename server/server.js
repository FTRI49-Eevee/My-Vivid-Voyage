import express from 'express';
import generalController from './controllers/generalcontroller.js';
const app = express();
app.use(express.json());
const PORT = 8080;
app.use('/getmap', generalController.getMap, (req, res) => {
    console.log('HIT!');
    res.status(200).send(res.locals.getMap);
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
