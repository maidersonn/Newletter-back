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

const createUser = async (db, { email, token }) => {
  try {
    return await db.query(sql`
        INSERT INTO users ( email, token )
        VALUES ( ${email}, ${token} )
      `);
  } catch (error) {
    console.info('> Error at "createUser" query:', error.message);
    return false;
  }
};
const confirmUser = async (db, token) => {
  try {
    return await db.transaction(async (tx) => {
      const user = await tx.maybeOne(sql`
        SELECT * FROM users
        WHERE token = ${token}
      `);
      if (!user) throw new Error("invalid token");
      await tx.query(sql`
        UPDATE users
        SET
          token = null
        WHERE
          token = ${token}
      `);
      return user;
    });
  } catch (error) {
    console.info('Error at "confirmUser" query: ', error.message);
  }
};

module.exports = { userExists, createUser, confirmUser };
