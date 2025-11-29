const postModal = require('../models/postModel');
const commentModal = require('../models/commentModel');

// create a new comment
const createComment = async (req, res) => {
    const postId = req.params.id;
    const { content, sender } = req.body;
    const post = await postModal.findById(postId);
    if (!post) {
        return res.status(404).json({ message: 'Post not found' });
    }
    const newComment = new commentModal({ postId, content, sender });  
    try {
        const savedComment = await newComment.save();
        post.comments.push(savedComment._id);
        await post.save();
        res.status(201).json(savedComment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }   
}

//delet a comment by ID
const deleteCommentById = async (req, res) => {
    const commentId = req.params.id;
    try {
        const deletedComment = await commentModal.findByIdAndDelete(commentId);
        if (!deletedComment) {
            return res.status(404).json({ message: 'Comment not found' });
        }
        res.status(200).json({ message: 'Comment deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    createComment,
    deleteCommentById
};