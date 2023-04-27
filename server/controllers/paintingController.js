const Painting = require('../models/painting');

exports.getPaintings = (req, res, next) => {
    console.log("sending paintings ");
    Painting.find()
        .then(paintings => {
            console.log("se encontraron " + paintings);
            res.status(200)
                .json({
                    message: 'paintings fetched successfully',
                    paintings: paintings
                })
        })
        .catch(err => {
            console.log(err);
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
}

exports.addPainting = (req, res, next) => {
    console.log("add imgage");

}