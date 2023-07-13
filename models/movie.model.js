'use strict';

const Movie = (dbConnection, DataTypes) => 
    dbConnection.define('Movie', {
        title: {
          type: DataTypes.STRING,
          allowNull: false
        },
        description: {
            type: DataTypes.STRING,
        },
    });

module.exports = Movie;