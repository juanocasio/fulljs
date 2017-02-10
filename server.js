import config from './config';
import express from 'express'
import fs from 'fs';

const server = express();

server.get('/', (req,res) => {
  res.send('Hello Express');
});

// server.get('/about.html', (req,res) => {
//   fs.readFile('./about.html', (err,data)=>{
//     res.send(data.toString());
//   });
// });

server.use(express.static('public'));

server.listen(config.port, () =>{
  console.log('Listening on port ', config.port);
});