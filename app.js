const express = require('express');
const { getCategories, getEndpoints } = require('./controllers/controler');
const app = express();

app.get('/api', getEndpoints);

app.get('/api/categories', getCategories)

app.all('*', (request, response) =>{
    response.status(404).send({msg: 'error path not found'})
})

module.exports = app;