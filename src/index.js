const { request } = require('express');
const express = require('express');

const app = express();

app.use(express.json());



 app.get('/projects', (require,response)=>{
     return response.json({message: 'hello world'});
 });

 app.listen(3333, ()=>{
    console.log('⚡Servidor Online⚡');
 });