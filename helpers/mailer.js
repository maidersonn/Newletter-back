const transporter = require("../config/mailer");
const { activation, wellcome } = require("./templates");

const send = transporter.sendMail.bind(transporter);

const sendActivationMail = async ({ to, token }) => {
  try {
    const template = activation({ to, token });
    return await send(template);
  } catch (e) {
    console.info('> Error at "sendActivationMail" helper: ', e.message);
    return false;
  }
};

const sendWellcomeMail = async ({ to }) => {
  try {
    const template = wellcome({ to });
    return await send(template);
  } catch (e) {
    console.info('> Error at "sendWellcomMail" helper: ', e.message);
    return false;
  }
};

module.exports = { sendActivationMail, sendWellcomeMail };
