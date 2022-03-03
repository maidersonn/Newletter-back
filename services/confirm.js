const { confirmUser } = require("../query/register");
const { sendWellcomeMail } = require("../helpers/mailer");

module.exports = (db) => async (req, res, next) => {
  const { token } = req.params;

  if (!token) {
    return next({
      statusCode: 400,
      error: new Error("No token available"),
    });
  }

  const result = await confirmUser(db, token);

  if (!result) {
    return next({
      statusCode: 400,
      error: new Error("Invalid token"),
    });
  }

  await sendWellcomeMail({ to: result.email });

  res.status(200).json({
    success: true,
    message: "Account activated. Email has been sent to user",
  });
};
