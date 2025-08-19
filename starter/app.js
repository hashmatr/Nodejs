const express = require('express');
const morgan = require('morgan')
const app = express();
const tourRouter = require('../starter/Routes/tourRoutes')
const userRouter = require('../starter/Routes/userRoutes')
// 1)Middle wares

// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
// );
// app.get('/api/v1/tours',getAlltours)

// app.get('/api/v1/tours/:id',getTour)

// app.patch('/api/v1/tours/:id',updateTour)
// app.delete('/api/v1/tours/:id', deleteTour)
// app.post('/api/v1/tours',createTour)

// 3) Routes

app.use('/api/v1/tours' ,tourRouter)
app.use('/api/v1/users',userRouter)

const port = '3000';
app.listen(port, '127.0.0.1', () => {
  console.log(`listening on port ${port}`);
});
