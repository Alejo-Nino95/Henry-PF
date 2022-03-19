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
  
  const { categoria, nombre, precio, descripcion, stock, fotos } = req.body;

  const foundProduct = await getProduct(nombre);

  if (foundProduct) {
    return res.status(400).send({ error: `Producto con nombre ${nombre} ya existe.` });
  }

  const parsed = validateProduct(nombre, precio, descripcion, stock, fotos);

  if (parsed.error) {
    return res.status(400).send(parsed);
  }

  const newProduct = await createProduct({ ...parsed, categoria });

  if (!newProduct) {
    return res.status(500).send({ error: 'No se pudo crear el producto.' });
  }

  res.status(200).send({ ...newProduct.dataValues, activo: undefined });

});


router.get('/all', async (req, res) => {
  
  const products = await getProducts();

  res.status(200).send(products);

});


router.get('/get/:productId', async (req, res) => {
  
  const { productId } = req.params;

  const foundProduct = await getProduct(productId);

  if (!foundProduct) {
    return res.status(404).send({ error: `Producto con id:${productId} no existe.` });
  }

  res.status(200).send(foundProduct);

});


router.put('/update/:productId', async (req, res) => {
  
  const { nombre, precio, presentacion, stock, fotos } = req.body;
  const { productId } = req.params;

  const foundProduct = await getProduct(productId);

  if (!foundProduct) {
    return res.status(404).send({ error: `Producto con id:${productId} no existe.` });
  }

  const parsed = validateProduct({ nombre, precio, presentacion, stock, fotos });

  if (parsed.error) {
    return res.status(400).send(parsed);
  }

  const updated = await updateProduct(parsed);

  if (updated.error) {
    return res.status(500).send(updated);
  }

  res.status(200).send({ mensaje: 'Producto actualizado.' });

});


router.delete('/delete/:productId', async (req, res) => {
  
  const { productId } = req.params;

  const foundProduct = await getProduct(productId);

  if (!foundProduct) {
    return res.status(404).send({ error: `Producto con id:${productId} no existe` });
  }

  const removed = await deleteProduct(productId);

  if (removed.error) {
    return res.status(500).send(removed);
  }

  res.status(200).send({ mensaje: 'Producto removido.' });

});

module.exports = router;