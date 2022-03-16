const router = require('express').Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const userRoutes = require('./userRoutes/userRoutes.js');
const productRoutes = require('./productRoutes/productRoutes.js');
const categoryRoutes = require('./categoryRoutes/categoryRoutes.js');


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/user', userRoutes);
router.use('/product', productRoutes);
router.use('/category', categoryRoutes);


module.exports = router;
