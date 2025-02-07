import express from "express"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import User from "../models/User.js"

const router = express.Router()

router.post("/register", async(req, res) => {
    try {
        const { username, email, password, role } = req.body

        // Check if user already exists
        let user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({ message: "User already exists" })
        }

        // Hash password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        // Create new user
        user = new User({
            username,
            email,
            password: hashedPassword,
            role,
        })

        await user.save()

        // Create and send JWT token
        const payload = {
            user: {
                id: user.id,
                role: user.role,
            },
        }

        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" }, (err, token) => {
            if (err) throw err
            res.json({ token })
        })
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server error")
    }
})

router.post("/login", async(req, res) => {
    try {
        const { email, password } = req.body

        // Check if user exists
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" })
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" })
        }

        // Create and send JWT token
        const payload = {
            user: {
                id: user.id,
                role: user.role,
            },
        }

        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" }, (err, token) => {
            if (err) throw err
            res.json({ token })
        })
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server error")
    }
})

export default router