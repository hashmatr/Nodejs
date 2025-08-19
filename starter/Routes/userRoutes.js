const express = require('express')
const Router  = express.Router();
const app = express()
// 2) Route Handler
const getAllusers = ((req,res)=>{
  res.status(500).json({
    status:'error',
    message:'Function not found'
  })
})
const getuser = ((req,res)=>{
  res.status(500).json({
    status:'error',
    message:'Function not found'
  })
})
const createuser = ((req,res)=>{
  res.status(500).json({
    status:'error',
    message:'Function not found'
  })
})
const deleteuser = ((req,res)=>{
  res.status(500).json({
    status:'error',
    message:'Function not found'
  })
})
const updateuser = ((req,res)=>{
  res.status(500).json({
    status:'error',
    message:'Function not found'
  })
})

Router.route('/').get(getAllusers).post(createuser);
Router
  .route('/:id')
  .delete(deleteuser)
  .patch(updateuser)
  .get(getuser);
  module.exports = Router;