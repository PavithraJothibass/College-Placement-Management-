const express = require('express');
const bcrypt = require('bcrypt');
const Admin = require('../models/AdminModel'); // Adjust the path as necessary
const router = express.Router();

// Admin login route
router.post('/admin_login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const admin = await Admin.findOne({ username });
        if (!admin) {
            return res.status(400).json({ error: 'Invalid username or password' });
        }

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid username or password' });
        }

        // Login successful
        res.json({ message: 'Login successful', username }); // Optionally return a token or user info
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
