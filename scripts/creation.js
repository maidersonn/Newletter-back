require("dotenv").config();

const db = require("../config/db");
const { sql } = require("slonik");

const create = async () => {
  try {
    await db.query(sql`
    CREATE TABLE IF NOT EXISTS users (
      email TEXT UNIQUE NOT NULL,
      token TEXT
    )`);
    console.info("> creation done! 🚀");
  } catch (error) {
    console.info("> creation error! ❌");
    console.info(">", error.message);
  }
};

create();
