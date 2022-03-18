require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/beefshop`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Producto, Usuario, Categoria, ItemsPedido, Reviews, Pedidos } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);
Producto.hasMany(Categoria);
Categoria.belongsToMany(Producto, { through: 'categorias' });

Producto.hasMany(Reviews);
Reviews.belongsTo(Producto); //, { through: 'reviews' });

Pedidos.hasMany(ItemsPedido);
ItemsPedido.belongsTo(Pedidos); //,{foreignKey: 'pedidosId'}); //, { through: 'Pedidos_items'})

Producto.hasMany(ItemsPedido)
ItemsPedido.belongsTo(Producto)

// Producto.hasOne(ItemsPedido);

Pedidos.belongsToMany(Usuario, { through: 'Pedidos_Usuarios'})
Usuario.belongsToMany(Pedidos, { through: 'Pedidos_Usuarios'})

// Producto.hasMany(ItemsPedido);
// ItemsPedido.belongsTo(Producto);

//Pedido.hasOne(Reviews); descomentar cuando sea creado el modelo pedidos
//Reviews.belongsTo(Pedido);

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
