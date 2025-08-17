const express = require('express');
const fs = require('fs');
const app = express(); 
app.use(express.json())
const tours =JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`))
app.get('/api/v1/tours',(req,res)=>{
  res.status(200).json({
    status:'success',
    result:tours.length,
    data:{
      tours
    }
  })})
app.post('/api/v1/tours',(req,res)=>{
  const newid = tours[tours.length-1].id+1;
  const newTour = Object.assign({
    id: newid} , req.body)
    tours.push(newTour);
    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours),err=>{
      res.status(201).json({
        status : "success",
        data:{
          tour : newTour
        }
      })
    })
  })
// app.get('/', (req, res) => {
//   res.status(200).json(({message : `Hello from server side`, app : 'notour'}));
// });
// app.post('/',(req,res)=>{
//      res.end('Yes you can post to this app');
// })
const port = '3000';
app.listen(port, '127.0.0.1', () => {
  console.log(`listening on port ${port}`);
});
