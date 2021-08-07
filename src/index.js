const { json } = require('express');
const express = require('express');
const {uuid} = require ('uuidv4');
const app = express();

app.use(express.json());

const games = [];

 app.get('/games', (request,response)=>{

    return response.json(games);
   });

 app.post('/games', (request,response) => {

   const {title, owner} = request.body;
   const game = {id: uuid(), title, owner};

   games.push(game);

   return response.json(game);

 });

 app.put('/games/:id', (request, response) => {

   const {id} = request.params;
   const {title, owner} = request.body;

   const gameIndex = games.findIndex(game => game.id == id);

  if (gameIndex<0){
    return response.status(400).json({error: "Console não encontrado"});
  }
  
  const game = {
    id,
    title,
    owner
  }

  games[gameIndex] = game;

  return response.json(game);

 });

 app.delete('/games/:id', (request, response) => {

 });




 app.listen(3333, ()=>{
    console.log('⚡Servidor Online⚡');
 });