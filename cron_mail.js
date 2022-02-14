const cron = require("node-cron");
const nodemailer = require("nodemailer");

// Create mail transporter.
let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: "maidersonn@gmail.com",
    pass: "Ourplac3",
  },
});

// Sending emails every day al 18:45.
cron.schedule("41 9 * * *", function () {
  console.log("---------------------");
  console.log("Running Cron Job");

  let messageOptions = {
    from: "maidersonn@gmail.com",
    to: "maidersonn@gmail.com",
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
