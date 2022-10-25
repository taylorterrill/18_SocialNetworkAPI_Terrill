const mongoose = require('mongoose');

// User model will store information about the user, including:
// username, email, thoughts, and info about their friends

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, "Please input a valid email address."]
    },
    thoughts: [
        {
            // Array of `_id` values referencing the `Thought` model
        },
    ],
    friends: [
        {
            // Array of `_id` values referencing the `User` model (self-reference)
        },
    ],
})