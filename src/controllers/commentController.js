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

// get a comment by ID
const getCommentById = async (req, res) => {
    const commentId = req.params.id;
    try {
        const comment = await commentModal.findById(commentId);
        if (!comment) {
            return res.status(404).json({ message: 'Comment not found' });
        }
        res.status(200).json(comment);
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

// update a comment by ID
const updateCommentById = async (req, res) => {
    const commentId = req.params.id;
    const { content } = req.body;
    try {
        const updatedComment = await commentModal.findByIdAndUpdate(
            commentId,
            { content },
            { new: true }
        );
        if (!updatedComment) {
            return res.status(404).json({ message: 'Comment not found' });
        }
        res.status(200).json(updatedComment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }   
}

// get all comments (by postId)
const getAllComments = async (req, res) => {
    const { postId } = req.query;
    const filter = postId ? { postId } : {};
    try {
        const comments = await commentModal.find(filter);
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    createComment,
    getCommentById,
    deleteCommentById,
    updateCommentById,
    getAllComments
};