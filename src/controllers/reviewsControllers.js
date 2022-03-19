const { Review, Producto } = require('../db.js');


async function getReviews() {
  // retorna todos las reseñas
  const reviews = await Review.findAll({
    include: { model: Producto, attributes: ["nombre", "tipo_corte", "presentacion"] },
  });

  return reviews;
}


async function getReviewsByProduct(identifier) {
  // retorna todos los Reseñas de un Producto por cada items de pedidos
  const reviews = await Review.findAll({
    where: {
      productoid: identifier
    },
    include: { model: Producto, attributes: ["nombre", "tipo_corte", "presentacion"] },
  });

  return reviews;
}


async function getReview(identifier) {
  // retorna una reseña en particular
  const review = await Review.findByPk(identifier, { include: { model: Producto, attributes: ["nombre", "tipo_corte", "presentacion"] } });
  return review; // retornar la instancia del modelo
}


async function createReview(data) {
  // crear una reseña
  const { evaluacion, comentario } = data;  
  const newReview = await Review.create({ evaluacion, comentario });
  if (!newReview) return;
  return newReview.dataValues; // no retornar una instancia del modelo
}


function validateReview(data) {
  // validar / formatear datos
  let { evaluacion, comentario } = data;

  if (!evaluacion.length) {
    return { error: 'Reseña no puede estar vacia.' };
  }

  const out = { evaluacion, comentario };

  return out;
}


module.exports = {
  getReviews,
  getReviewsByProduct,
  getReview,
  createReview,
  validateReview
};