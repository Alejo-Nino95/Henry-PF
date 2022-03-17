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

  res.status(200).send({ message: "ruta para crear pedidos" });
});

router.get('/all', async (req, res) => {
  
  res.status(200).send({ message: "ruta para traer todos los  pedidos" });
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