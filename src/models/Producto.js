const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Producto', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        descripcion: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        precio: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        stock: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        fotos: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false
        },
        // no borrar datos de la DB, solo desactivarlos
        // Product.findAll({where: {activo: true}, attributes: {exclude:['activo']}})
        activo: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    });
};
