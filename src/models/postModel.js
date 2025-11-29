const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    sender: {
        type: String,
        required: true,
        trim: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true
    },
    comments : {
    type: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    default: []
    }
});

module.exports = mongoose.model('Post', postSchema);