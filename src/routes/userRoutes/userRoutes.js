// rutas que traten con usuarios (login, registro, etc)
const { 
  getUsers,
  getUser, 
  updateUser,
  createUser,
  deleteUser,
  validateUser } = require('../../controllers/userControllers.js');
const router = require('express').Router();;


router.post('/create', async (req, res) => {

  const { correo, nombre, apellido, celular, direccion, contraseña } = req.body;

  const foundUser = await getUser(correo);

  if (foundUser) {
    return res.status(400).send({ error: `Usuario con el correo ${correo} ya existe.` });
  }

  const parsed = validateUser({ correo, nombre, apellido, celular, direccion, contraseña });

  if (parsed.error) {
    return res.status(400).send(parsed);
  }

  const newUser = await createUser(parsed);

  if (!newUser) {
    return res.status(500).send({ error: 'No se pudo crear el usuario.' });
  }

  res.status(200).send({ mensaje: 'Usuario ha sido creado.' });

});


router.get('/get/:userId', async (req, res) => {

  const { userId } = req.params;

  const foundUser = await getUser(userId);

  if (!foundUser) {
    return res.status(404).send({ error: `Usuario con el id ${userId} no existe.` });
  }

  res.status(200).send(foundUser);

});


router.get('/all', async (req, res) => {

  const users = await getUsers().catch(e => {
    console.log(e);
  });

  if (!users) {
    return res.status(500).send({ error: 'Hubo problemas realizando esta operacion.' });
  }

  res.status(200).send(users);

});

// nepundir: TODO: fix - si no manda todos los datos, el controlador bota errores
// debe poder actualizar solo los datos que se le manden por body
router.put('/update/:userId', async (req, res) => {

  const { userId } = req.params;
  const { correo, nombre, apellido, celular, direccion, contraseña } = req.body;

  const foundUser = await getUser(userId);

  if (!foundUser) {
    return res.status(404).send({ error: `Usuario con el id ${userId} no existe.` });
  }

  const parsed = validateUser({ correo, nombre, apellido, celular, direccion, contraseña });

  if (parsed.error) {
    return res.status(400).send(parsed);
  }

  const updated = await updateUser(userId, parsed);

  if (!updated) {
    return res.status(400).send({ error: 'No se pudo actualizar los datos del usuario' });
  }

  res.status(200).send({ mensaje: 'Usuario actualizado' });

});


router.delete('/delete/:userId', async (req, res) => {

  const { userId } = req.params;
  const foundUser = await getUser(userId);

  if (!foundUser) {
    return res.status(400).send({ error: `Usuario con el id ${userId} no existe.` });
  }

  const removed = await deleteUser(userId);

  if (removed.error) {
    return res.status(500).send(removed);
  }

  res.status(200).send({ mensaje: 'Usuario eliminado.' });

});

module.exports = router;