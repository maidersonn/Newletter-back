const express = require("express");
const app = express();
require("dotenv").config();
const db = require("./config/db");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(require("./services")(db));

app.use(({ statusCode = 500, error }, _, res, __) => {
  res.status(statusCode).json({
    sucess: false,
    message: error.message,
  });
});

app.listen(3000, () => {
  console.log("> ✅ server up at port", 3000);
});
