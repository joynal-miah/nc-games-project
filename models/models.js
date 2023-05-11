// db/index.js
const db = require("../db/connection");

exports.selectedCategories = () => {
  return db.query(`SELECT * FROM categories`).then((result) => {

    if (result.rows.length === 0) {
      return Promise.reject({ status: 400, msg: 'error no categories exist' });
    }

    return result.rows;
  });
};
