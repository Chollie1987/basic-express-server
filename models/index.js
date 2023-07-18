'use strict';
 const { Sequelize, DataTypes } = require('sequelize');
 const movie = require('./movie.model.js');
 const director = require('./director.model.js');
 const Collection = require('./collection.js');
// const sequelize = require('sequelize');

const POSTGRES_URI = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URI;

let sqConnectObj = new Sequelize(POSTGRES_URI);

const directorModel = director(sqConnectObj, DataTypes);
const movieModel = movie(sqConnectObj, DataTypes);

directorModel.hasMany(movieModel, {
    foreignKey: 'directorId',
    sourceKey: 'id',
});

movieModel.belongsTo(directorModel, {
    foreignKey: 'directorId',
    targetKey: 'id',
});

const directorCollection = new Collection(directorModel);
const movieCollection = new Collection(movieModel);

module.exports={ dbConnection: sqConnectObj, 
    directorCollection,
    movieCollection,
};
