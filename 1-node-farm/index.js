// //Synchronous
const url = require('url')
const fs = require("fs");
const replaceel = require('./Modules/replacetemplate')
//  const textIn = fs.readFileSync('./txt/input.txt', 'utf-8')
//  console.log(textIn);
// const text = `This is what we know about avacardo ${textIn}.\n  Created on ${Date.now()}`
//  fs.writeFileSync('./txt/output.txt',text);
//  console.log('File written');
// Asynchronous
// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//     console.log(data2);
//     fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
//       console.log(data3);

//       fs.writeFile("./txt/start.txt",`${data2}\n${data3}`,'utf-8',(err)=>{
//         console.log("data is written");
//       })
//     });
//   });
// });
//server
const http = require('http');
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`,'utf-8')
 const templateoverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`,'utf-8')
const templateCard = fs.readFileSync(`${__dirname}/templates/template-card.html`,'utf-8')
 const templateProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`,'utf-8')

 const dataObject = JSON.parse(data);
const server = http.createServer((req,res)=>{
   const {query,pathname} = url.parse(req.url,true)
 if(pathname === '/'||pathname === '/overview'){
  res.writeHead(200,{"content-type":'text/html'})
  const htmlcards = dataObject.map(el=>replaceel(templateCard,el)).join('')
  const output = templateoverview.replace('{%PRODUCT_CARDS%}',htmlcards)
  res.end(output)
 }
 else if (pathname === '/product'){
  res.writeHead(200,{"content-type":'text/html'})
  const product = dataObject[query.id];
  const output = replaceel(templateProduct,product)
  res.end(output)}
  else if (pathname==='/api'){
    res.writeHead(200,{"content-type":'application/json'})
      res.end(data)
  }
 
 else{
   res.writeHead(404,{
    'Content-type':'text/html',
    'my-own-header':'hello world'
   })
   res.end('<h1>Page doesnot found!</h1>')
   
 }})
//     res.end("hello from te server");
// })
 server.listen(8000,'127.0.0.1',()=>{
    console.log('listening....');
 
})