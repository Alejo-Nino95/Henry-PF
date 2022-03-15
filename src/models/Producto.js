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
        precio: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        tipo_corte: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        presentacion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        comentario: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        stock: {
            type: DataTypes.DECIMAL,
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