const { Reviews, Producto } = require('../db.js');

async function getReviews() {
  // retorna todos los Reseñas de un Producto por cada items de pedidos
  const reviews = await Reviews.findAll({
    include: {model: Producto, attributes: ["nombre","tipo_corte","presentacion"]},
  });

  return reviews;
}


async function getReview(identifier) {
  // retorna una reseña en particular
  const review = await Reviews.findByPk(identifier, {include: {model: Producto, attributes: ["nombre","tipo_corte","presentacion"]}});
  return review; // retornar la instancia del modelo
}

async function createReview(data) {
  // crear una reseña
  const { resena, evaluacion } = data;  
  const newResena = await Reviews.create({ resena, evaluacion });
  if (!newResena) return;
  return newResena.dataValues; // no retornar una instancia del modelo

}


module.exports = {
  getReviews,
  getReview,
  createReview
};