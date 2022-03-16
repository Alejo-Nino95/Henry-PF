// rutas que traten con categorias (traer todas, buscar, etc)
const { 
  getCategories,
  getCategory, 
  updateCategory,
  createCategory,
  deleteCategory,
  validateCategory } = require('../../controllers/categoryControllers.js');
const router = require('express').Router();;


router.post('/create', async (req, res) => {
  res.status(200).send({ message: "ruta para crear categoria" });
});


router.get('/all', async (req, res) => {
  res.status(200).send({ message: "ruta para traer todos las categorias" });
});


router.get('/get/:categoria', async (req, res) => {
  res.status(200).send({ message: "ruta para traer 1 categoria por ID" });
});


router.put('/update/:categoria', async (req, res) => {
  res.status(200).send({ message: "ruta para actualizar categoria" });
});


router.delete('/delete/:categoria', async (req, res) => {
  res.status(200).send({ message: "ruta para borrar categoria" });
});


module.exports = router;