const transporter = require("../config/mailer");
const { activation, wellcome } = require("./templates");

const sendActivationMail = async ({ to, token }) => {
  try {
    const template = activation({ to, token });
    return await transporter.sendMail(template);
  } catch (e) {
    console.info('> Error at "sendActivationMail" helper: ', e.message);
    return false;
  }
};

const sendWellcomeMail = async ({ to, token }) => {
  try {
    const template = wellcome({ to, token });
    return await transporter.sendMail(template);
  } catch (e) {
    console.info('> Error at "sendWellcomMail" helper: ', e.message);
    return false;
  }
};

module.exports = { sendActivationMail, sendWellcomeMail };
