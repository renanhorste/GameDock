const express = require('express');

const app = express();

app.use(express.json());



 app.get('/projects', (request,response)=>{
    const query = request.query;

    return response.json(query);
 });

 app.post('/projects', (request,response) => {

 });

 app.put('/projects/:id', (request, response) => {

 });

 app.delete('/projects/:id', (request, response) => {

 });




 app.listen(3333, ()=>{
    console.log('⚡Servidor Online⚡');
 });