const mongoose = require("mongoose");
const ShareSchema = new mongoose.Schema(
    {
        Sharefile: { type: String },
        Ips: { type: [String], default: [] },
    },
    {
        timestamps: true,
    }
);

const Share = mongoose.model("Share", ShareSchema);

module.exports = Share