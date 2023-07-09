'use strict';

module.exports = (req, res, next) => {
    console.log(`Welcome: this is where you belong ${req.path}, ${new Date()}`);
    next();
};