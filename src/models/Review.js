const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Review', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        comentario: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        evaluacion: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });
};