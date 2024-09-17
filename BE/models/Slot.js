// import { Document, Schema, model } from "mongoose";
// // import DbConnect from "./db";
// // DbConnect()
// interface slotDocument extends Document {
//   file: string;
//   text: string;
// }

// const SlotSchema = new Schema<slotDocument>({
//   file: { type: String },
//   text: { type: String },
// });

// // Create and export model
// const Slot = model<slotDocument>("Slot", SlotSchema);
// export default Slot;

const mongoose = require("mongoose");

const SlotSchema = new mongoose.Schema(
    {
        file: { type: String },
        text1: { type: String },
        text2: { type: String },
        Slug: { type: String },
        // wordSlotNumber: { type: String }
    },
    {
        timestamps: true,
    }
);

const Slot = mongoose.models.Slot || mongoose.model("Slot", SlotSchema);
module.exports = Slot
