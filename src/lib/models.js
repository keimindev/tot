import mongoose from "mongoose";

const recordsSchema = new mongoose.Schema(
    {
        userId: {
            type: Number,
            required: true,
            unique:true,
        },
        username:{
            type: String,
            required: true,
            unique: true,
            minlength: 3,
            maxlength: 10
        },
        time: {
            type: Number,
            required: true,
        },
        section:{
            type: String,
            required: true,
            minlength: 1,
            maxlength: 50
        },
    },
    {timestamps: true }
)

const userSchema = new mongoose.Schema(
    {
      username: {
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 20,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        max: 50,
      },
      password: {
        type: String,
      },
      image:{
        type:String,
      }
    },
    { timestamps: true }
  );


export const Record = mongoose.models?.Record || mongoose.model("Record", recordsSchema);
export const User = mongoose.models?.User || mongoose.model("User", userSchema);