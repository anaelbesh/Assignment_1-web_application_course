const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

router.post('/:id', commentController.createComment);
router.get('/:id', commentController.getCommentById);
router.delete('/:id', commentController.deleteCommentById);
router.put('/:id', commentController.updateCommentById);
router.get('/', commentController.getAllComments);

module.exports = router;
