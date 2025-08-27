const mongoose = require('mongoose');
const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
    unique: true,
  },
  duration: {
    type: Number,
    required: [true, 'A tour must have a duration'],
  },
  maxGroupSize: {
    type: Number,
    required: [true, 'A tour must have a group size'],
  },
  difficulty: {
    type: String,
    required: [true, 'A tour must have a difficulty'],
  },
  price: { type: Number, required: [true, 'A tour must have a Price'] },
  priceDiscount: { type: Number },
  Summary: {
    type: String,
    trim: true,
  },
    description: {
    type: String,
    trim: true,
    required:true
  },
  imageCover:{
    type:String,
    required:[true,'A tour must have a cover image']
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  ratingsAverage: {
    type: Number,
    default: 4.5,
  },
  ratingsQuanitiy: {
    type: Number,
    default: 0,
  },
  image:[String],
  createdAt:{
    type:Date,
    default:Date.now()
  },
  startDates: [Date]
});
const Tour = mongoose.model('Tour', tourSchema);
module.exports = Tour;
