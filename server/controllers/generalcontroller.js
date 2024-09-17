const generalController = {
    getMap: (req, res, next) => {
        console.log(req);
        return next();
    },
    saveMap: (req, res, next) => {
        console.log(req);
        return next();
    },
};
export default generalController;
