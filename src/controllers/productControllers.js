const { Producto, Categoria, Review } = require('../db.js');
const { getCategory } = require('./categoryControllers.js');

const MAX_DESC_LENGTH = 100;
const MAX_NAME_LENGTH = 20;


async function getProducts(onlyValues = false) {
  // retorna todos los produtos activos
  const products = await Producto.findAll({
    where: { activo: true },
    attributes: { exclude: ['activo'] },
    include: [
      {
        model: Categoria,
        attributes: ['id', 'nombre']
      },
      {
        model: Review,
        attributes: ['id', 'comentario', 'evaluacion']
      }
    ]
  });

  if (onlyValues) {
    const parsed = products.map(product => ({
      ...product.dataValues,
      rating: Number((product.dataValues.Reviews.map(e => e.evaluacion).reduce((a, b) => a + b, 0) / product.dataValues.Reviews.length).toFixed(1)) || 0
    }));
    return parsed;
  }

  return products;
}


async function getProduct(identifier, onlyValues = false) {
  // retorna un producto en particular
  const validUID = /^[0-9a-fA-F]{8}\b-([0-9a-fA-F]{4}-){3}\b[0-9a-fA-F]{12}$/;
  const uid = validUID.test(identifier) && identifier;

  const products = await getProducts(onlyValues);
  // si el identificador es un UID valido, buscar por UID
  const product = products.find(prod => uid ? prod.id === uid : prod.nombre === identifier);

  return product; // retornar la instancia del modelo
}


async function createProduct(data) {
  // crear un producto
  // se asume que los datos ya han sido validados
  const { categoria, nombre, precio, descripcion, stock, fotos, presentacion } = data;
  const newProduct = await Producto.create({ nombre, precio, descripcion, stock, fotos, presentacion });
  const category = await getCategory(categoria);

  if (!category) {
    return { error: `Categoria con id ${categoria} no existe.` };
  }

  await newProduct.addCategoria(category);

  return newProduct; // retornar una instancia del modelo

}


async function updateProduct(productId, data) {
  // actualizar datos de un producto
  const product = await getProduct(productId);

  if (!product) {
    return { error: `Producto con id:${productId} no existe.` };
  }

  const updated = await product.update(data);

  if (!updated) {
    return { error: `No se pudo actualizar el producto id:${productId}.` };
  }

  return updated.dataValues;

}


async function deleteProduct(productId) {
  // borrar (desactivar) un producto de la base de datos
  const product = await getProduct(productId);

  if (!product) {
    return { error: `Producto con id:${productId} no existe.` };
  }

  const deleted = await product.update({ activo: false }); // cambiar a inactivo

  if (!deleted) {
    return { error: `No se pudo borrar el producto id:${productId}.` };
  }

  return true;

}
        

function validateProduct(nombre, precio, descripcion, stock, fotos) {
  // validar / formatear datos
  const values = { nombre, precio, descripcion, stock, fotos };
  const errors = Object.keys(values).map(key => (values[key] === null || values[key] === undefined) && key).filter(e => e);
  nombre = String(nombre).replace(/\s+/g, ' ');
  descripcion = String(descripcion).replace(/\s+/g, ' ');
  precio = Number(precio);
  stock = Number(stock);
  if (errors.length) {
    return { error: `Campo '${errors[0]}' no puede estar vacio.` };
  }

  if (precio < 0 || !precio) {
    return { error: `Precio invalido.` };
  }

  if (stock < 0 || !stock) {
    return { error: `Stock invalido.` };
  }

  if (nombre.length > MAX_NAME_LENGTH) {
    return { error: `El nombre debe contener ${MAX_NAME_LENGTH} caracteres tener como maximo.` };
  }

  if (descripcion.length > MAX_DESC_LENGTH) {
    return { error: `La descripcion debe contener ${MAX_DESC_LENGTH} caracteres tener como maximo.` };
  }

  const out = { nombre, precio, descripcion, stock, fotos };

  return out;
}


module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  validateProduct
};