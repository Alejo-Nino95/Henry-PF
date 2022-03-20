const uc = require('../src/controllers/userControllers.js');
const pc = require('../src/controllers/productControllers.js');
const cc = require('../src/controllers/categoryControllers.js');
const rc = require('../src/controllers/reviewControllers');
let { users, products, categories, reviews } = require('./data.js');

const rows = users.length + products.length + categories.length + reviews.length;

async function loadDB() {

  console.warn(`[STARTING]pre-populating database with ${rows} rows...`);
  console.warn(`[!] users...`);
  for (const user of users) {

    const created = await uc.createUser({ ...user, contraseña: user.correo }).catch(() => false);

    if (created) {
      console.log(created.correo);
    }
  }

  const dbUsers = await uc.getUsers().then(res => res.map(e => e.dataValues));
  console.warn(`[!] categories...`);

  for (const category of categories) {

    const created = await cc.createCategory(category);

    if (created) {
      console.log(created.nombre);
    }
  }

  const dbCategories = await cc.getCategories().then(res => res.map(e => e.dataValues));
  console.warn(`[!] products...`);

  for (const product of products) {

    const created = await pc.createProduct({ ...product, categoria: dbCategories[Math.floor(Math.random() * dbCategories.length)].id });

    if (created) {
      console.log('product =>', created.id);
    }
  }

  const dbProducts = await pc.getProducts(true);
  console.warn(`[!] reviews...`);

  for (const review of reviews) {

    const created = await rc.createReview({
      ...review,
      userId: dbUsers[Math.floor(Math.random() * dbUsers.length)].correo,
      productId: dbProducts[Math.floor(Math.random() * dbProducts.length)].id
    });

    if (created) {
      console.log('review =>', created.id);
    }

  }

  console.warn(`[FINISHED]pre-populating database with ${rows} rows.`);

}

module.exports = loadDB;