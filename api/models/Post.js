const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Make sure this matches the User model name
    required: true
  },
  image: {
    type: String,
    default: null
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
