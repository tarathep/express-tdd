require('dotenv').config();
const mongoose = require("mongoose");

if (!process.env.DATABASE_URL) {
  console.log("There does not seem to be a value for the database connection string in DATABASE_URL");
  throw new Error("No value in DATABASE_URL for the connection string");
}

// To override the database name, set the DATABASE_NAME environment variable in the .env file
const DATABASE_NAME = process.env.DATABASE_NAME || 'todo-tdd';

async function connect() {
  try {
    await mongoose.connect(
      process.env.DATABASE_URL,
      {
        dbName: DATABASE_NAME,
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );
  } catch (err) {
    console.error("Error connecting to mongodb");
    console.error(err);
  }
}

module.exports = { connect };
