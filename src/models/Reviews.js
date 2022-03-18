const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Reviews', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            // autoIncrement: true,
        },
        resena: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        evaluacion: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });
};