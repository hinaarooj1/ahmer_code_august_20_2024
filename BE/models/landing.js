const mongoose = require("mongoose");

const landingSchema = new mongoose.Schema(
    {
        file1: { type: String },
        file3: { type: String },
        file5: { type: String },
    },
    {
        timestamps: true,
    }
);

const landing = mongoose.model("landing", landingSchema);

module.exports = landing;
