const express = require("express");
const { body } = require("express-validator");

const router = express.Router();

const blogController = require("../controllers/blog");

// [POST] : /v1/blog/post
router.post(
  "/post",
  [body("title"), body("body")],
  blogController.createBlogPost
);

router.get("/posts", blogController.getAllBlogPost);
router.get("/post/:postId", blogController.getBlogPostById);
router.put(
  "/post/:postId",
  [body("title"), body("body")],
  blogController.updateBlogPost
);

router.delete("/post/:postId", blogController.deleteBlogPost);
// router.get('/post/search', blogController.searchBlogPost);

module.exports = router;
