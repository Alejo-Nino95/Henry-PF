const { Usuario } = require('../db.js');
const bcrypt = require('bcrypt');

const salt = 10;

export async function getUsers() {
  // retorna todos los produtos activos
  const users = await Usuario.findAll({
    where: { activo: true },
    attributes: { exclude: ['activo', 'contraseña'] }
  });

  return users;

}


export async function getUser(identifier) {
  // retorna un usuario en particular
  // TODO: agregar mas formas de buscar usuarios(telefono)
  const validEmail = /^.+@.+\..+$/; // TODO: fix
  const email = validEmail.test(identifier) && identifier;
  const users = await getUsers();
  const user = users.find(u => email ? u.correo === email : u.name === identifier);

  return user;

}


export async function createUser(data) {
  // crear un usuario
  let { correo, nombre, apellido, celular, dirección, contraseña } = data;

  contraseña = await bcrypt.hash(contraseña, salt);
  const newUser = await Usuario.create({ correo, nombre, apellido, celular, dirección, contraseña });

  if (!newUser) return;

  return newUser.dataValues;

}


export async function updateUser(userId, data) {
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

  return updated.dataValues;

}


export async function deleteUser(userId) {
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


export function validateUser(data) {
  // validar / formatear datos
  let { correo, nombre, apellido, celular, dirección, contraseña } = data;
  nombre = String(nombre).replace(/\W/g, '');
  const errors = Object.keys({ ...data, nombre }).map(key => (data[key] === null || data[key] === undefined) && key).filter(e => e);
  activo = activo ?? Boolean(activo);

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

  if (presentacion.length > MAX_DESC_LENGTH) {
    return { error: `La presentacion debe contener ${MAX_DESC_LENGTH} caracteres tener como maximo.` };
  }

  if (comentario.length > MAX_DESC_LENGTH) {
    return { error: `El comentario debe contener ${MAX_DESC_LENGTH} caracteres tener como maximo.` };
  }

  if (contraseña.length < 5) {
    return { error: 'La contraseña debe contener almenos 5 caracteres.' };
  }

  if (!/\w{1,}\d{1,}/.test(contraseña)) {
    return { error: 'La contraseña debe contener almenos un digito.' };
  }

  const out = { correo, nombre, apellido, celular, dirección, contraseña };

  return out;
}