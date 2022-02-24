const cron = require("node-cron");
const transporter = require("./mailer");

// Sending emails every day al 9am.
cron.schedule("13 10 * * *", function () {
  console.log("---------------------");
  console.log("Running Cron Job");

  let messageOptions = {
    from: process.env.MAIL_USER,
    to: process.env.MAIL_USER,
    subject: "Scheduled Email",
    text: "Hi maidersonn. This email was automatically sent by me.",
  };

  transporter.sendMail(messageOptions, function (error, info) {
    if (error) {
      throw error;
    } else {
      console.log("Email successfully sent!");
    }
  });
});
