import express from "express"
import Project from "../models/Project.js"
import auth from "../middleware/auth.js"

const router = express.Router()

// Get all projects
router.get("/", auth, async(req, res) => {
    try {
        const projects = await Project.find().populate("client", "username")
        res.json(projects)
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server error")
    }
})

// Create a new project
router.post("/", auth, async(req, res) => {
    try {
        const { title, description, budget, deadline, skills } = req.body
        const newProject = new Project({
            title,
            description,
            budget,
            deadline,
            skills,
            client: req.user.id,
        })

        const project = await newProject.save()
        res.json(project)
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server error")
    }
})

// Get a specific project
router.get("/:id", auth, async(req, res) => {
    try {
        const project = await Project.findById(req.params.id).populate("client", "username")
        if (!project) {
            return res.status(404).json({ message: "Project not found" })
        }
        res.json(project)
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server error")
    }
})

// Update a project
router.put("/:id", auth, async(req, res) => {
    try {
        let project = await Project.findById(req.params.id)
        if (!project) {
            return res.status(404).json({ message: "Project not found" })
        }

        // Check if the user is the project owner
        if (project.client.toString() !== req.user.id) {
            return res.status(401).json({ message: "Not authorized" })
        }

        const { title, description, budget, deadline, skills, status } = req.body
        project = await Project.findByIdAndUpdate(
            req.params.id, { title, description, budget, deadline, skills, status }, { new: true },
        )

        res.json(project)
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server error")
    }
})

// Delete a project
router.delete("/:id", auth, async(req, res) => {
    try {
        const project = await Project.findById(req.params.id)
        if (!project) {
            return res.status(404).json({ message: "Project not found" })
        }

        // Check if the user is the project owner
        if (project.client.toString() !== req.user.id) {
            return res.status(401).json({ message: "Not authorized" })
        }

        await project.remove()
        res.json({ message: "Project removed" })
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server error")
    }
})

export default router