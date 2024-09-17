import express from 'express';
const app = express();
const PORT = 8080;
app.use('/', (req, res) => {
    console.log(req, res);
    console.log('HIT!');
});
app.listen(PORT, () => `Server listening on http://localhost:${PORT}`);
