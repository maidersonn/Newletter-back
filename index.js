const express = require("express");
const app = express();
require("dotenv").config();
require("./cron_mail");

console.log("hola");

app.listen(3000, () => {
  console.log("> ✅ server up at port", 3000);
});
