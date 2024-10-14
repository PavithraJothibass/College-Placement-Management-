const express = require('express');
const bcrypt = require('bcrypt');
const Student = require('../models/studentModel'); // Adjust the path as necessary
const router = express.Router();
const StudentDetails = require('../models/StudentDetails'); // Adjust path as necessary

router.post('/register', async (req, res) => {
    const { username, email, password, firstName, lastName, dateOfBirth, phoneNumber, address } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
        const newStudent = new Student({
            username,
            email,
            password: hashedPassword,
            firstName,
            lastName,
            dateOfBirth,
            phoneNumber,
            address,
        });

        await newStudent.save();
        res.status(201).json({ message: 'Registration successful!' });
    } catch (error) {
        res.status(400).json({ error: 'Registration failed. Please try again.' });
    }
});
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const student = await Student.findOne({ username });
        if (!student) {
            return res.status(400).json({ error: 'Invalid username or password' });
        }

        const isMatch = await bcrypt.compare(password, student.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid username or password' });
        }

        // Optionally, you could return a token instead of just a message
        res.status(200).json({ message: 'Login successful!', username });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// POST: Save student details
router.post('/studentdetails', async (req, res) => {
    try {
        const newDetails = new StudentDetails(req.body);
        await newDetails.save();
        res.status(201).json({ message: 'Student details saved successfully!' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
