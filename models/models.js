// db/index.js
const db = require("../db/connection");

exports.selectedCategories = () => {
  return db.query(`SELECT * FROM categories`).then((result) => {
    return result.rows;
  });
};
