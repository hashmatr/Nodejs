const fs = require('fs');
exports.checkID = (req,res,next,val)=>{
    if (req.params.id > tours.length) {
      return res.status(404).json({
        status: 'failure',
        message: 'Tour Not Found',
      });
    }
    next();
}
exports.checkdata = (req,res,next)=>{
    if(!req.body.name || !req.body.price){
       return res.status(404).json({
            status: 'failed',
            message:'name or the price not found'
        })
    }
    next();
}
const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
  );
  exports.getAlltours = (req, res) => {
    res.status(200).json({
      status: 'success',
      result: tours.length,
      data: {
        tours,
      },
    })
  };
  exports.getTour = (req, res) => {
    const id = req.params.id * 1;
    exports.tour = tours.find((el) => el.id === id);
    res.status(200).json({
      status: 'success',
      data: {
        tours,
      },
    });
  };
  exports.updateTour = (req, res) => {
    const id = req.params.id * 1;
    res.status(200).json({
      status: 'success',
      data: {
        tour: '<Updated Your Code here...>',
      },
    });
  };
  exports.deleteTour = (req, res) => {
    const id = req.params.id * 1;
    res.status(204).json({
      status: 'success',
      data: {
        tour: null,
      },
    });
  };
  exports.createTour = (req, res) => {
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