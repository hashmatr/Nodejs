const fs = require('fs')
fs.readFile('./test-file.txt',()=>{
  setTimeout(()=>{
  console.log("timer");
},0)
 setTimeout(()=>{
  console.log("timer");
},3000)
setImmediate(()=>{
  console.log('Immediate');
})
  console.log('I/O module');
})
setTimeout(()=>{
  console.log("timer");
},0)
setImmediate(()=>{
  console.log('Immediate');
})
process.nextTick(()=>{
  console.log('process next tick');
  
})
console.log('hello world');
