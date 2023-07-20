const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { createSchema, createTables } = require("./db-queries");
const client = require("./db-config");
const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.json());
app.use(cors());

client.connect().then(async () => {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
  }

  console.log("Connected to database.");
  await createSchema();
  await createTables();
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

module.exports = app;
