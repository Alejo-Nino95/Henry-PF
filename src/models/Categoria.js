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
    // no borrar datos de la DB, solo desactivarlos
    // Categoria.findAll({where: {activo: true}, attributes: {exclude:['activo']}})
    activo: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  });
};
