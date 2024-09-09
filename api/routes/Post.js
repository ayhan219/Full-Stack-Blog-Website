const express = require("express");
const router = express.Router();
const { post, getPost,getSinglePost,getUserPosts,getSearch } = require("../controller/PostController");
const upload = require("../controller/UploadMiddleware");

// POST route tanımı
router.post("/", upload.single('image'), post);
router.get("/",getPost)
router.get("/search",getSearch)
router.get("/:id",getSinglePost)
router.get("/get/:id",getUserPosts)



module.exports = router;
