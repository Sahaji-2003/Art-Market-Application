
// ============================================
// routes/communityRoutes.js
// ============================================
const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const { protect } = require('../middleware/authMiddleware');

// All routes are protected

// Post/Discussion routes
// Create post
router.post('/posts', protect, postController.createPost);

// Get all posts
router.get('/posts', protect, postController.getAllPosts);

// Get single post
router.get('/posts/:postId', protect, postController.getPost);

// Update post
router.put('/posts/:postId', protect, postController.updatePost);

// Delete post
router.delete('/posts/:postId', protect, postController.deletePost);

// Like/Unlike post
router.post('/posts/:postId/like', protect, postController.toggleLike);

// Get comments for post
router.get('/posts/:postId/comments', protect, postController.getComments);

// Add comment to post
router.post('/posts/:postId/comments', protect, postController.addComment);

// Like/Unlike comment
router.post('/comments/:commentId/like', protect, postController.toggleCommentLike);

// Delete comment
router.delete('/comments/:commentId', protect, postController.deleteComment);

module.exports = router;