const { Usuario } = require('../db.js');
const bcrypt = require('bcrypt');

const salt = 10;
const MAX_NAME_LENGTH = 20;

async function getUsers(include_password = false) {
  // retorna todos los produtos activos
  const exclude = ['activo'];

  if (!include_password) exclude.push('contraseña');

  const users = await Usuario.findAll({
    where: { activo: true },
    attributes: { exclude }
  });

  return users;

}


async function getUser(identifier, include_password = false) {
  // retorna un usuario en particular
  // TODO: agregar mas formas de buscar usuarios(telefono)
  const validEmail = /^.+@.+\..+$/; // TODO: fix
  const email = validEmail.test(identifier) && identifier;
  const users = await getUsers(include_password);
  const user = users.find(u => email ? u.correo === email : u.nombre === identifier);

  return user;

}


async function createUser(data) {
  // crear un usuario
  let { correo, nombre, apellido, celular, direccion, contraseña } = data;

  contraseña = await bcrypt.hash(contraseña, salt);
  const newUser = await Usuario.create({ correo, nombre, apellido, celular, direccion, contraseña });

  if (!newUser) return;

  return { ...newUser.dataValues, contraseña: undefined, activo: undefined };

}


async function updateUser(userId, data) {
  // actualizar datos de un usuario
  // se asume que los datos ya han sido validados
  const user = await getUser(userId);

  if (!user) {
    return { error: `Usuario con id:${userId} no existe.` };
  }

  const updated = await user.update(data);

  if (!updated) {
    return { error: `No se pudo actualizar el usuario id:${userId}.` };
  }

  return { ...updated.dataValues, contraseña: undefined, activo: undefined };

}


async function deleteUser(userId) {
  // borrar (desactivar) un usuario de la base de datos
  const user = await getUser(userId);

  if (!user) {
    return { error: `Usuario con id:${userId} no existe.` };
  }

  const removed = await user.update({ activo: false }); // cambiar a inactivo

  if (!removed) {
    return { error: `No se pudo borrar el usuario id:${userId}.` };
  }

  return true;

}


function validateUser(data) {
  // validar / formatear datos
  let { correo, nombre, apellido, celular, direccion, contraseña, activo } = data;
  nombre = String(nombre).replace(/\W/g, '');
  const errors = Object.keys({ ...data, nombre }).map(key => (data[key] === null || data[key] === undefined) && key).filter(e => e);

  if (errors.length) {
    return { error: `Campo '${errors[0]}' no puede estar vacio.` };
  }

  if (!/^.+@.+\..+$/.test(correo)) {
    return { error: `Correo invalido.` };
  }

  if (!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(celular)) {
    return { error: 'Numero de celular invalido.' };
  }

  if (nombre.length > MAX_NAME_LENGTH) {
    return { error: `El nombre debe contener ${MAX_NAME_LENGTH} caracteres tener como maximo.` };
  }

  if (apellido.length > MAX_NAME_LENGTH) {
    return { error: `El apellido debe contener ${MAX_NAME_LENGTH} caracteres tener como maximo.` };
  }

  if (contraseña.length < 5) {
    return { error: 'La contraseña debe contener almenos 5 caracteres.' };
  }

  if (!/\w{1,}\d{1,}/.test(contraseña)) {
    return { error: 'La contraseña debe contener almenos un digito.' };
  }

  const out = { correo, nombre, apellido, celular, direccion, contraseña };

  return out;
}


module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  validateUser
};