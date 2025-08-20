const express = require('express');
const app = express();
const tourRouter = require('../starter/Routes/tourRoutes')
const userRouter = require('../starter/Routes/userRoutes')
app.use(express.static(`${__dirname}/public`))
app.use(express.json()); 
app.use('/api/v1/tours' ,tourRouter)
app.use('/api/v1/users',userRouter)

module.exports = app