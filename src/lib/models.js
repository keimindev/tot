import mongoose from "mongoose";

const recordsSchema = new mongoose.Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true,
            min:3,
            max: 10
        },
        time: {
            type: Number,
            required: true,
            max: 50,
        },
        section:{
            type: String,
            required: true,
            min:1,
            max: 50
        },
    },
    {timestamps: true }
)

export const Record = mongoose.models?.Record || mongoose.model("Record", recordsSchema);