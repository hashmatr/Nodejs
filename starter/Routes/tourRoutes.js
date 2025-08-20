const tourController  = require('../Controllers/tourController')
const express = require('express');
const Router  = express.Router();
const app = express()

Router.param('id',tourController.checkID)
Router.route('/').
get(tourController.getAlltours).
post(tourController.checkdata,tourController.createTour);
Router
  .route('/:id')
  .delete(tourController.deleteTour)
  .patch(tourController.updateTour)
  .get(tourController.getTour);
module.exports = Router;