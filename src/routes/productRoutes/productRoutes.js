// rutas que traten con categorias (traer todas, buscar, etc)
const { 
  getProducts,
  getProduct, 
  updateProduct,
  createProduct,
  deleteProduct,
  validateProduct } = require('../../controllers/productControllers.js');
const router = require('express').Router();;


// router.get('/endpoint', async(req,res)=>{

//   // logica

// })


module.exports = router;