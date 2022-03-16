const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Categoria', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // foto de portada
    foto: {
      type: DataTypes.STRING,
      defaultValue: 'https://i.imgur.com/AxOZPkU.png'
    },
    // no borrar datos de la DB, solo desactivarlos
    // Categoria.findAll({where: {activo: true}, attributes: {exclude:['activo']}})
    activo: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  });
};
