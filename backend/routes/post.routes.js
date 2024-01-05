const express = require('express');
const { setPosts } = require('../controllers/post.controller');
const { getPosts } = require('../controllers/post.controller');
const { editPost } = require('../controllers/post.controller');
const { deletePost } = require('../controllers/post.controller');
const { likePost } = require('../controllers/post.controller');
const { dislikePost } = require('../controllers/post.controller');

const router = express.Router();

router.get("/", getPosts);
router.post("/", setPosts);
router.put("/:id", editPost);
router.delete("/:id", deletePost);
router.patch("/like-post/:id", likePost);
router.patch("/dislike-post/:id", dislikePost);

module.exports = router;