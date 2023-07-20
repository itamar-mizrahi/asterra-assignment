const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  user: "Itamar_Mizrahi",
  password: "Aa123456",
  database: "taskdb",
});

module.exports = client;


// const mysql = require("mysql");

// const db = mysql.createConnection({
//   host: "taskdb.cjczdn9yksiu.us-east-2.rds.amazonaws.com",
//   port: "3306",
//   user: "Itamar_Mizrahi",
//   password: "Aa123456",
//   database: "taskdb",
// });
//  module.exports = db;
