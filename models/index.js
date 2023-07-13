'use strict';
 const { Sequelize, DataTypes } = require('sequelize');
 const movie = require('./movie.model.js');
// const sequelize = require('sequelize');

const POSTGRES_URI = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URI;

let sqConnectObj = new Sequelize(POSTGRES_URI);

module.exports={ dbConnection: sqConnectObj, Movie: movie(sqConnectObj, DataTypes),
};
