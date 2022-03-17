const uc = require('../src/controllers/userControllers.js');
const pc = require('../src/controllers/productControllers.js');
let { users, products } = require('./data.js');


async function loadDB() {

  console.warn(`[STARTING]pre-populating database with ${users.length} users...`);

  for (const user of users) {

    const created = await uc.createUser({ ...user, contraseña: user.correo }).catch(() => false);

    if (created) {
      console.log(created.correo);
    }
  }

  console.warn(`[FINISHED]pre-populating database with ${users.length} users.\n\n`);

  console.warn(`\n\n[STARTING]pre-populating database with ${products.length} products...`);

  for (const product of products) {

    const created = await pc.createProduct(product);

    if (created) {
      console.log(created.id);
    }
  }

  console.warn(`[FINISHED]pre-populating database with ${products.length} products.`);

}

module.exports = loadDB;