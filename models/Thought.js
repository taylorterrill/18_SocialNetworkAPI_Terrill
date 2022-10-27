const mongoose = require('mongoose');
const reactionSchema = require('./Reaction');

// Thought model will store...

const thoughtSchema = new mongoose.Schema({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        // Use a getter method to format the timestamp on query
    },
    username: {
        type: String,
        required: true,
    },
    reactions: {
        // Array of nested documents created with the reactionSchema
    },
})

// Schema Settings

// Create a virtual called reactionCount that retrieves the length of the thought's 
// reactions array field on query.

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;
