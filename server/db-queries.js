const pool = require("./db-config");

const createSchema = async () => {
  const resSchema = await pool.query(
    "CREATE SCHEMA [IF NOT EXISTS] ITAMAR_MIZRAHI;"
  );
  console.log(resSchema);
};

const createTables = async () => {
  const resTableUsers = await pool.query(
    "CREATE TABLE  [IF NOT EXISTS] USERS(ID int, FIRST_NAME varchar(255), LAST_NAME varchar(255), ADDRESS varchar(255), PHONE_NUMBER varchar(255), UNIQUE (ID));"
  );
  console.log(resTableUsers);
  const resTableHobbies = await pool.query(
    "CREATE TABLE  [IF NOT EXISTS] HOBBIES(USER_ID int, HOBBIES varchar(255));"
  );
  console.log(resTableHobbies);
};

module.exports = { createSchema, createTables };
