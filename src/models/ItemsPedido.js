const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('ItemsPedido', {
        descripcion: {
            type: DataTypes.STRING,
        },
        precio: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        }
    });
};
