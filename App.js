const fs = require("fs");
const yargs = require("yargs");
const http = require('http');
const port = 3000;
const server = http.createServer(function(req,res){
res.write('hello Node !!!')
res.end()
});


server.listen(port,function(error){
    if(error){
        console.log('wrong',error)
    }else{
        console.log('on port', + port)
    }
})