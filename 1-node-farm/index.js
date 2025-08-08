// //Synchronous

// const fs = require("fs");
// // const textIn = fs.readFileSync('./txt/input.txt', 'utf-8')
// // console.log(textIn);
// // const text = `This is what we know about avacardo ${textIn}.\n  Created on ${Date.now()}`
// // fs.writeFileSync('./txt/output.txt',text);
// // console.log('File written');
// //Asynchronous
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
const server = http.createServer((req,res)=>{
    res.end("hello from te server");
})
server.listen(8000,'127.0.0.1',()=>{
    console.log('listening....');
    
})