const { 
    getReviews,
    getReviewsByProduct,
    getReview, 
    createReview,
    validateReview } = require('../../controllers/reviewsControllers');
  const router = require('express').Router();

  router.post('/create', async (req, res) => {
  
    const { resena, evaluacion } = req.body;
  
    const parsed = validateReview(resena, evaluacion);
  
    if (parsed.error) {
      return res.status(400).send(parsed);
    }
  
    const newResena = await createReview(parsed);
  
    res.status(200).send(newResena);
  
  });

  router.get('/all', async (req, res) => {
  
    const reviews = await getReviews();
  
    res.status(200).send(reviews);
  
  });

  router.get('/get/:productId', async (req, res) => {
  
    const { productId } = req.params;
  
    const reviews = await getReviewsByProduct(productId);
  
    if (!reviews) {
      return res.status(404).send({ error: `No existen reseñas para el porducto con id:${productId}` });
    }
  
    res.status(200).send(reviews);
  
  });

  router.get('/get/:reviewId', async (req, res) => {
  
    const { reviewId } = req.params;
  
    const foundReview = await getReview(reviewId);
  
    if (!foundReview) {
      return res.status(404).send({ error: `Review con id:${productId} no existe.` });
    }
  
    res.status(200).send(foundReview);
  
  });