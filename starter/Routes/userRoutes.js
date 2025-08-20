const express = require('express')
const Router  = express.Router();
const userController = require('../Controllers/userController')
const app = express()
// 2) Route Handler


Router.route('/').
get(userController.getAllusers).
post(userController.createuser);
Router
  .route('/:id')
  .delete(userController.deleteuser)
  .patch(userController.updateuser)
  .get(userController.getuser);
  module.exports = Router;