// rutas que traten con categorias (traer todas, buscar, etc)
const { 
  getPedidos,
  getPedido,
  createPedido,
  updatePedido,
  deletePedido,
  validatePedido 
} = require('../../controllers/pedidoControlers');
  
const router = require('express').Router();


router.post('/create', async (req, res, next) => {
  try {
    const datachecked = validatePedido(req.body);
    if (datachecked.error) return res.status(500).send(datachecked)
    const newPedido = await createPedido(req.body)
    if (!newPedido) return res.status(500).send('Ocurrio un error al intentar crear el pedido. Pedido no generado')
    res.status(200).send(req.body);      
  } catch (error) {
    next(error)
  }
});

router.get('/all', async (req, res, next) => {
  try {
    const pedidos = await getPedidos()
    if (!pedidos) {
      return res.status(500).send({ error: 'No existen pedidos que mostrar.' });
    }
    res.status(200).send(pedidos);      
  } catch (error) {
    next(error)
  }
});

// Ruta para buscar data de un pedido especifico por #ID. o Buscar los pedidos de un usuario por su correo 
router.get('/get/:pedidosId', async (req, res, next) => {
  try {
    const infoPedido = await getPedido(req.params.pedidosId)
    if (!infoPedido || infoPedido.error) res.status(500).send({ error: 'No exiten pedidos para ese Usuario y/o con ese # de ID'})
    res.send(infoPedido)      
  } catch (error) {
    next(error)
  }
});


router.put('/update/:pedidosId', async (req, res) => {
  res.status(200).send({ message: "ruta para actualizar pedidos" });
});


router.delete('/delete/:pedidosId', async (req, res) => {
  res.status(200).send({ message: "ruta para borrar pedidos" });
});

module.exports = router;