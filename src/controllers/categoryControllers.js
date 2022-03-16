const { Categoria } = require('../db.js');


async function getCategories() {
  // retorna todos las categorias activas
  const categories = await Categoria.findAll({
    where: { activo: true },
    attributes: { exclude: ['activo'] }
  });

  return categories;

}


async function getCategory(identifier) {
  // retorna una categoria en particular
  identifier = Number(identifier) || identifier;

  const categories = await getCategories();
  const category = categories.find(c => c.id === identifier || c.nombre === identifier);

  return category;

}


async function createCategory(data) {
  // crear un categoria
  let { nombre, foto } = data;

  const newCategory = await Categoria.create({ nombre, foto });

  if (!newCategory) return;

  return newCategory.dataValues;

}


async function updateCategory(categoryId, data) {
  // actualizar datos de un categoria
  // se asume que los datos ya han sido validados
  const category = await getCategory(categoryId);

  if (!category) {
    return { error: `Categoria con id:${categoryId} no existe.` };
  }

  const updated = await category.update(data);

  if (!updated) {
    return { error: `No se pudo actualizar la categoria id:${categoryId}.` };
  }

  return updated.dataValues;

}


async function deleteCategory(categoryId) {
  // borrar (desactivar) un categoria de la base de datos
  const category = await getCategory(categoryId);

  if (!category) {
    return { error: `Categoria con id:${categoryId} no existe.` };
  }

  const removed = await category.update({ activo: false }); // cambiar a inactivo

  if (!removed) {
    return { error: `No se pudo borrar la categoria id:${categoryId}.` };
  }

  return true;

}


function validateCategory(data) {
  // validar / formatear datos
  let { nombre, foto } = data;
  nombre = String(nombre).replace(/\W/g, '');
  const errors = Object.keys({ ...data, nombre }).map(key => (data[key] === null || data[key] === undefined) && key).filter(e => e);

  if (errors.length) {
    return { error: `Campo '${errors[0]}' no puede estar vacio.` };
  }

  if (!/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/.test(foto)) {
    return { error: 'Link de foto invalido' };
  }

  const out = { nombre, foto };

  return out;
}


module.exports = {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
  validateCategory
};