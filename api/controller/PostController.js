const Post = require("../models/Post");
const User = require("../models/User");
const upload = require("../controller/UploadMiddleware");

// Post oluşturma fonksiyonu
const post = async (req, res) => {
  try {
    const { title, content, authorId } = req.body;

    // Resim URL'sini belirleyin (varsa)
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

    // Yeni postu oluşturun
    const newPost = new Post({
      title,
      content,
      author: authorId,
      image: imageUrl, // Düzeltme: image yerine imageUrl kullanılmalı
    });

    // Postu kaydedin
    const savedPost = await newPost.save();

    // Kullanıcının postlarına bu postu ekleyin
    await User.findByIdAndUpdate(authorId, {
      $push: { posts: savedPost._id },
    });

    res.status(201).json("successfully");
  } catch (error) {
    res.status(400).json({ message: "Error creating post", error });
  }
};

const getPost = async (req, res) => {
  try {
    const allPosts = await Post.find({}).populate("author");

    if (allPosts.length === 0) {
      return res.status(400).json({ message: "No posts found" });
    }
    return res.status(200).json(allPosts);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

const getSinglePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(400).json({ message: "no post" });
    }
    return res.status(200).json(post);
  } catch (error) {}
};

const getUserPosts = async (req, res) => {
  const { id } = req.params;

  try {
    if (id === "") {
      return res.status(400).json({ message: "no id" });
    }
    const posts = await Post.find({ author: id });

    return res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error });
  }
};

const getSearch = async (req, res) => {
  const query = req.query.query;

  try {
    if (!query) {
      return res.status(400).json({ message: "No query provided" });
    }
    const searchedValue = await Post.find({title: {$regex:query,$options:"i"}})
    
    return res.status(200).json(searchedValue)
    
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};


module.exports = {
  post,
  getPost,
  getSinglePost,
  getUserPosts,
  getSearch
};
