const { Pedidos, Usuario, ItemsPedido, Reviews, Producto } = require('../db.js');

async function getPedidos() {
  // retorna todos los pedidos
  const pedidos = await Pedidos.findAll({
    include: [
        // {model: Usuarios, attributes: ["nombre","apellido","direccion"]},
        {model: ItemsPedido, attributes: ["descripcion","precio","cantidad"]}
    ]
  });
  return pedidos;
}


async function getPedido(identifier) {
  // retorna un pedido en particular
  const pedido = await Pedidos.findByPk(identifier, {
    include: [
      {model: Usuarios, attributes: ["nombre","apellido","direccion"]},
      {model: ItemsPedido, attributes: ["descripcion","precio","cantidad"]}
    ]
  });
  return pedido; // retornar la instancia del modelo
}


async function createPedido(data) {
  // crear un pedido
  // se asume que los datos ya han sido validados

  const newPedido = await Pedidos.create(data, {include: [ItemsPedido, Usuario]})
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

  const deleted = await Pedidos.destroy({ 
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
          correo,
  } = data;
  
  direccion_despacho = String(direccion_despacho).replace(/\W/g, '');
  const values = { direccion_despacho, status, f_pedido, f_entrega, correo};
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