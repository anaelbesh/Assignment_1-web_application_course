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

module.exports = {
    getAllPosts,
};