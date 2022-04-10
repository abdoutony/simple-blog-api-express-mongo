const express = require("express");
const router = express.Router();
const PostRoutes = require("./posts/PostRoutes");
module.exports = () => {
  router.get("/", (req, res) => {
    res.send("Hello World");
  });

  router.use("/", PostRoutes());
  return router;
};
