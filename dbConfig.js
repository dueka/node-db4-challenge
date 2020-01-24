const knex = require("knex");

const config = require("../node-db4-challenge/knexfile");

const db = knex(config.development);

module.exports = db;
