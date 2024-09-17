const mongoose = require("mongoose");

const RollCountSchema = new mongoose.Schema(
    {
        address: { type: String },
        roll: { type: Number },
        freeSpin: { type: Number },
    },
    {
        timestamps: true,
    }
);

const RollCount = mongoose.model("rollCount", RollCountSchema);
module.exports = RollCount
