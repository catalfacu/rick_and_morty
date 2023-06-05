const express = require("express");
const server = express();
const router = require('./routes/index');
const morgan = require('morgan');
const PORT = 3001;

server.use(express.json());
server.use(morgan('dev'));
server.use('/rickandmorty' , router);

server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
   );
   next();
});




server.listen(PORT, () => {
   console.log(('Server raised in port:' + PORT));
});
















// const http = require('http');
// const getCharacterById = require('./controllers/getCharacterById')


// http.createServer((req,res)=>{
//     res.setHeader('Access-Control-Allow-Origin', '*');

//  if(req.url.includes("/rickandmorty/character")) {
//     const id = req.url.split("/").pop();
//     getCharacterById(res,id);
//  }
 
// }).listen(3001,'localhost')