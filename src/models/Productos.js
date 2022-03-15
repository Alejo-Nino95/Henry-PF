const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('productos', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,

    },
    name: {
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
    foto1: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    foto2: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    foto3: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    foto4: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    });
};
