'use strict';

function handler500(err, req, res, next) {
    const error = err.message ? err.message : err;

    const errorObj = {
        status: 500,
        message: 'Need valid entry',
    };
    res.status(500).json(errorObj);
}

module.exports = handler500;