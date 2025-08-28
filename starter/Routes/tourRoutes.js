const tourController  = require('../Controllers/tourController')
const express = require('express');
const Router  = express.Router();
const app = express()

Router.
route('/top-5-cheap').
get(tourController.aliasTopTours,tourController.getAlltours)
Router.route('/').
get(tourController.getAlltours).
post(tourController.createTour);
Router
  .route('/:id')
  .delete(tourController.deleteTour)
  .patch(tourController.updateTour)
  .get(tourController.getTour);
module.exports = Router;