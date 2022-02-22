const crypto = require("crypto");

const createConfirmToken = async () => {
  return crypto.randomBytes(32).toString("hex");
};

module.exports = createConfirmToken;
