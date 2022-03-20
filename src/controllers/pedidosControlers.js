const { Pedido, Usuario, ItemsPedido, Reviews, Producto } = require('../db.js');

async function getPedidos() {    // Devuelve todos los pedidos realizados de la BD con sus Items.
  // retorna todos los pedidos
  const pedidos = await Pedido.findAll({
    include: [
        {model: Usuario, attributes: ["correo", "nombre","apellido","direccion"]},
        {model: ItemsPedido, attributes: ["id", "nombre", "presentacion", "precio", "cantidad"]}
    ]
  });
  return pedidos;
}


async function getPedido(identifier) {
  // retorna un pedido en particular
  const validUID = (/^[0-9a-fA-F]{8}\b-([0-9a-fA-F]{4}-){3}\b[0-9a-fA-F]{12}$/).test(identifier);
  const validUcorreo = (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i).test(identifier);
  try {
    if (validUID) {
      const pedido = await Pedido.findByPk(identifier, {
        include: [
          {model: Usuario, attributes: ["correo", "nombre","apellido","direccion"]},
          {model: ItemsPedido, attributes: ["id", "nombre", "presentacion", "precio", "cantidad"]}
      ]
      });
      return pedido; // retornar la instancia del modelo        
    }  

    if (validUcorreo) {
      const pedido = await Pedido.findAll({
        where: {UsuarioCorreo: identifier},
        include: [
          {model: Usuario, attributes: ["correo", "nombre","apellido","direccion"]},
          {model: ItemsPedido, attributes: ["id", "nombre", "presentacion", "precio", "cantidad"]}
      ]
      });
      return pedido; // retornar la instancia del modelo        
    } 
    return
  } catch (error) {
    return {"error": error}
  }
}


async function createPedido(data) {
  // crear un pedido
  // se asume que los datos ya han sido validados

  const newPedido = await Pedido.create(data, {include: [ItemsPedido, Usuario]})
  if (!newPedido) return
  return newPedido
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

  const deleted = await Pedido.destroy({ 
    where: {id: pedidoId},
    include: ItemsPedido
  }); // cambiar a inactivo

  if (!deleted) {
    return { error: `No se pudo borrar el pedido id:${pedidoId}.` };
  }

  return true;

}


function validateItemsPedido(items) {
  return items
}

function validatePedido(data) {
  // validar / formatear datos
  if (!data) return {error: 'No hay datos del pedido. Por favor verifique'}
  let {direccion_despacho,
          status,
          f_pedido,
          f_entrega,
          ItemsPedidos,
          UsuarioCorreo,
  } = data;
  
  direccion_despacho = String(direccion_despacho).replace(/\W/g, '');
  const values = { direccion_despacho, status, f_pedido, f_entrega, UsuarioCorreo};
  const errors = Object.keys(values).map(key => (values[key] === null || values[key] === undefined) && key).filter(e => e);
  let texto = '';
  if (errors.length) {
    errors.forEach(e => texto = ', ' + e + texto) 
    texto = (errors.length > 1 ? 'Los campos ': 'El campo ') + texto.slice(2) + '. no ' + (errors.length > 1 ? 'pueden estar vacios': 'puede estar vacio.');
  }
  if (ItemsPedidos === undefined || ItemsPedidos.length == 0 ) {
     texto += '\nEl pedido no posee Items, Debe incluir por lo menos un Producto'
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

  if (texto !== '') return {error: 'Error(es): \n' + texto}
  
  const out = data //{ direccion_despacho, status, f_pedido, f_entrega };

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