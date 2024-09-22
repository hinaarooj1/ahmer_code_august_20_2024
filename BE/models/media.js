const mongoose = require("mongoose");

const MediaSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true, // Store the category
        },
        thumbnailUrl: {
            type: String,
            required: true, // Store the category
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    }
);

const Media = mongoose.model("Media", MediaSchema);

module.exports = Media
