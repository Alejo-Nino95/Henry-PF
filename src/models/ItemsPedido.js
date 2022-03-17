const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('ItemsPedido', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        descripcion: {
            type: DataTypes.STRING,
        },
        precio: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        cantidad: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        }
    });
};
