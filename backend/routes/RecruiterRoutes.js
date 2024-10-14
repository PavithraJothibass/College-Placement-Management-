const express = require('express');
const bcrypt = require('bcrypt');
const Recruiter = require('../models/RecruiterModel'); // Adjust the path as necessary
const StudentDetails = require('../models/StudentDetails'); // Ensure this is imported for recruiter details
const router = express.Router();

// Registration route
router.post('/recruiter_register', async (req, res) => {
    const { username, email, password, phoneNumber } = req.body;

    if (!username || !email || !password || !phoneNumber) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    try {
        const existingRecruiter = await Recruiter.findOne({ username });
        if (existingRecruiter) {
            return res.status(400).json({ error: 'Username already exists.' });
        }

        const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
        const newRecruiter = new Recruiter({
            username,
            email,
            password: hashedPassword,
            phoneNumber,
        });

        await newRecruiter.save();
        res.status(201).json({ message: 'Registration successful!' });
    } catch (error) {
        console.error('Error saving recruiter:', error); // Log error
        res.status(500).json({ error: 'Internal server error.' });
    }
});

// Login route
router.post('/recruiter_login', async (req, res) => {
    console.log('Login request body:', req.body); // Log the incoming request body
    const { username, password } = req.body;

    try {
        const recruiter = await Recruiter.findOne({ username });
        if (!recruiter) {
            return res.status(400).json({ error: 'Invalid username or password' });
        }

        const isMatch = await bcrypt.compare(password, recruiter.password); // Ensure using recruiter.password
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid username or password' });
        }

        res.status(200).json({ message: `Welcome, ${username}!`, username });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Route to save recruiter-specific details
router.post('/recruiterdetails', async (req, res) => {
    try {
        const { officeName, overallEmployees, gstNo, overallProjects, address, contactNumber } = req.body;
        
        const newDetails = new StudentDetails({
            officeName,
            overallEmployees,
            gstNo,
            overallProjects,
            address,
            contactNumber,
        });

        await newDetails.save();
        res.status(201).json({ message: 'Details saved successfully!' });
    } catch (error) {
        console.error('Error saving recruiter details:', error);
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
