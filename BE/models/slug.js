const mongoose = require("mongoose");
const SlugSchema = new mongoose.Schema(
    {
        slug: { type: String, unique: true },
        Ips: { type: [String], default: [] },
    },
    {
        timestamps: true,
    }
);

const Slug = mongoose.model("Slug", SlugSchema);
module.exports = Slug
