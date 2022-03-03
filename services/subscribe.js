const createConfirmToken = require("../helpers/hash");
const { sendActivationMail } = require("../helpers/mailer");
const { userExists, createUser } = require("../query/register");

const subscribe = (db) => async (req, res, next) => {
  const { email } = req.body;

  if (!email) {
    return next({
      statusCode: 400,
      error: new Error("Email is mandatory"),
    });
  }

  const user = await userExists(db, email);

  if (user) {
    return next({
      statusCode: 409,
      error: new Error("Username or email already in use"),
    });
  }

  const token = await createConfirmToken();

  const result = await createUser(db, {
    email,
    token,
  });

  if (result === false) {
    return next({
      statusCode: 409,
      error: new Error("Username or email already in use"),
    });
  }
  await sendActivationMail({ to: email, token });

  res.status(200).json({
    success: true,
    message: "> Activation token sent to provided email",
  });
};

module.exports = subscribe;
