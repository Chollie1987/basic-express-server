'use strict';

function handler404(err, req, res, next) {
    const errorObj = {
        status: 404,
        message: 'Sorry, cannot find what you are searching for',
    };
    // console.log(err);
    res.status(404).json(errorObj);
}

module.exports = handler404;