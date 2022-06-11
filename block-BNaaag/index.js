const { AsyncLocalStorage } = require("async_hooks");
let fs=require("fs");

// sync

console.log(fs.readFileSync("./index.md").toString())

// async
console.time("execute");
fs.readFile('./index.md',(err,file)=>{
    console.log(file.toString());
    console.log(err);
    console.timeEnd("execute")
})

let buff1=Buffer.alloc(10);
console.log(buff1);
buff1.write("Welcome to buffer");
