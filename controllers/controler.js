const endpoints = require("../endpoints.json");
const { selectedCategories } = require("../models/models.js");

exports.getEndpoints = (request, response, next) => {
  response.status(200).send(endpoints);
};

exports.getCategories = (request, response, next) => {
  selectedCategories()
    .then((result) => {
      response.status(200).send({ categories: result });
    })
    .catch((err) => {
      next(err);
    });
};
