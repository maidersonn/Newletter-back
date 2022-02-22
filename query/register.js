const { sql } = require("slonik");

const userExists = async (db, email) => {
  try {
    return await db.maybeOne(sql`
     SELECT * FROM users
     WHERE email = ${email}
   `);
  } catch (error) {
    console.info('> Error at "userExist" query:', error.message);
    return false;
  }
};

const createUser = async (db, { email, username, token }) => {
  try {
    return await db.query(sql`
        INSERT INTO users ( email, username, token )
        VALUES ( ${email}, ${username}, ${token} )
      `);
  } catch (error) {
    console.info('> Error at "createUser" query:', error.message);
    return false;
  }
};

module.exports = { userExists, createUser };
