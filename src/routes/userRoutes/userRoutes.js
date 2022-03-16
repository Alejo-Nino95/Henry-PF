// rutas que traten con usuarios (login, registro, etc)
const { 
  getUsers,
  getUser, 
  updateUser,
  createUser,
  deleteUser,
  validateUser } = require('../../controllers/userControllers.js');
const router = require('express').Router();;


// router.get('/endpoint', async(req,res)=>{

//   // logica

// })


module.exports = router;