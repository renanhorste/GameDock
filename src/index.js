const express = require('express');

const app = express();

app.use(express.json());



 app.get('/projects', (request,response)=>{
    const {title, owner} = request.query;
    console.log(title);
    console.log(owner);
    
    return response.json({message: "resposta enviada ao servidor"});
   });

 app.post('/projects', (request,response) => {
   const {title, owner} = request.body;
   console.log(title, owner);
 });

 app.put('/projects/:id', (request, response) => {
   const {id} = request.params;
   console.log(id);
 });

 app.delete('/projects/:id', (request, response) => {

 });




 app.listen(3333, ()=>{
    console.log('⚡Servidor Online⚡');
 });