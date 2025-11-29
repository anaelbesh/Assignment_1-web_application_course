const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

router.post('/:id', commentController.createComment);
router.delete('/:id', commentController.deleteCommentById);

module.exports = router;
