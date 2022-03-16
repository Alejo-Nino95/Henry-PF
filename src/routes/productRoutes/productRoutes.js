// rutas que traten con categorias (traer todas, buscar, etc)
const { 
  getProducts,
  getProduct, 
  updateProduct,
  createProduct,
  deleteProduct,
  validateProduct } = require('../../controllers/productControllers.js');
const router = require('express').Router();;


router.post('/create', async (req, res) => {
  res.status(200).send({ message: "ruta para crear producto" });
});


router.get('/all', async (req, res) => {
  res.status(200).send({ message: "ruta para traer todos los  productos" });
});


router.get('/get/:productId', async (req, res) => {
  res.status(200).send({ message: "ruta para traer 1 producto por ID" });
});


router.put('/update/:productId', async (req, res) => {
  res.status(200).send({ message: "ruta para actualizar producto" });
});


router.delete('/delete/:productId', async (req, res) => {
  res.status(200).send({ message: "ruta para borrar producto" });
});

module.exports = router;