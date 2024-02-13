const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection'); 
   // En Mayúsculas y singular      // en minúsculas y singular
const Genre = sequelize.define('genre', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
});
module.exports = Genre;