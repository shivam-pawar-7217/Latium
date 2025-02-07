import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["freelancer", "client"], required: true },
    skills: [String],
    bio: String,
    createdAt: { type: Date, default: Date.now },
})

export default mongoose.model("User", userSchema)