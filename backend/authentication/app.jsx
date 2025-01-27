const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./models/User');
const router = express.Router();

const JWT_SECRET = 'your_jwt_secret_key';

// Registration
router.post('/register', async(req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const newUser = new User({ username, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: 'Registration successful' });
    } catch (error) {
        res.status(500).json({ error: 'User already exists' });
    }
});

// Login
router.post('/login', async(req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ error: 'User does not exist' });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(400).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, JWT_SECRET);
    res.json({ token });
});

// Authentication Middleware
const authenticate = (req, res, next) => {
    const token = req.headers.authorization ?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Unauthorized' });

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) return res.status(403).json({ error: 'Invalid token' });
        req.userId = decoded.id;
        next();
    });
};

// Logout (Frontend should handle token removal)
router.post('/logout', authenticate, (req, res) => {
    res.json({ message: 'Logout successful' });
});

module.exports = router;