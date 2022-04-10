const express = require("express");
const router = express.Router();
const PostController = require("../../controllers/PostController");
module.exports = () => {
  router.get("/posts", PostController.getAllPosts);
  router.post("/posts", PostController.addNewPost);
  router.get("/posts/:id", PostController.findPostById);
  router.put("/posts/:id", PostController.updatePostById);
  router.delete("/posts/:id", PostController.deletePostById);
  router.get("/posts/categories/:category", PostController.findPostsByCategory);
  return router;
};
