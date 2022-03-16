// rutas que traten con categorias (traer todas, buscar, etc)
const { 
  getCategories,
  getCategory, 
  updateCategory,
  createCategory,
  deleteCategory,
  validateCategory } = require('../../controllers/categoryControllers.js');
const router = require('express').Router();;


// router.get('/endpoint', async(req,res)=>{

//   // logica

// })


module.exports = router;