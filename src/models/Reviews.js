const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Reviews', {
        reseña: {
            type: DataTypes.STRING,
        },
        evaluacion: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });
};