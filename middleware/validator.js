'use strict';

const handler500 = require('../errorHandlers/500');

const validator = function(req, res, next) {
    (!req.query.name) ? handler500() : 
    next();
};

module.exports = validator;