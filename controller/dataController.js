const express = require('express');
const {getCategories, getRooms, getFurnitures, getFurnituresByCategory} = require('../service/service.js');
const app = express();

app.get('/categories', getCategories);
app.get('/rooms', getRooms);
app.get('/furnitures', getFurnitures);
app.get('/furnitures/category', getFurnituresByCategory);

  const port =3000;
  app.listen(port,()=>{
    console.log('Server started: Port',port);
  });