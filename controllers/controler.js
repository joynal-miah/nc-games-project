const { selectedCategories } = require("../models/models.js");
exports.getCategories = (request, response, next) => {
  selectedCategories()
    .then((result) => {
      response.status(200).send({ result: result });
    })
    .catch((err) => {
      next(err);
    });
};
