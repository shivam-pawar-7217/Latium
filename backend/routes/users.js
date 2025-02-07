import express from "express"
import User from "../models/User.js"
import auth from "../middleware/auth.js"

const router = express.Router()

// Get user profile
router.get("/me", auth, async(req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password")
        res.json(user)
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server error")
    }
})

// Update user profile
router.put("/me", auth, async(req, res) => {
    try {
        const { username, email, skills, bio } = req.body
        const user = await User.findByIdAndUpdate(req.user.id, { username, email, skills, bio }, { new: true }).select(
            "-password",
        )
        res.json(user)
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server error")
    }
})

export default router