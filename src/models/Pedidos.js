const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Pedidos', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        direccion_despacho: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        f_pedido: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        f_entrega: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        correo: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
};
