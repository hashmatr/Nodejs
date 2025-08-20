const morgan = require('morgan')
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const app = require('./app')
dotenv.config({path:'./config.env'})
const DB = process.env.DATABASE.replace('<PASSWORD>',process.env.DATABASE_PASSWORD);
mongoose.connect(DB,{
}).then(()=>console.log("Database is connected")
)
const tourSchema =new mongoose.Schema({
  name: {
    type:String,
    required:[true,'A tour must have a name'],
    unique:true
  },
  price: {type:Number,
    required:[true,'A tour must have a Price'],
  },
  rating: {
    type:Number,
    required:[true,'A tour must have a rating'],
  },
})
const Tour = mongoose.model('Tour',tourSchema)
const test_tour = new Tour({
  name:"The Forest Hike",
  price:497,
  rating:4.7
})
test_tour.save().catch(doc=>{console.log(doc)})

if(process.env.NODE_ENV === 'development'){
  app.use(morgan('dev'))
}
const port = process.env.port || '3000';
app.listen(port, '127.0.0.1', () => {
  console.log(`listening on port ${port}`);
});
