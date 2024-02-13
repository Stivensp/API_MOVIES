const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection'); 
   // En Mayúsculas y singular      // en minúsculas y singular
const Movie = sequelize.define('movie', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    image: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    synopsis: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    releaseYear: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
});
module.exports = Movie;