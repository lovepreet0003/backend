const fs=require("fs");
// synchronous 
// fs.writeFileSync("./test.txt","Hello World");

// asynchronus
// fs.writeFile("./test1.txt","hello World Asynronous",(err)=>{});

// to read files 
// 1.sync
// const result=fs.readFileSync("./test1.txt","utf-8");
// console.log(result);
// 2.async
// fs.readFile("./test1.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("Error");

//     }
//     else{
//         console.log(result);
//     }
// })

// append in file
fs.appendFileSync("./test.txt",`${Date.now()}hey there\n`)