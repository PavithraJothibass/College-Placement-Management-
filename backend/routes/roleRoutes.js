const express = require('express');
const router = express.Router();
const Role = require('../models/Role');

// GET all roles
router.get('/', async (req, res) => {
    try {
        const roles = await Role.find();
        res.json(roles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
