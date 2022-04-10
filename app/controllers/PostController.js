const Post = require("../models/PostModel");
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.status(200).send(posts);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.findPostById = async (req, res) => {
  try {
    const post = await Post.findOne({ _id: req.params.id });
    res.status(200).send(post);
  } catch (err) {
    res.status(500).send(err);
  }
};
exports.findPostsByCategory = async (req, res) => {
  try {
    const posts = await Post.find({ category: req.params.category });
    res.status(200).send(posts);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.addNewPost = async (req, res) => {
  try {
    console.log(req.body);
    let post = new Post(req.body);
    await post.save();
    res.status(200).send(post);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.updatePostById = async (req, res) => {
  try {
    let post = await Post.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      useFindAndModify: false,
    });
    res.status(200).send(post);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.deletePostById = async (req, res) => {
  try {
    await Post.deleteOne({ _id: req.params.id });
    const posts = await Post.find().sort({ createdAt: -1 });
    res.status(200).send(posts);
  } catch (err) {
    res.status(500).send(err);
  }
};
