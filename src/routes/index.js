const router = require('express').Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const userRoutes = require('./userRoutes/userRoutes.js');
const productRoutes = require('./productRoutes/productRoutes.js');
const categoryRoutes = require('./categoryRoutes/categoryRoutes.js');
const pedidosRoutes = require('./pedidosRoutes/pedidosRoutes.js')
const emailRoutes = require('./emailRoutes')

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/user', userRoutes);
router.use('/product', productRoutes);
router.use('/category', categoryRoutes);
router.use('/pedidos', pedidosRoutes);
router.use('/email',emailRoutes)


module.exports = router;
