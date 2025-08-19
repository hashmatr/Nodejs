const express = require('express');
const fs = require('fs');
const Router  = express.Router();
const app = express()
const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
  );
  const getAlltours = (req, res) => {
    res.status(200).json({
      status: 'success',
      result: tours.length,
      data: {
        tours,
      },
    })
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

  Router.route('/').get(getAlltours).post(createTour);
Router
  .route('/:id')
  .delete(deleteTour)
  .patch(updateTour)
  .get(getTour);
  module.exports = Router;