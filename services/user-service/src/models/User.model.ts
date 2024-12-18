import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: {
            required: true,
            type: String,
        },
        email: {
            required: true,
            type: String,
        },
        password: {
            required: true,
            type: String,
        },
        onboardingCompleted: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
)

const User = mongoose.model("User", userSchema);

export default User;