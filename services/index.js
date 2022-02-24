const router = require("express").Router();

module.exports = (db) => {
  router.post("/subscribe", require("./subscribe")(db));
  router.get("/confirmation/:token", require("./confirm")(db));

  return router;
};
