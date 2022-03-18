// rutas que traten con categorias (traer todas, buscar, etc)
const { 
  getPedidos,
  getPedido,
  createPedido,
  updatePedido,
  deletePedido,
  validatePedido 
} = require('../../controllers/pedidosControlers');
  
const router = require('express').Router();


router.post('/create', async (req, res) => {
  
  const datachecked = validatePedido(req.body);
  if (datachecked.error) return res.status(500).send(datachecked)
  const newPedido = await createPedido(req.body)
  if (!newPedido) return res.status(500).send('Ocurrio un error al intentar crear el pedido. Pedido no generado')
  res.status(200).send(req.body);
});

router.get('/all', async (req, res, next) => {
  
  const pedidos = await getPedidos().catch(e => {
    next(e);
  });

  if (!pedidos) {
    return res.status(500).send({ error: 'No existen pedidos que mostrar.' });
  }

  res.status(200).send(pedidos);
  // res.status(200).send({ message: "ruta para traer todos los  pedidos" });
});


router.get('/get/:pedidosId', async (req, res) => {
  res.status(200).send({ message: "ruta para traer 1 pedidos por ID" });
});


router.put('/update/:pedidosId', async (req, res) => {
  res.status(200).send({ message: "ruta para actualizar pedidos" });
});


router.delete('/delete/:pedidosId', async (req, res) => {
  res.status(200).send({ message: "ruta para borrar pedidos" });
});

module.exports = router;