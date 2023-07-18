'use strict';
// maybe add a director model so you can make a connection to different movies//
const Movie = (dbConnection, DataTypes) => 
    dbConnection.define('Movie', {
        title: {
          type: DataTypes.STRING,
          allowNull: false
        },
        description: {
            type: DataTypes.STRING,
        },
        directorId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });

module.exports = Movie;