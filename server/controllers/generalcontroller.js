const generalController = {
    getMap: (req, res, next) => {
        console.log('getMap: ', req);
        return next();
    },
    saveMap: (req, res, next) => {
        console.log('saveMap: ', req);
        return next();
    },
    getData: (req, res, next) => {
        console.log('getData: ', req);
        return next();
    },
    saveData: (req, res, next) => {
        console.log('saveData: ', req);
        return next();
    },
};
export default generalController;
