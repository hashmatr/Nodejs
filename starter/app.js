const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());
const getAlltours = (req, res) => {
  res.status(200).json({
    status: 'success',
    result: tours.length,
    data: {
      tours,
    },
  });
};
const getTour = (req, res) => {
  const id = req.params.id * 1;
  if (id > tours.length) {
    return res.status(404).json({
      status: 'failure',
      message: 'Tour Not Found',
    });
  }
  const tour = tours.find((el) => el.id === id);
  res.status(200).json({
    status: 'success',
    data: {
      tour,
    },
  });
};
const updateTour = (req, res) => {
  const id = req.params.id * 1;
  if (id > tours.length) {
    return res.status(404).json({
      status: 'failure',
      message: 'Tour Not Found',
    });
  }
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated Your Code here...>',
    },
  });
};
const deleteTour = (req, res) => {
  const id = req.params.id * 1;
  if (id > tours.length) {
    return res.status(404).json({
      status: 'failure',
      message: 'Tour Not Found',
    });
  }
  res.status(204).json({
    status: 'success',
    data: {
      tour: null,
    },
  });
};
const createTour = (req, res) => {
  const newid = tours[tours.length - 1].id + 1;
  const newTour = Object.assign(
    {
      id: newid,
    },
    req.body
  );
  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      });
    }
  );
};
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);
// app.get('/api/v1/tours',getAlltours)

// app.get('/api/v1/tours/:id',getTour)

// app.patch('/api/v1/tours/:id',updateTour)
// app.delete('/api/v1/tours/:id', deleteTour)
// app.post('/api/v1/tours',createTour)

app.route('/api/v1/tours').get(getAlltours).post(createTour);
app
  .route('/api/v1/tours/:id')
  .delete(deleteTour)
  .patch(updateTour)
  .get(getTour);
const port = '3000';
app.listen(port, '127.0.0.1', () => {
  console.log(`listening on port ${port}`);
});
