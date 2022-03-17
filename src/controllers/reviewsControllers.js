const { Reviews, Producto } = require('../db.js');

async function getReviews() {
  // retorna todos los Reseñas de un Producto por cada items de pedidos
  const reviews = await Reviews.findAll({
    include: {model: Producto, attributes: ["nombre","tipo_corte","presentacion"]},
  });

  return reviews;
}


async function getReview(identifier) {
  // retorna una reseña en particular
  const review = await Reviews.findByPk(identifier, {include: {model: Producto, attributes: ["nombre","tipo_corte","presentacion"]}});
  return ; // retornar la instancia del modelo
}


async function createPedido(data) {
  // crear un pedido
  // se asume que los datos ya han sido validados
  const { direccion_despacho, status, f_pedido, f_entrega } = data;  
  const newPedido = await Pedidos.create({ direccion_despacho, status, f_pedido, f_entrega });
  if (!newPedido) return;
  return newPedido.dataValues; // no retornar una instancia del modelo

}


async function updatePedido(pedidoId, data) {
  // actualizar datos de un pedido
  const pedido = await getPedido(pedidoId);

  if (!pedido) {
    return { error: `Pedido con id:${pedidoId} no existe.` };
  }

  const updated = await pedido.update(data);

  if (!updated) {
    return { error: `No se pudo actualizar el pedido id:${pedidoId}.` };
  }

  return updated.dataValues;

}


async function deletePedido(pedidoId) {
  // borrar (desactivar) un pedido de la base de datos
  const pedido = await getPedido(pedidoId);

  if (!pedido) {
    return { error: `Pedido con id:${pedidoId} no existe.` };
  }

  const deleted = await Pedidos.destroy({ where: {id: pedidoId}}); // cambiar a inactivo

  if (!deleted) {
    return { error: `No se pudo borrar el pedido id:${pedidoId}.` };
  }

  return true;

}
        

function validatePedido(direccion_despacho, status, f_pedido, f_entrega) {
  // validar / formatear datos
  direccion_despacho = String(direccion_despacho).replace(/\W/g, '');
  const values = { direccion_despacho, status, f_pedido, f_entrega };
  const errors = Object.keys(values).map(key => (values[key] === null || values[key] === undefined) && key).filter(e => e);
  let texto = '';
  if (errors.length) {
    errors.forEach(e => texto = ', ' + e + texto) 
    texto = errors.length > 1 ? 'Los campos ': 'El campo ' + texto.slice(2) + 'no ' + errors.length > 1 ? 'pueden estar vacios': 'puede estar vacio.';
  }

  if (isNaN(Date.parse(f_pedido))) {
    texto+= '\nLa fecha de pedido no es una fecha vádida'
  }

  if (isNaN(Date.parse(f_entrega))) {
    texto+= '\nLa fecha de entrega no es una fecha vádida'
  }

  if (f_pedido > f_entrega) {
    texto+= '\nLa fecha y/o hora de entrega no puede ser menor que la fecha y/o hora del pedido'
  }

  if (texto !== '') return 'Error(es): \n' + texto
  
  const out = { direccion_despacho, status, f_pedido, f_entrega };

  return out;
}


module.exports = {
  getPedidos,
  getPedido,
  createPedido,
  updatePedido,
  deletePedido,
  validatePedido
};