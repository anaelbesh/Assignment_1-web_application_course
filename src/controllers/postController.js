const postModal = require('../models/postModel');

//get all posts
const getAllPosts = async (req, res) => {
    try {
        const posts = await postModal.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// get a post by ID
const getPostById = async (req, res) => {
    try {
        const post = await postModal.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// add a new post
const addNewPost = async (req, res) => {
    const { sender, title, content } = req.body;
    const newPost = new postModal({ sender, title, content });
    try {
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    getAllPosts,
    getPostById,
    addNewPost,
};

