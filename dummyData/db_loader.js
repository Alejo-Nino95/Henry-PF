const uc = require('../src/controllers/userControllers.js');
const pc = require('../src/controllers/productControllers.js');
const cc = require('../src/controllers/categoryControllers.js');
let { users, products, categories } = require('./data.js');


async function loadDB() {

  console.warn(`[STARTING]pre-populating database with ${users.length + products.length + categories.length} rows...`);
  console.warn(`[!] users...`);
  for (const user of users) {

    const created = await uc.createUser({ ...user, contraseña: user.correo }).catch(() => false);

    if (created) {
      console.log(created.correo);
    }
  }

  console.warn(`[!] categories...`);

  for (const category of categories) {

    const created = await cc.createCategory(category);

    if (created) {
      console.log(created.nombre);
    }
  }

  console.warn(`[!] products...`);

  for (const product of products) {

    const categories = await cc.getCategories();
    const created = await pc.createProduct({ ...product, categoria: categories[Math.floor(Math.random() * categories.length)].id });

    if (created) {
      console.log(created.id);
    }
  }

  console.warn(`[FINISHED]pre-populating database with ${users.length + products.length + categories.length} rows.`);

}

module.exports = loadDB;