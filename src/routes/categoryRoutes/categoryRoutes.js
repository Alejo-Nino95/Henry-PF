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
  
  const { nombre } = req.body;

  const found = await getCategory(nombre);

  if (found) {
    return res.status(400).send({ error: `Categoria con nombre '${nombre}'' ya existe` });
  }

  const parsed = validateCategory(nombre);

  if (parsed.error) {
    return res.status(400).send(parsed);
  }

  const newCategory = await createCategory(parsed);

  res.status(200).send(newCategory);

});


router.get('/all', async (req, res) => {
  
  const categories = await getCategories();

  return res.status(200).send(categories);

});


router.get('/get/:categoria', async (req, res) => {
  
  const { categoria } = req.params;

  const category = await getCategory(categoria);

  if (!category) {
    return res.status(404).send({ error: `Categoria con id ${categoria} no existe.` });
  }

  res.status(200).send(category);

});


router.put('/update/:categoria', async (req, res) => {
  
  const { categoria } = req.params;
  const { nombre } = req.body;

  const category = await getCategory(categoria);

  if (!category) {
    return res.status(404).send({ error: `Categoria con id ${categoria} no existe.` });
  }

  const parsed = validateCategory(nombre);

  if (parsed.error) {
    return res.status(400).send(parsed);
  }

  const updated = await updateCategory(parsed);

  if (updated.error) {
    return res.status(400).send(updated);
  }

  res.status(200).send(updated);

});


router.delete('/delete/:categoria', async (req, res) => {
  
  const { categoria } = req.params;

  const category = await getCategory(categoria);

  if (!category) {
    return res.status(404).send({ error: `Categoria con id ${categoria} no existe.` });
  }

  const removed = await deleteCategory(categoria);

  if (removed.error) {
    return res.status(500).send(removed);
  }

  res.status(200).send({ mensaje: 'Categoria eliminada.' });

});


module.exports = router;