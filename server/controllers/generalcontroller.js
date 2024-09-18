import db from '../models/usermodel';
const generalController = {
    getMap: (req, res, next) => {
        console.log('getMap: ', req);
        return next();
    },
    saveMap: (req, res, next) => {
        console.log('saveMap: ', req);
        return next();
    },
    getData: async (req, res, next) => {
        const query = `SELECT * FROM users_states`;
        await db.query(query).then((data) => {
            res.locals.getData = data;
        });
        return next();
    },
    saveData: (req, res, next) => {
        console.log('saveData: ', req);
        return next();
    },
};
export default generalController;
