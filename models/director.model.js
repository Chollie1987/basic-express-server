'use strict';

const director = (dbConnection, DataTypes) => 
dbConnection.define('director', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
    },

});

module.exports = director;