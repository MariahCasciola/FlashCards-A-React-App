const path = require("path");
require("dotenv").config();
const {
  DATABASE_URL,
  DATABASE_URL_TEST,
  DATABASE_URL_PREVIEW,
  DATABASE_URL_DEVELOPMENT,
} = process.env;

module.exports = {
  development: {
    client: "postgresql",
    connection: DATABASE_URL_DEVELOPMENT,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },
};
