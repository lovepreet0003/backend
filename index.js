// const fs = require("fs");
// console.log(fs);

const http = require("http");
const fs=require("fs");

const server = http.createServer((req, res) => {
    const log=`${Date.now()}:New Req Received\n`;
    fs.appendFile("log.txt",log,(err,data)=>{

        res.end(" hello Chitkara University");
    })
});

server.listen(8000, ()=> console.log("Server started"));
