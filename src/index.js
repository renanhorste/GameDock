//const { json } = require('express');
const express = require('express');
const {uuid, isUuid} = require ('uuidv4');
const app = express();

app.use(express.json());

const games = [];

function logRequest(request, response, next){
  const {method, url} = request;
  const logLabel = `[${method.toUpperCase()}] ${url}`;

  console.time(logLabel);

  next(); //next middleware

  console.timeEnd(logLabel);
}


function validadeProjectId(request,response,next){
  const {id} = request.params;
  if (!isUuid(id)){ // se não for o ID 
      return response.status(400).json({error: "invalid project ID"})
  }
  return next();
}

  app.use(logRequest);

 app.get('/games', (request,response)=>{
    const {title} = request.query;

    const results = title
      ? games.filter(game => game.title.includes(title))
      : games;

    return response.json(results);
   });

 app.post('/games', (request,response) => {

   const {title, owner} = request.body;
   const game = {id: uuid(), title, owner};

   games.push(game);

   return response.json(game);

 });

 app.put('/games/:id',validadeProjectId, (request, response) => {

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

 app.delete('/games/:id',validadeProjectId, (request, response) => {
    const {id} = request.params;
    const gameIndex = games.findIndex(game => game.id == id);
    if (gameIndex <0 ){
      return response.status(400).jsonjson({error: "Console nao encontrado"});

    }

    games.splice(gameIndex,1);

    return response.status(204).send();

 });




 app.listen(3333, ()=>{
    console.log('⚡Servidor Online⚡');
 });