require("dotenv").config();

const db = require("../config/db");
const { sql } = require("slonik");
const drop = async () => {
  try {
    await db.query(sql`
      DROP TABLE IF EXISTS subscribers;
    `);
    console.info("> drop done! 🚀");
  } catch (error) {
    console.info("> drop error! ❌");
    console.info(">", error.message);
  }
};

drop();
