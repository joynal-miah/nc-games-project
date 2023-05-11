const express = require('express');
const { getCategories } = require('./controllers/controler');
const app = express();

app.use(express.json());

app.get('/api/categories', getCategories)

app.all('*', (request, response) =>{
    response.status(404).send({msg: 'error path not found'})
})

app.use((err, request, response, next) => {
    response.status(400).send(err);
});

module.exports = app;