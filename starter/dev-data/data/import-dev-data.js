const fs = require('fs')
const Tour = require('./../../model/tourModel')
const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config({path: './config.env'})
const DB = process.env.DATABASE.replace('<PASSWORD>',process.env.DATABASE_PASSWORD);
mongoose.connect(DB,{
}).then(()=>console.log("Database is connected")
)

const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours-simple.json`,'utf-8'))

const importData = async () =>{
try{
  await Tour.create(tours)
  console.log('Data added to database successfully');
    }
    catch(err){
        console.log(err)
}
}
const deletedata = async ()=>{
try{
  await Tour.deleteMany()
  console.log('Data deleted from the database succesfully');
  process.exit()
}
catch(err){
  console.log(err)
}
}
if(process.argv[2]=='--import'){
  importData();}
else if (process.argv[2] == '--delete'){
 deletedata();
}