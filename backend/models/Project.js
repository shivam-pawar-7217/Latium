import mongoose from "mongoose"

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    budget: { type: Number, required: true },
    deadline: { type: Date, required: true },
    skills: [String],
    client: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    freelancer: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    status: { type: String, enum: ["open", "in_progress", "completed"], default: "open" },
    createdAt: { type: Date, default: Date.now },
})

export default mongoose.model("Project", projectSchema)